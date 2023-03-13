import React, {useState, useEffect} from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  View,
  Text,
} from 'react-native';


import BodyHeader from '../../../../components/headers/BodyHeader';
import SelectedCrop from '../../../../StaticData/SelectedCrop';
import Request from '../../../../API_Callings/Request';
import AppUser from '../../../../StaticData/AppUser';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import PositiveButton from '../../../../components/buttons/PositiveButton';
import NegativeButton from '../../../../components/buttons/NegativeButton';

const HarvestRecord =()=> {

    const [crop, setCrop] = useState('')
    const [startedDate, setStartedDate] = useState('')
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [calender, setCalender] = useState(false)

    const [quantity, setQuantity] = useState(0)
    const [quality, setQuality] = useState(0)
    const [harvested, setHarvested] = useState('Pick a date')
    
    const get_StartedDate =async( choosed )=> {
        const app_user = new AppUser

        try {
            const request = new Request
            const response = await request.GrowedCrop({farmer:app_user.fetch().id, crop:choosed})
            const date = new Date(response.data)
            const dateString = date.toISOString().slice(0,10)
            setStartedDate(dateString)
        }

        catch(err) {
            console.log(err)
        }
    }

    const handleTimeSelection = (event, selected) => {
        setCalender(false)
        const currentTime = selected || selectedDate;
        setSelectedDate(currentTime);
        const dateString = currentTime.toISOString().slice(0,10)
        setHarvested(dateString)
    };

    const reset_Data =async()=> {
        try {
            const request = new Request
            const response = await request.Add_Crop('')
        }

        catch(err) {
            console.log(err)
        }
    }

    const record_Data =async()=> {
        if(quantity !=0 && quality !=0 && harvested != 'Pick a date') {

            const app_user = new AppUser
            const record =  {
                                farmer: app_user.fetch().id,
                                crop:crop,
                                start:startedDate,
                                harvested:harvested,
                                quantity:quantity,
                                quality:quality
                            }

            try {
                const request = new Request
                const response = await request.Record(record)
                console.log(response.data)
            }

            catch(err) {
                console.log(err)
            }
        }
    }

    useEffect(() => {
        const selected_crop = new SelectedCrop
        setCrop(selected_crop.fetch().name)

        get_StartedDate(selected_crop.fetch().name)
    }, []);

    return (
        <ScrollView>
            <BodyHeader Title='Harvest Recorder'></BodyHeader>
            <Text style={styles.title}>{crop}</Text>

            <View style={{display:'flex', flexDirection:'row', paddingLeft:15, marginTop:30}}>

                <View style={{height:195, justifyContent:'space-between', marginTop:6}}>
                    <Text style={{color:'black', fontSize:16}}>Cultivation Start Date :</Text>
                    <Text style={{color:'black', fontSize:16}}>Harvested Date :</Text>
                    <Text style={{color:'black', fontSize:16}}>Harvested Quantity :</Text>
                    <Text style={{color:'black', fontSize:16}}>Harvested Quality :</Text>
                </View>

                <View>
                    <View style={{borderStyle:'solid',height:40, borderWidth:2, borderColor:'black', borderRadius:8, backgroundColor:'#656366',display:'flex', flexDirection:'row', justifyContent:'space-between', paddingHorizontal:10, paddingVertical:6, marginLeft:10, width:'60%',alignItems:'center'}}>
                        <Text style={{color:'white', fontSize:16}}>{startedDate}</Text>
                        <Text style={{color:'white', fontSize:16}}> </Text>
                    </View>

                    <View style={{borderStyle:'solid',height:40, borderWidth:2, borderColor:'black', borderRadius:8, backgroundColor:'white',display:'flex', flexDirection:'row', justifyContent:'space-between', paddingLeft:10, paddingRight:5,paddingVertical:6, marginLeft:10, width:'60%',alignItems:'center', marginTop:18}}>
                        <Text style={{color:'grey', fontSize:16}}>{harvested}</Text>
                    
                        <TouchableOpacity onPress={()=> setCalender(true)}>
                            <Image style={{height:28, width:28}} source={require('../../../../Assets/Icons/Calender.png')}/>
                        </TouchableOpacity>
                    </View>

                    <View style={{display:'flex', flexDirection:'row', alignItems:'center', marginTop:18}}>
                        <TextInput
                            style={styles.input}
                            placeholder='Enter harvested quantity'
                            value={quantity}
                            placeholderTextColor={'grey'}
                            onChangeText={(value) => setQuantity(value)}>
                        </TextInput>

                        <Text style={{color:'black', position:'relative', right:25, fontSize:16}}>Kg</Text>
                    </View>

                    <View style={{marginTop:18}}>
                        <TextInput
                            style={styles.input}
                            placeholder='Enter harvested quality'
                            value={quality}
                            placeholderTextColor={'grey'}
                            onChangeText={(value) => setQuality(value)}>
                        </TextInput>
                    </View>
                </View>
            </View>

            <View style={{flexDirection:'row', display:'flex', justifyContent:'center', marginTop:50, marginBottom:60}}>
                <View style={{display:'flex', width:140}}>
                    <PositiveButton Title='Complete' press_Action={record_Data}></PositiveButton>
                </View>

                <View style={{display:'flex', width:140, marginLeft:10}}> 
                    <NegativeButton Title='Cancel' press_Action={reset_Data}></NegativeButton>
                </View> 
            </View>

            {calender && (
                <RNDateTimePicker
                    mode="date"
                    value={selectedDate}
                    onChange={handleTimeSelection}
                />
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title : {
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

export default HarvestRecord;