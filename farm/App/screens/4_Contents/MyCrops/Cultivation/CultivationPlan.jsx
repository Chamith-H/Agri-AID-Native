import React , {useEffect, useState} from 'react';
import { View, StyleSheet, Text} from 'react-native';
import SquareButton from '../../../../components/buttons/SquareButton';
import BodyHeader from '../../../../components/headers/BodyHeader';
import SelectedCrop from '../../../../StaticData/SelectedCrop';

const CultivationPlan =( { navigation } )=> {

    const [needed, setNeeded] = useState('')

    

    useEffect(() => {
       const selected_crop = new SelectedCrop
       setNeeded(selected_crop.fetch().name)
    }, []);
    

    return (
        <View style={styles.body}>
            <BodyHeader Title='Crop Cultivation Plan'></BodyHeader>

            <Text style={styles.title}>{needed}</Text>

            <View style={styles.separater}/>

            <View style={styles.align}>
                <SquareButton Title_1='Crop Growth' Title_2='Information' press_Action={()=> navigation.navigate('GrowthInfo')}></SquareButton>
                <SquareButton Title_1='Crop Growth' Title_2='Tracker' press_Action={()=> navigation.navigate('GrowthTrack')}></SquareButton>
            </View>

            <View style={styles.align}>
                <SquareButton Title_1='Yield' Title_2='Predictor' press_Action={()=> navigation.navigate('YieldPredict')}></SquareButton>
                <SquareButton Title_1='Harvest' Title_2='Recorder'  press_Action={()=> navigation.navigate('HarvestRecord')}></SquareButton>
            </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    title : {
        color:'black',
        fontSize:22,
        fontWeight:800,
        marginLeft:25,
        marginTop:'5%',
        color:'#005F41'
    },

    body : {
        flex:1,
    },

    separater : {
        marginTop:'5%'
    },

    align : {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})

export default CultivationPlan;