import React from 'react';
import TextBox from '../textbox/textBox';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const MarketGrid =( props )=> {

    return (
        <View style={styles.grid}>
            <View>
                <Text style={styles.text}>The {props.Type} Market Conditions of {props.Crop} in {props.Place} are as follows:</Text>
            </View>

            <View>
                <View style={styles.details}>
                    <TextBox Title='Market Price' Value={props.Data[0]} Meassure='Rs'></TextBox>
                    <TextBox Title='Market Demand' Value={props.Data[1]} Meassure='Kg'></TextBox>
                    <TextBox Title='Market Supply' Value={props.Data[2]} Meassure='Kg'></TextBox>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    grid : {
        backgroundColor: 'rgb(231,235,233)',
        borderStyle:'solid',
        borderWidth:2,
        borderColor:'black',
        marginHorizontal:'4%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        paddingVertical:30

    },

    text : {
        color:'black',
        fontSize:16,
        textAlign:'center',
        marginHorizontal:20,
        marginBottom:20
    },

    details: {
        marginHorizontal:40
    }
})

export default MarketGrid;