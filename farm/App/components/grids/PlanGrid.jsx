import React from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native';

const PlanGrid =( props )=> {

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
        backgroundColor: '#005F41',
        alignItems: 'center',
        justifyContent:'center',
        height:28,
        borderRadius: 8
    },

    title: {
        color: '#F8FBFA',
        fontWeight: 700,
        fontSize: 14
    }
})

export default PlanGrid;