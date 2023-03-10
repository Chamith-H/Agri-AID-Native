import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';


const DoubleTab =( props )=> {

    return (
        <View style={styles.tabBar}>
            <View style={{ flex: 1}}>
                <TouchableOpacity onPress={ props.press_LeftAction }>
                    <View style={styles.button}>
                        <Text style={styles.title}>{ props.LeftButton }</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.separater}/>

            <View style={{ flex: 1}}>
                <TouchableOpacity onPress={ props.press_RightAction }>
                    <View style={styles.button}>
                        <Text style={styles.title}>{props.RightButton}</Text>
                    </View>
                </TouchableOpacity>
            </View> 
        </View>
    ) 
}

const styles = StyleSheet.create({
    tabBar: {
        height:31,
        flexDirection:'row',
        borderStyle:'solid',
        borderWidth:2,
        borderColor:'white'
    },

    separater: {
        height:31,
        width:2,
        backgroundColor:'white'
    },

    button: {
        backgroundColor: '#005F41',
        alignItems: 'center',
        justifyContent:'center',
        height:31,
    },

    title: {
        color: '#F8FBFA',
        fontWeight: 700,
        fontSize: 14
    }
})

export default DoubleTab;