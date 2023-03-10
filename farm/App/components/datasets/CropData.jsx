import React from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const CropData =( props )=> {

    return (
        <View style={styles.row}>
            <Text style={styles.text}>{props.Icon}</Text>
            <Text style={styles.text}>{props.Name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        width:270,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'yellow'
    },

    text : {
        color:'black'
    }
})

export default CropData;