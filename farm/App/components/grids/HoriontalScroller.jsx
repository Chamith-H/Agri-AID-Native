import React from 'react';
import { useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import CropData from '../datasets/CropData';


const HoriontalScroller =( props )=> {
    const[selected, setSelected] = useState(0)

    const _chunkSIZE = 5;
    const _chunks = [];

    const _pageCOUNT = Math.ceil(props.CropList.length / _chunkSIZE);
    const _pages = Array.from(Array(_pageCOUNT).keys())
    

    for( let i=0; i < props.CropList.length; i += _chunkSIZE ) {
        _chunks.push(props.CropList.slice(i, i + _chunkSIZE));
    }

    const go_Next =( page )=> {
        setSelected(page)
    }

    
    return (
        <View style={{marginHorizontal:'15%'}}>
            <Text style={styles.text}>Recommended Crops</Text>

            { props.CropList[0] != ['_DEFAULT'] && 
                <View style={styles.view}>
                    {_chunks[selected].map((item, index)=> (
                        <View key={index}>
                            <CropData Icon={item.image} Name={item.name}></CropData>
                        </View>
                    ))}
                </View> 
            }

            { props.CropList[0] != ['_DEFAULT'] && 
                <View style={styles.pageNumRow}>
                    {_pages.map((page, index)=> (
                        <TouchableOpacity onPress={()=> go_Next(page)} key={index}>
                            <View style={styles.pageNumber}><Text style={styles.number}>{page+1}</Text></View>
                        </TouchableOpacity>
                    ))}
                </View> 
            }
        </View>
        
    )
}

const styles = StyleSheet.create({
    

    view: {
        display:'flex',
        alignItems:'center',
        height:200,
        paddingVertical:10
    },


    text : {
        color:'black',
        fontSize:18,
        fontWeight:800
    },

    items: {
        display:'flex',
        alignItems:'center',
    },

    item : {
    },

    pageNumRow: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        width:'100%'
    },

    pageNumber : {
        height:27,
        width:24,
        backgroundColor:'#1E8341',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:2,
        borderRadius:5
    },

    number: {
        color:'white',
        fontWeight:800
    }
})

export default HoriontalScroller;