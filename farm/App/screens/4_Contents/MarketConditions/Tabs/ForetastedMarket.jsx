import React from 'react';
import SelectionDropdown from '../../../../components/inputs/SelectionDropdown';
import PositiveButton from '../../../../components/buttons/PositiveButton';
import MarketGrid from '../../../../components/grids/MarketGrid';
import { useState} from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

const ForetastedMarket =( props )=> {

    const[crop, setCrop] = useState('')
    const[region, setRegion] = useState('')
    const[quarter, setQuarter] = useState('')

    const[showConditions, setShowConditions] = useState(false)

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

    const get_InputDATA =()=> {
        const cropData = {
            name: crop,
            region: region,
            quarter: quarter,
            type: 'foretasted'
        }

        props.posting_Data(cropData)
        setShowConditions(true)
    }

    return (
        <View>
            <View style={styles.form}>
                <SelectionDropdown Label='Select Crop' List={props.CropList} Selected={setCrop}></SelectionDropdown>
                <SelectionDropdown Label='Select Region' List={Regions} Selected={setRegion}></SelectionDropdown>
                <SelectionDropdown Label='Select Quarter' List={Quarters} Selected={setQuarter}></SelectionDropdown>

                <View style={{marginHorizontal:'30%'}}>
                    <PositiveButton Title='Enter' press_Action={get_InputDATA}></PositiveButton>
                </View>
            </View>

            <View>
                {showConditions && (
                    <MarketGrid 
                        Type='Foretasted' 
                        Crop={crop} 
                        Place={region} 
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
        height:200,
        justifyContent:'space-between',
        marginVertical:60
    }
})

export default ForetastedMarket;