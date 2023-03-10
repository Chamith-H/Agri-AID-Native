import React from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native';

const Management =( props )=> {

    return (
        <View style={{marginHorizontal:10}}>
            <Text style={styles.title}>Activity Calender</Text>

            <View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title : {
        fontSize:21,
        fontWeight:800,
        color:'black'
    }
})

export default Management;