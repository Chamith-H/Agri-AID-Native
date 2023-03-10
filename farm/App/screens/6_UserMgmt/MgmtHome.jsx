import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';
import SquareButton from '../../components/buttons/SquareButton';
import HomeHeader from '../../components/headers/HomeHeader';

const MgmtHome =( { navigation } )=> {

    return (
        <View>
            <HomeHeader Title="User Management"></HomeHeader>
            <View style={styles.button}>
                <SquareButton Title_1="Farmers" press_Action={()=> navigation.navigate('FarmerMgmt')}></SquareButton>

                <SquareButton 
                    Title_1="Agricultural" 
                    Title_2="Professional"
                    press_Action={()=> navigation.navigate('ProfMgmt')}>
                </SquareButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center'
    },

    icon: {
        color:'black',
        fontSize:19
    }
})

export default MgmtHome;