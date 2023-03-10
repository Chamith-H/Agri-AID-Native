import React from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native';

const SquareButton =( props )=> {

    return (
        <TouchableOpacity onPress={ props.press_Action } style={styles.button}>
            <View>
                <Text style={styles.title}>{ props.Title_1 }{"\n"}{ props.Title_2 }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#005F41',
        alignItems: 'center',
        justifyContent : 'center',
        borderRadius: 8,
        width: '40%',
        aspectRatio: 1.1,
        margin:10
    },

    title: {
        color: '#F8FBFA',
        fontWeight: 700,
        fontSize: 16,
        textAlign: 'center',
    }
})

export default SquareButton;