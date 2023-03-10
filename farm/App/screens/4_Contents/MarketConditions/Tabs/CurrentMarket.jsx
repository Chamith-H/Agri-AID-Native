import React from 'react';
import SelectionDropdown from '../../../../components/inputs/SelectionDropdown';
import PositiveButton from '../../../../components/buttons/PositiveButton';
import MarketGrid from '../../../../components/grids/MarketGrid';
import { useState } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const CurrentMarket =( props )=> {

    const[crop, setCrop] = useState('')
    const[region, setRegion] = useState('')

    const[showConditions, setShowConditions] = useState(false)

    const Regions = [
        'Gampaha',
        'Colombo',
        'Kaluthara',
        'Galle',
        'Mathara',
        'Hambanthota'
    ]

    const get_InputDATA =()=> {
        const cropData = {
            name: crop,
            region: region,
            type: 'current'
        }

        props.posting_Data(cropData)
        setShowConditions(true)
    }

    return (
        <View>
            <View style={styles.form}>
                <SelectionDropdown Label='Select Crop' List={props.CropList} Selected={setCrop}></SelectionDropdown>
                <SelectionDropdown Label='Select Region' List={Regions} Selected={setRegion}></SelectionDropdown>

                <View style={{marginHorizontal:'30%'}}>
                    <PositiveButton Title='Enter' press_Action={get_InputDATA}></PositiveButton>
                </View>
            </View>

            <View>
                {showConditions && (
                    <MarketGrid 
                    Type='Current' 
                    Crop='Lettuce (Iceberg)' 
                    Place='Gampaha'
                    Data={props.Market}>
                </MarketGrid>
                )} 
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
    }
})

export default CurrentMarket;