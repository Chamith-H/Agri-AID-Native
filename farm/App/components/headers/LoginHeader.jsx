import React from 'react';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

const LoginHeader =( props )=> {
    return (
      <View style={styles.body}>
          <Text style={styles.text}>{props.Title}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    body : {
      backgroundColor : '#005F41',
      alignItems: 'center',
    },

    text : {
      marginVertical:12,
      color: 'white',
      fontSize: 23,
      fontWeight: 600,
    }
})

export default LoginHeader;