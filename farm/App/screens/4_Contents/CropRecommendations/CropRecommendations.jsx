import React, {useState}from 'react';
import SelectionDropdown from '../../../components/inputs/SelectionDropdown';
import PositiveButton from '../../../components/buttons/PositiveButton';
import BodyHeader from '../../../components/headers/BodyHeader';
import Request from '../../../API_Callings/Request';

import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';
import HoriontalScroller from '../../../components/grids/HoriontalScroller';

const CropRecommendations =()=> {
    const[crops, setCrops] = useState(['_DEFAULT'])

    const[selectRegion, setSelectRegion] = useState('')
    const[selectQuarter, setSelectQuarter] = useState('')

    const Regions = [
       "Colombo",
       "Gampaha",
       "Kalutara",
       "Kandy",
       "Matale",
       "Nuwara Eliya",
       "Galle",
       "Matara",
       "Hambantota",
       "Jaffna",
       "Kilinochchi",
       "Mannar",
       "Vavuniya",
       "Mullaitivu",
       "Batticaloa",
       "Ampara",
       "Trincomalee",
       "Kurunegala",
       "Puttalam",
       "Anuradhapura",
       "Polonnaruwa",
       "Badulla",
       "Moneragala",
       "Ratnapura",
       "Kegalle",
    ]

    const Quarters = [
        'January - April',
        'May - August',
        'September - December',
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
        <View style={{flex:1}}>
            <BodyHeader Title='Crop Recommendations'></BodyHeader>
                <ScrollView style={{backgroundColor:'white'}}>
                    <View style={styles.form}>
                        <View style={{position:'relative', zIndex:999}}>
                            <SelectionDropdown Label='Select Region' List={Regions} Selected={setSelectRegion}></SelectionDropdown>
                        </View>
                
                        <View style={{position:'relative', zIndex:998}}>
                            <SelectionDropdown Label='Select Quarter' List={Quarters} Selected={setSelectQuarter}></SelectionDropdown>
                        </View>
                
                        <View style={{marginHorizontal:'30%'}}>
                            <PositiveButton Title='Enter' press_Action={get_Recommendations}></PositiveButton>
                        </View>
                    </View>

                    <View style={{width:'100%', marginBottom:50, position:'relative', zIndex:-5}}>
                        <HoriontalScroller CropList={crops}></HoriontalScroller>
                </View>
            </ScrollView>
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