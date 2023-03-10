import React from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native';

const NegativeButton =( props )=> {

    return (
        <TouchableOpacity onPress={ props.press_Action }>
            <View style={styles.button}>
                <Text style={styles.title}>{ props.Title }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        borderStyle:'solid',
        borderWidth:2,
        borderColor:'#005F41',
        alignItems: 'center',
        justifyContent:'center',
        height:28,
        borderRadius: 8
    },

    title: {
        color: '#005F41',
        fontWeight: 700,
        fontSize: 14
    }
})

export default NegativeButton;