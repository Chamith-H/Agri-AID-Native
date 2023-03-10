import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

const SelectionDropdown =( props )=> {

    return (

        <View style={styles.formField}>
            <Text style={styles.label}>{props.Label}</Text>

            <View>
            <SelectList 
                data={props.List} 
                setSelected={props.Selected}
                boxStyles={{backgroundColor:'white', alignItems:'center', paddingVertical:7, borderRadius:8, width:200}}
                inputStyles={{fontSize:15, color:'grey'}}
                dropdownStyles={{backgroundColor:'white'}}
                dropdownTextStyles={{color:'#4A4747', fontSize:14}}
                placeholder={props.Placeholder}
                maxHeight={200}>
            </SelectList>
        </View>
        </View>
        
    ) 
}

const styles = StyleSheet.create({
    formField: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },

    label: {
        color: 'black',
        fontSize:16
    },
})

export default SelectionDropdown;