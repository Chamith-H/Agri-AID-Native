import React , {useEffect} from 'react';
import { View, StyleSheet} from 'react-native';
import SquareButton from '../../components/buttons/SquareButton';
import HomeHeader from '../../components/headers/HomeHeader';

const Home =( { navigation } )=> {

    // For testing
    useEffect(() => {
       
    }, []);
    

    return (
        <View style={styles.body}>
            <HomeHeader Title='Agri Aid' logout_Action={()=> navigation.navigate('ChooseRole')}></HomeHeader>

            <View style={styles.separater}/>

            <View style={styles.align}>
                <SquareButton Title_1='My' Title_2='Crops' press_Action={()=> navigation.navigate('MyCrops')}></SquareButton>
                <SquareButton Title_1='Market' Title_2='Conditions' press_Action={()=> navigation.navigate('MarketConditions')}></SquareButton>
            </View>

            <View style={styles.align}>
                <SquareButton Title_1='Crop' Title_2='Recommendations' press_Action={()=> navigation.navigate('CropRecommendations')}></SquareButton>
                <SquareButton Title_1='Crop' Title_2='Advisiors'  press_Action={()=> navigation.navigate('CropAdvisiors')}></SquareButton>
            </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    body : {
        flex:1,
    },

    separater : {
        marginTop:'11%'
    },

    align : {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})

export default Home;