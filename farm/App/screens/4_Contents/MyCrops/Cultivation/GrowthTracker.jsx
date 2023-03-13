import React, {useEffect, useState} from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import BodyHeader from '../../../../components/headers/BodyHeader';
import DoubleTab from '../../../../components/sub-headers/DoubleTab';
import SelectedCrop from '../../../../StaticData/SelectedCrop';
import Management from './TrackerTabs/Management';
import Request from '../../../../API_Callings/Request';
import AppUser from '../../../../StaticData/AppUser';
import Monitoring from './TrackerTabs/Monitoring';

const GrowthTracker =()=> {

    const [crop, setCrop] = useState('')
    const [leftTab, setLeftTab] = useState(false)
    const [error, setError] = useState(false)
    const [data, setData] = useState(false)

    const [cropActions, setCropActions] = useState({
        weeding: {start:null, gap:null, period:null},
        soiling: {start:null, gap:null, period:null},
        pruning: {start:null, gap:null, period:null},
        irrigation: {start:null, gap:null, period:null},
        fertiliation: {start:null, gap:null, period:null},
        harvesting: {start:null, gap:null, period:null},
   })


    const [period, setPeriod] = useState(null)
    const [growDate, setGrowDate] = useState(null)
    const [stages, setStages] = useState()

    useEffect(() => {
        const selected_crop = new SelectedCrop
        setCrop(selected_crop.fetch().name)
        setData(true)
    }, []);

    useEffect(() => {
        const get_Started =async()=> {
            try {
                const app_user = new AppUser
                const needed = {
                    farmer:app_user.fetch().id,
                    crop:crop
                 }

                const request = new Request
                const response = await request.GrowedCrop(needed)
                setGrowDate(response.data)   
            }

            catch(err) {
                console.log(err + 'Date is not getting')
            }
        }

        const get_CropData =async()=> {
            
            try {
                const request = new Request
                const response = await request.Selected({name:crop})
                setCropActions(response.data[0].actions)
                setPeriod(response.data[0].period)
                setStages(response.data[0].stages)
                setLeftTab(true)
                setError(true)
            }

            catch(err) {
                console.log(err + 'Crop data is not getting')
            }
        }

        get_CropData()
        get_Started()
    }, [data]);

    return (
        <View>
            <BodyHeader Title='Crop Growth Tracker'></BodyHeader>
            <Text style={styles.title}>{crop}</Text>

            <DoubleTab 
                    Mark={leftTab}
                    LeftButton='Workflow Management' 
                    press_LeftAction={()=> setLeftTab(true)}
                    RightButton='Crop Growth Monitoring'
                    press_RightAction={()=> setLeftTab(false)}>
            </DoubleTab>

            {leftTab && (
                <Management 
                    Crop={crop}
                    Grow={new Date(growDate)}
                    Period={period}
                    Actions={cropActions}>
                </Management>
            )}

            {!leftTab && error &&(
                <Monitoring
                    Grow={new Date(growDate)}
                    Stages={stages}>
                </Monitoring>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    title : {
        color:'black',
        fontSize:22,
        fontWeight:800,
        marginLeft:25,
        marginTop:15,
        marginBottom:13,
        color:'#005F41'
    },
})

export default GrowthTracker;