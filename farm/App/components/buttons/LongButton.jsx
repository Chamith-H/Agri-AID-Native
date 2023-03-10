import React from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native';

const LongButton =( props )=> {

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
        marginHorizontal: 18,
        alignItems: 'center',
        paddingVertical: 12,
        borderRadius: 8
    },

    title: {
        color: '#F8FBFA',
        fontWeight: 500,
        fontSize: 20
    }
})

export default LongButton;