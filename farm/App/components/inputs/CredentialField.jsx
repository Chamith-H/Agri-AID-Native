import React from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';

const CredentialField =( props )=> {

    return (
        <View>
            <Text style={styles.label}>{ props.Label }</Text>
            <TextInput
                style={styles.input}
                placeholder={ props.Placeholder }
                placeholderTextColor={'grey'}
                onChangeText={ props.Change }
            />
        </View>
    )
}

const styles = StyleSheet.create({

    label : {
        marginLeft: 18,
        marginBottom:3,
        fontSize: 16,
        color: '#1E1E1E',
        fontWeight: '500'
        
    },

    input : {
        height: 40,
        borderColor: 'black',
        borderWidth: 2,
        paddingLeft: 10,
        marginHorizontal: 18,
        borderRadius: 5,
        color: 'grey',
        fontSize: 16,
        fontWeight: '400',
        backgroundColor: 'white'
    },
})

export default CredentialField;