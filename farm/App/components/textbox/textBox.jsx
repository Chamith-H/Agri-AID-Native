import React from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const TextBox =( props )=> {

    return (
        <View style={styles.boxrow}>
            <Text style={styles.text}>{props.Title}</Text>

            <View style={styles.box}>
                <Text style={styles.value}>{props.Value}</Text>
                <Text style={styles.meassure}>{props.Meassure}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    boxrow : {
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:6
    },

    box : {
        width:140,
        backgroundColor:'white',
        borderStyle:'solid',
        borderColor:'black',
        borderWidth:1,
        borderRadius:8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingVertical:6,
        paddingHorizontal:6
    },

    text: {
        color: 'black',
        fontWeight:500,
        fontSize: 16
    },

    value: {
        color:'grey',
    },

    meassure : {
        color: 'black'
    }
})

export default TextBox;