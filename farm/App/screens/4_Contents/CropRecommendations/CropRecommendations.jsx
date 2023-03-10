import React, {useState}from 'react';
import SelectionDropdown from '../../../components/inputs/SelectionDropdown';
import PositiveButton from '../../../components/buttons/PositiveButton';
import BodyHeader from '../../../components/headers/BodyHeader';
import Request from '../../../API_Callings/Request';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import HoriontalScroller from '../../../components/grids/HoriontalScroller';

const CropRecommendations =()=> {
    const[crops, setCrops] = useState(['_DEFAULT'])

    const[selectRegion, setSelectRegion] = useState('')
    const[selectQuarter, setSelectQuarter] = useState('')

    const Regions = [
        'Gampaha',
        'Colombo',
        'Kaluthara',
        'Galle',
        'Mathara',
        'Hambanthota'
    ]

    const Quarters = [
        'January - April',
        'April - July',
        'July - October',
        'October - January'
    ]

    const get_Recommendations = async()=> {
        const request = new Request;

        const recomanded = {region: selectRegion, quarter: selectQuarter}

        try {
            const response = await request.Recommendations(recomanded)
            
            if (response.data != 0) {
                setCrops(response.data)
            }
        }

        catch (err) {
            console.log(err)
        }
    }

    return (
        <View>
            <BodyHeader Title='Crop Recommendations'></BodyHeader>

            <View style={styles.form}>
                <SelectionDropdown Label='Select Region' List={Regions} Selected={setSelectRegion}></SelectionDropdown>
                <SelectionDropdown Label='Select Quarter' List={Quarters} Selected={setSelectQuarter}></SelectionDropdown>

                <View style={{marginHorizontal:'30%'}}>
                    <PositiveButton Title='Enter' press_Action={get_Recommendations}></PositiveButton>
                </View>
            </View>

            <View style={{width:'100%'}}>
                <HoriontalScroller CropList={crops}></HoriontalScroller>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        marginHorizontal:'9%',
        height:145,
        justifyContent:'space-between',
        marginVertical:60
    },

    text: {
        color:'black'
    }
})

export default CropRecommendations;