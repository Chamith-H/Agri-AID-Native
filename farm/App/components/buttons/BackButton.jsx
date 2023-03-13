import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

const BackButton =( props )=> {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.button}>
                <Image style={styles.icon} source={require('../../Assets/Icons/Back.png')}/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    icon: {
        marginLeft:10,
        height:15,
        width:20
    }
})

export default BackButton;