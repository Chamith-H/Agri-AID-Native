import React from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';

import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native';

const CloseButton =( props )=> {

    return (
        <TouchableOpacity onPress={ props.press_Action }>
            <View style={styles.button}>
                {/* <Icon name="close" size={20} color="black" /> */}
                <Text style={styles.icon}>X</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent:'center',
        height:25,
        width:25,
        borderRadius:30,
    },

    icon: {
        color:'black',
        fontSize:19
    }
})

export default CloseButton;