import React from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

const AccountButton =( props )=> {

    return (
        <TouchableOpacity onPress={ props.press_Action }>
            <View style={styles.button}></View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        height:30,
        width:30,
        borderRadius: 20
    },

    title: {
        color: '#F8FBFA',
        fontWeight: 500,
        fontSize: 20
    },
})

export default AccountButton;