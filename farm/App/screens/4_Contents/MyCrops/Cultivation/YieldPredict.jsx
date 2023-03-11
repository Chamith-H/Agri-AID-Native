import React, {useState, useEffect} from 'react';

import {
  StyleSheet,
  TextInput,
  View,
  Text
} from 'react-native';
import BodyHeader from '../../../../components/headers/BodyHeader';
import SelectedCrop from '../../../../StaticData/SelectedCrop';
import DoubleTab from '../../../../components/sub-headers/DoubleTab';
import PositiveButton from '../../../../components/buttons/PositiveButton';
import Request from '../../../../API_Callings/Request';

const YieldPredict =()=> {
    const [crop, setCrop] = useState('')
    const [leftTab, setLeftTab] = useState(true)

    const [plants, setPlants] = useState(0)
    const [predicted, setPredicted] = useState(0)
    const [recorded, setRecorded] = useState(0)

    const [error, setError] = useState(false)
    const [warning, setWarning] = useState(false)

    const [gap, setGap] = useState(0)

    const [showWarning, setShowWarning] = useState(false)

    const get_Count =async()=> {

        if (plants == 0 || isNaN(plants)) {
            setError(true)
        }

        else {
            setError(false)

            try {
                const request = new Request
                const response = await request.Selected({name:crop})

                const kg = response.data[0].yield*plants/1000
                setPredicted(kg)
            }

            catch(err) {
                console.log(err)
            }
        }
    }

    const click_RightTab =()=> {
        if (plants == 0 || isNaN(plants)) {
            setError(true)
            setPredicted(0)
        }

        else {
            setLeftTab(false)
            setShowWarning(false)
            setWarning(false)
            setGap(0)
        }
    }

    const get_Variation =()=> {
        if (recorded == 0 || isNaN(recorded)) {
            setWarning(true)
            setGap(0)
        }

        else {
            setWarning(false)

            const variation = predicted - recorded
            setGap(variation)

            if (variation > 0) {
                setShowWarning(true)
            }

            else {
                setShowWarning(false)
            }
        }
    }

    useEffect(() => {
        const selected_crop = new SelectedCrop
        setCrop(selected_crop.fetch().name)
    }, []);

    return (
        <View>
            <BodyHeader Title='Yield Predictor'></BodyHeader>
            <Text style={styles.title}>{crop}</Text>

            <DoubleTab 
                    LeftButton='Yield Predictions' 
                    press_LeftAction={()=> setLeftTab(true)}
                    RightButton='Yield Variations'
                    press_RightAction={click_RightTab}>
            </DoubleTab>

            {leftTab && (
                <View>
                    <View>
                        <View style={{ marginHorizontal:'10%'}}>
                            
                            <Text style={{color:'black', fontSize:20, fontWeight:800, textAlign: 'left', marginTop:40, marginBottom:14}}>Yield Prediction Generator</Text>
        
                            <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                                <Text style={{color:'black', fontSize:16}}>Number of plants :</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter plant count'
                                    placeholderTextColor={'grey'}
                                    value = {plants}
                                    onChangeText={(value) => setPlants(value)}
                                />
                            </View>

                            {error && (
                                <View style={{display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>
                                    <Text style={{color:'red'}}>* Please input a valid plant count</Text>
                                </View>
                            )}
                        </View>

                        <View style={{marginHorizontal:'33%', marginTop:30}}>
                            <PositiveButton Title='Generate' press_Action={get_Count}></PositiveButton>
                        </View>
                    </View>

                    <View style={{marginHorizontal:'5%', marginTop:50}}>
                        <View style={{borderStyle:'solid', borderWidth:2, borderColor:'black', paddingHorizontal:'5%', paddingVertical:25, backgroundColor:'#F1F5F2'}}>
                            <Text style={{color:'black', fontSize:20, fontWeight:800}}>Generated Yield Prediction</Text>

                            <View style={{marginTop:16, display:'flex', flexDirection:'row', alignItems:'center'}}>
                                <Text style={{fontSize:16, color:'black'}}>Predicted yield :</Text>
                                <View style={{borderStyle:'solid', borderWidth:2, borderColor:'black', borderRadius:8, display:'flex', flexDirection:'row', justifyContent:'space-between', paddingHorizontal:10, paddingVertical:6, marginLeft:15, width:'62%'}}>
                                    <Text style={{color:'grey', fontSize:16}}>{predicted}</Text>
                                    <Text style={{color:'black', fontSize:16}}>Kg</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            )}

            {!leftTab && !error &&(
                <View>
                    <View>
                        <View style={{ marginHorizontal:'10%'}}>
                        
                            <Text style={{color:'black', fontSize:20, fontWeight:800, textAlign: 'left', marginTop:40, marginBottom:14}}>Yield Variation Generator</Text>
    
                            <View style={{display:'flex', flexDirection:'row', alignItems:'center', marginBottom:15}}>
                                <Text style={{color:'black', fontSize:16}}>Predicted yield :</Text>
                                <View style={{borderStyle:'solid',height:40, borderWidth:2, borderColor:'black', borderRadius:8, backgroundColor:'#656366',display:'flex', flexDirection:'row', justifyContent:'space-between', paddingHorizontal:10, paddingVertical:6, marginLeft:10, width:'60%',alignItems:'center'}}>
                                    <Text style={{color:'white', fontSize:16}}>{predicted}</Text>
                                    <Text style={{color:'white', fontSize:16}}>Kg</Text>
                                </View>
                            </View>

                            <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                                <Text style={{color:'black', fontSize:16}}>Recorded yield :</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter recored yield'
                                    placeholderTextColor={'grey'}
                                    onChangeText={(value) => setRecorded(value)}
                                ></TextInput>

                                <Text style={{color:'black', position:'relative', right:25, fontSize:16}}>Kg</Text>
                            </View>

                            {warning && (
                                <View style={{display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>
                                    <Text style={{color:'red'}}>* Please input a valid recorded yield</Text>
                                </View>
                            )}
                        </View>

                        <View style={{marginHorizontal:'33%', marginTop:30}}>
                            <PositiveButton Title='Generate' press_Action={get_Variation}></PositiveButton>
                        </View>
                    </View>

                    <View style={{marginHorizontal:'5%', marginTop:50}}>
                        <View style={{borderStyle:'solid', borderWidth:2, borderColor:'black', paddingHorizontal:'5%', paddingVertical:25, backgroundColor:'#F1F5F2'}}>
                            <Text style={{color:'black', fontSize:20, fontWeight:800}}>Generated Yield Variation</Text>

                            <View style={{marginTop:16, display:'flex', flexDirection:'row', alignItems:'center'}}>
                                <Text style={{fontSize:16, color:'black'}}>Yield variation :</Text>
                                <View style={{borderStyle:'solid', borderWidth:2, borderColor:'black', borderRadius:8, display:'flex', flexDirection:'row', justifyContent:'space-between', paddingHorizontal:10, paddingVertical:6, marginLeft:15, width:'62%'}}>
                                    <Text style={{color:'grey', fontSize:16}}>({gap})</Text>
                                    <Text style={{color:'black', fontSize:16}}>Kg</Text>
                                </View>

                                {showWarning && (
                                    <Text style={{color:'red', fontSize:27, fontWeight:800, position:'relative', left:4}}>!</Text>
                                )}
                            </View>
                        </View>
                    </View>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    title : {
        color:'black',
        fontSize:22,
        fontWeight:800,
        marginLeft:25,
        marginTop:15,
        marginBottom:13,
        color:'#005F41'
    },

    input : {
        marginLeft:10,
        height: 40,
        width:'60%',
        borderColor: 'black',
        borderWidth: 2,
        paddingLeft: 10,
        borderRadius: 8,
        color: 'grey',
        fontSize: 16,
        fontWeight: '400',
        backgroundColor: 'white'
    },
})

export default YieldPredict;