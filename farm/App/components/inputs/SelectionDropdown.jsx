
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { Picker } from '@react-native-picker/picker';

const SelectionDropdown =( props )=> {

    const [selectedValue, setSelectedValue] = useState("");

    return (

        <View style={styles.formField}>
            <Text style={styles.label}>{props.Label}</Text>

            <View style={{position:'relative', zIndex:3}}>
            {/* <SelectList 
                data={props.List} 
                setSelected={props.Selected}
                boxStyles={{backgroundColor:'white', alignItems:'center', paddingVertical:7, borderRadius:8, width:200}}
                inputStyles={{fontSize:15, color:'grey'}}
                dropdownStyles={{backgroundColor:'white', position:'absolute',zIndex:999, width:'100%', top:30,height:'auto', overflow:'scroll'}}
                dropdownTextStyles={{color:'#4A4747', fontSize:14}}
                placeholder={props.Placeholder}
                >
            </SelectList> */}

        <View>
            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >

        <Picker.Item label="Option 1" value="Option 1" />
        <Picker.Item label="Option 2" value="Option 2" />
        <Picker.Item label="Option 3" value="Option 3" />
      </Picker>
    </View>

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