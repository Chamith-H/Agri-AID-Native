import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  useWindowDimensions
} from 'react-native';

import PositiveButton from '../buttons/PositiveButton';
import NegativeButton from '../buttons/NegativeButton';
import CloseButton from '../buttons/CloseButton';

const ActionPopup =( props )=> {

    return (
        <View>
                <View>
                    <View style={styles.logoutBox}>
                        <View style={styles.logoutHeader}>
                            <Text style={styles.logoutText}>{props.Title}</Text>
                            <CloseButton press_Action={props.Close}></CloseButton>
                        </View>

                        <View style={styles.logoutContents}>
                            <Text style={styles.logoutTitle}>{props.Description}</Text>

                            <View style={styles.chooseButtons}>
                                <View style={{ flex: 1, paddingRight:3 }}>
                                    <PositiveButton Title={props.Positive} press_Action={props.get_Action}></PositiveButton>
                                </View>

                                <View style={{ flex: 1, paddingLeft:3 }}>
                                    <NegativeButton Title='Cancel' press_Action={props.Close}></NegativeButton>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            
        </View>
    )
}

const styles = StyleSheet.create({

    logoutBox: {
        top:150,
        marginHorizontal:40,
        aspectRatio:1.4,
        backgroundColor:'white',
        borderRadius:9
    },

    logoutContents: {
        marginTop:35,
        height:90,
        alignItems:'center', 
        justifyContent:'space-between',
    },

    logoutTitle: {
        marginHorizontal:10,
        fontSize: 16,
        fontWeight: 500,
        color: 'black'
    },

    chooseButtons: {
        flexDirection: 'row',
        width:'75%'
    },

    logoutHeader: {
        flexDirection:'row',
        justifyContent:'space-between',
        borderStyle:'solid',
        borderBottomWidth:1,
        alignItems:'center',
        height:33,
        paddingHorizontal:7
    },

    logoutText: {
        color: 'black',
        fontSize:16,
        fontWeight:700,
        marginLeft:7
    },
})

export default ActionPopup;