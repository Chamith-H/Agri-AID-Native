import React from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
    useWindowDimensions
} from 'react-native';
import CloseButton from '../buttons/CloseButton';


const LoginWarning =( props )=> {

    const { height } = useWindowDimensions();

    return (
        <View style={[styles.popup, {height}]}>
           <View>
                <View style={styles.warning}>
                    <Text style={styles.title}>Sorry..!</Text>
                    <CloseButton press_Action={props.Close}></CloseButton>
                </View>

                <View style={styles.reason}>
                    {props.Error == 0 &&
                        <Text style={styles.text}>You have entered the password incorrectly</Text>
                    }

                    {props.Error == 2 &&
                        <Text style={styles.text}>This email does not have an account in our database</Text>
                    }

                    {props.Error == 500 &&
                        <Text style={styles.text}>You are a {props.Job[0]}, But you are trying to log as a {props.Job[1]}. That's why you can't move forward. Please be Login as a {props.Job[0]}</Text>
                    }
                </View>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    popup: {
        top:0,
        position:'absolute',
        width:'100%',
        backgroundColor:'rgba(0, 0, 0, 0.8)',
        zIndex:2,
        paddingTop:'40%',
        paddingHorizontal:15
    },

    title: {
        color:'white',
        fontSize:16
    },

    text: {
        color:'red',
        textAlign:'center'
    },

    warning: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#005F41',
        paddingVertical:6,
        paddingLeft:20,
        paddingRight:8
    },

    reason: {
        backgroundColor:'white',
        height:120,
        display:'flex',
        justifyContent:'center',
        paddingHorizontal:20,
    }
})

export default LoginWarning;