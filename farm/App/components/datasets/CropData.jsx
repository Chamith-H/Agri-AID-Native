import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

const CropData =( props )=> {

    return (
        <View style={styles.row}>
            <Image style={{height:80, width:80}} source={{ uri: props.Icon }}/>
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
        alignItems:'center'
    },

    text : {
        color:'black',
        fontSize:15
    }
})

export default CropData;