import React from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

const AccountButton =( props )=> {

    return (
        <TouchableOpacity onPress={ props.press_Action }>
           <Image style={styles.icon} source={require('../../Assets/Icons/AccHeader.png')}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    icon : {
        height:30,
        width:30
    }
})

export default AccountButton;