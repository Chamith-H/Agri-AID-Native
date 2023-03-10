import React from 'react';
import { useState, useEffect  } from 'react';

import {
    StyleSheet,
    View,
    Text,
    BackHandler
} from 'react-native';

import AccountButton from '../buttons/AccountButton';
import AccountPopup from '../popups/AccountPopup';


const BodyHeader =( props )=> {

    const[accountPopup, setAccountPopup] = useState(false)

    useEffect(() => {
        const handleBackButton = () => {
            if(accountPopup) {
                setAccountPopup(false)
                return true;
            }

            else {
                return false;
            }
        };
        
        BackHandler.addEventListener('hardwareBackPress', handleBackButton);
        
        return () => {
          BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
        };
    }, [accountPopup]);
    
    return (
        <View style={styles.body}>
            <View style={styles.brand}>
                <Text style={styles.text}>{ props.Title }</Text>
            </View>

            <View style={styles.account}>
                <AccountButton press_Action={()=>setAccountPopup(true)}></AccountButton>
            </View>

            {accountPopup && (<AccountPopup logout_User={props.logout_Action}/>)}
        </View>
    )
}

const styles = StyleSheet.create({
    body : {
        flexDirection: 'row',
      backgroundColor : '#005F41',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex:1
    },

    text : {
      marginVertical:9,
      color: 'white',
      fontSize: 32,
      fontWeight: 600,
    },

    logo: {
        height: 40,
        width:40,
        marginRight:6
    },
    
    brand : {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft:10
    },

    account: {
        marginRight:15
    },
})

export default BodyHeader;