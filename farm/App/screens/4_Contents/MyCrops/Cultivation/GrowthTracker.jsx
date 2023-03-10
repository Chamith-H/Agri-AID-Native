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

const GrowthTracker =( props )=> {

    const [crop, setCrop] = useState('')

    const [leftTab, setLeftTab] = useState(true)

    useEffect(() => {
        const selected_crop = new SelectedCrop
        setCrop(selected_crop.fetch().name)
    }, []);

    return (
        <View>
            <BodyHeader Title='Crop Growth Tracker'></BodyHeader>
            <Text style={styles.title}>{crop}</Text>

            <DoubleTab 
                    LeftButton='Workflow Management' 
                    press_LeftAction={()=> setLeftTab(true)}
                    RightButton='Crop Growth Monitoring'
                    press_RightAction={()=> setLeftTab(false)}>
            </DoubleTab>

            {leftTab && (
                <Management></Management>
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