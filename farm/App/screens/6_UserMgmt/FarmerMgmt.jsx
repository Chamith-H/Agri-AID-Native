import React from 'react';
import UserMgmt from './UserMgmt';

import {
  StyleSheet,
  View,
} from 'react-native';
import BodyHeader from '../../components/headers/BodyHeader';

const FarmerMgmt =( props )=> {

    return (
        <View>
            <BodyHeader Title="Farmers"></BodyHeader>
            <UserMgmt Type='Farmer'></UserMgmt>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent:'center',
        height:25,
        width:25,
        borderRadius:30,
    },

    icon: {
        color:'black',
        fontSize:19
    }
})

export default FarmerMgmt;