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
import RNDateTimePicker from '@react-native-community/datetimepicker';

const CropPopup =( props )=> {
    const { height } = useWindowDimensions();

    const [one, setOne] = useState(true)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)

    const [crops, setCrops] = useState([])
    const [selected, setSelected] = useState('')

    const [started, setStarted] = useState('Choose the date')
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [calender, setCalender] = useState(false)

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

        await props.Refresher(1)
        props.Refresher(0)
    }

    const get_Back =()=> {
        setOne(true)
        setTwo(false)
    }

    const get_StartedDate =(event, selected)=> {
        setCalender(false)
        const currentTime = selected || selectedDate;
        setSelectedDate(currentTime);
        const dateString = currentTime.toISOString().slice(0,10)
        setStarted(dateString)
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
                    <Text style={{color:'black', fontSize:17, fontWeight:800}}>Add Crop</Text>
                    <TouchableOpacity onPress={props.press_Action}><Text style={{color:'black'}}>X</Text></TouchableOpacity>
                </View>

                <View>
                    {one && (
                        <View>
                            <View style={{display:'flex',flexDirection:'row', justifyContent:'center', marginVertical:20}}>
                                <Image style={styles.navImg} source={require('../../../Assets/Icons/one.png')}/>
                            </View>

                            <View style={{marginHorizontal:20, position:'relative', zIndex:999}}>
                                <SelectionDropdown Label='Select Crop' List={crops} Selected={setSelected}></SelectionDropdown>
                            </View>

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

                            <View style={{alignItems:'center'}}>
                                <Image style={{height:130, width:130}} source={{ uri: selectedData.image }}/>
                                <Text style={{color:'black', fontSize:20, fontWeight:800, marginBottom:30}}>{selected}</Text>
                            </View>

                            <View style={{display:'flex', flexDirection:'row', justifyContent:'center'}}><Text style={{color:'black', fontSize:16, fontWeight:800}}>Crop Requirements</Text></View>

                            <View style={{marginLeft:20, marginTop:5}}>
                                <Text style={{color:'black', fontSize:15}}>Irrigation: <Text style={{color:'grey'}}>{selectedData.requirements.Irrigation}</Text></Text>
                                <Text style={{color:'black', fontSize:15}}>Fertilier: <Text style={{color:'grey'}}>{selectedData.requirements.Fertilizer}</Text></Text>
                                <Text style={{color:'black', fontSize:15}}>Pest Threats: <Text style={{color:'grey'}}>{selectedData.requirements.Pest_Threats}</Text></Text>
                                <Text style={{color:'black', fontSize:15}}>Diseases: <Text style={{color:'grey'}}>{selectedData.requirements.Diseases}</Text></Text>
                                <Text style={{color:'black', fontSize:15}}>Ideal Cultivation Districts: <Text style={{color:'grey'}}>{selectedData.requirements.Ideal_Cultivation_Locations}</Text></Text>
                                <Text style={{color:'black', fontSize:15}}>Ideal Cultivation Time: <Text style={{color:'grey'}}>{selectedData.requirements.Ideal_Cultivation_Time}</Text></Text>
                                <Text style={{color:'black', fontSize:15}}>Maturity Period: <Text style={{color:'grey'}}>{selectedData.requirements.Maturity_Period}</Text></Text>
                                <Text style={{color:'black', fontSize:15}}>Average Yield: <Text style={{color:'grey'}}>{selectedData.requirements.Average_Yield}</Text></Text>
                            </View>

                            <View style={{display:'flex', flexDirection:'row', justifyContent:'center', marginVertical:40}}>
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

                            <View style={{display:'flex', flexDirection:'row', marginLeft:'8%'}}>
                                <Text style={{color:'black', fontWeight:800}}>Set Cultivation{'\n'}Start Date</Text>
                                <View style={{borderStyle:'solid',height:40, borderWidth:2, borderColor:'black', borderRadius:8, backgroundColor:'white',display:'flex', flexDirection:'row', justifyContent:'space-between', paddingLeft:10, paddingRight:5,paddingVertical:6, marginLeft:10, width:'60%',alignItems:'center'}}>
                                    <Text style={{color:'grey', fontSize:16}}>{started}</Text>
                    
                                    <TouchableOpacity onPress={()=> setCalender(true)}>
                                        <Image style={{height:28, width:28}} source={require('../../../Assets/Icons/Calender.png')}/>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{paddingHorizontal:90, paddingVertical:30}}>
                                <PositiveButton Title='Enter' press_Action={third_Done}></PositiveButton>
                            </View>

                            {calender && (
                                <RNDateTimePicker
                                    mode="date"
                                    value={selectedDate}
                                    onChange={get_StartedDate}
                                />
                            )}
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
        borderBottomWidth:1
    },

    navImg : {
        width:220,
        height:30
    }
})

export default CropPopup;