import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';


const DoubleTab =( props )=> {

    return (
        <View style={styles.tabBar}>
            <View style={{ flex: 1}}>
                <TouchableOpacity onPress={ props.press_LeftAction }>
                    <View style={props.Mark? styles.active:styles.button}>
                        <Text style={styles.title}>{ props.LeftButton }</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.separater}/>

            <View style={{ flex: 1}}>
                <TouchableOpacity onPress={ props.press_RightAction }>
                    <View style={!props.Mark? styles.active:styles.button}>
                        <Text style={styles.title}>{props.RightButton}</Text>
                    </View>
                </TouchableOpacity>
            </View> 
        </View>
    ) 
}

const styles = StyleSheet.create({
    tabBar: {
        flexDirection:'row',
        borderStyle:'solid',
        borderWidth:2,
        borderColor:'white'
    },

    separater: {

        width:2,
        backgroundColor:'white'
    },

    button: {
        backgroundColor: '#005F41',
        alignItems: 'center',
        justifyContent:'center',
        paddingVertical:7
    },

    active: {
        backgroundColor: '#09392A',
        alignItems: 'center',
        justifyContent:'center',
        paddingVertical:7
    },

    title: {
        color: '#F8FBFA',
        fontWeight: 700,
        fontSize: 14
    }
})

export default DoubleTab;