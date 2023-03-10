import React, { useState, useEffect } from 'react';
import Request from '../../../API_Callings/Request';

import {
  StyleSheet,
  TouchableOpacity,
  Text,
  useWindowDimensions,
  View,
  Image
} from 'react-native';
import SelectionDropdown from '../../../components/inputs/SelectionDropdown';
import PositiveButton from '../../../components/buttons/PositiveButton';
import NegativeButton from '../../../components/buttons/NegativeButton';

const CropPopup =( props )=> {
    const { height } = useWindowDimensions();

    const [one, setOne] = useState(true)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)

    const [crops, setCrops] = useState([])
    const [selected, setSelected] = useState('')

    const [selectedData, setSelectedData] = useState()
    const [period, setPeriod] = useState()

    const first_Done =async()=> {
        const request = new Request

        try{
            const response = await request.Selected({name:selected})
            setSelectedData(response.data[0])
        }

        catch(err) {
            console.log(err)
        }

        setOne(false)
        setTwo(true)
    }

    const second_Done =async()=> {
        setTwo(false)
        setThree(true)

        const request = new Request
        const response = await request.Selected({name:selected})
        setPeriod(response.data[0].period)
    }

    const third_Done =async()=> {

        const request = new Request

        const grow = new Date()
        const harvest = new Date(grow.getTime()+(period*24*60*60*1000))

        const cultivate = {
                            farmer:props.Farmer,
                            crop:selected,
                            begin:grow,
                            end:harvest,
                          }

        const response = await request.Cultivate(cultivate)
    }

    const get_Back =()=> {
        setOne(true)
        setTwo(false)
    }

    useEffect(() => {

        const get_Crops =async()=> {
            const request = new Request
            
            try{
                const response = await request.List()
                setCrops(response.data)
            }

            catch(err) {
                console.log(err)
            }
        }
        
        get_Crops()

    }, []);

    return (
        <View style={[styles.popup, {height}]}>
            <View style={styles.popupAction}>
                <View style={styles.popupTitle}>
                    <Text style={{color:'black'}}>Add Crop</Text>
                    <TouchableOpacity onPress={props.press_Action}><Text style={{color:'black'}}>X</Text></TouchableOpacity>
                </View>

                <View>
                    {one && (
                        <View>
                            <View style={{display:'flex',flexDirection:'row', justifyContent:'center', marginVertical:20}}>
                                <Image style={styles.navImg} source={require('../../../Assets/Icons/one.png')}/>
                            </View>

                            <SelectionDropdown Label='Select Crop' List={crops} Selected={setSelected}></SelectionDropdown>

                            <View style={{paddingHorizontal:90, paddingVertical:30}}>
                                <PositiveButton Title='Enter' press_Action={first_Done}></PositiveButton>
                            </View>
                        </View>
                    )}

                    {two && (
                        <View>
                            <View style={{display:'flex',flexDirection:'row', justifyContent:'center', marginVertical:20}}>
                                <Image style={styles.navImg} source={require('../../../Assets/Icons/two.png')}/>
                            </View>

                            <View>
                                <Text style={{color:'black'}}>Select Crop : {selected}</Text>
                            </View>

                            <View style={{display:'flex', flexDirection:'row', justifyContent:'center'}}><Text style={{color:'black', fontSize:16, fontWeight:800}}>Crop Requirements</Text></View>

                            <View>
                                <Text style={{color:'black'}}>Irrigation: <Text style={{color:'grey'}}>{selectedData.requirements.Irrigation}</Text></Text>
                                <Text style={{color:'black'}}>Fertilier: <Text style={{color:'grey'}}>{selectedData.requirements.Fertilizer}</Text></Text>
                                <Text style={{color:'black'}}>Pest Threats: <Text style={{color:'grey'}}>{selectedData.requirements.Pest_Threats}</Text></Text>
                                <Text style={{color:'black'}}>Diseases: <Text style={{color:'grey'}}>{selectedData.requirements.Diseases}</Text></Text>
                                <Text style={{color:'black'}}>Ideal Cultivation Locations: <Text style={{color:'grey'}}>{selectedData.requirements.Ideal_Cultivation_Locations}</Text></Text>
                                <Text style={{color:'black'}}>Ideal Cultivation Time: <Text style={{color:'grey'}}>{selectedData.requirements.Ideal_Cultivation_Time}</Text></Text>
                                <Text style={{color:'black'}}>Maturity Period: <Text style={{color:'grey'}}>{selectedData.requirements.Maturity_Period}</Text></Text>
                                <Text style={{color:'black'}}>Average Yield: <Text style={{color:'grey'}}>{selectedData.requirements.Average_Yield}</Text></Text>
                            </View>

                            <View style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                                <View style={{width:120, marginRight:10}}><PositiveButton Title='Add Crop' press_Action={second_Done}></PositiveButton></View>
                                <View style={{width:120}}><NegativeButton Title='Back' press_Action={get_Back}></NegativeButton></View> 
                            </View>
                        </View>
                    )}

                    {three && (
                        <View>
                             <View style={{display:'flex',flexDirection:'row', justifyContent:'center', marginVertical:20}}>
                                <Image style={styles.navImg} source={require('../../../Assets/Icons/three.png')}/>
                            </View>

                            <View>
                                <Text style={{color:'black'}}>Set Cultivation{'\n'}Start Date</Text>
                                {/* EDIT */}
                            </View>

                            <View style={{paddingHorizontal:90, paddingVertical:30}}>
                                <PositiveButton Title='Enter' press_Action={third_Done}></PositiveButton>
                            </View>
                        </View>
                    )}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    popup: {
        top:0,
        position:'absolute',
        width:'100%',
        backgroundColor:'rgba(0, 0, 0, 0.8)',
        zIndex:2,
    },

    popupAction : {
        backgroundColor:'white',
        marginTop: 100,
        marginHorizontal:20,
        borderRadius:8
    },

    popupTitle: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        paddingVertical:6,
        borderBottomStyle:'solid',
        borderWidth:1
    },

    navImg : {
        width:220,
        height:30
    }
})

export default CropPopup;