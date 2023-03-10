import React, {useState, useEffect} from 'react';
import Request from '../../../API_Callings/Request';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from 'react-native';

import ThreeColumn from '../../../components/grids/ThreeColumn';
import BodyHeader from '../../../components/headers/BodyHeader';
import CropPopup from './CropPopup';
import ActionPopup from '../../../components/popups/ActionPopup';
import AppUser from '../../../StaticData/AppUser';
import SelectedCrop from '../../../StaticData/SelectedCrop';

const MyCrops =({ navigation })=> {

    const { height } = useWindowDimensions();

    const [user, setUser] = useState('')

    const [crops, setCrops] = useState([])
    const [popup, setPopup] = useState(false)

    const [select, setSelect] = useState('')
    const [remove, setRemove] = useState(false)

    const get_Remove =( name )=> {
        setSelect(name)
        setRemove(true)
    }

    const remove_Cultivation =async()=> {
        const wanted =  {
                            farmer:user,
                            crop:select
                        }

        const request = new Request

        try{
            const response = await request.DeleteCultivation(wanted)
            console.log(response.data)
        }

        catch(err) {
            console.log(err)
        }
    }

    const plan_Cultivation =( crop )=> {
        const selected_crop = new SelectedCrop
        selected_crop.SelectedCrop(crop)

        navigation.navigate('Cultivation'); 
    }

    useEffect(() => {

        const get_Crops =async( need )=> {
            const request = new Request
            
            try{
                const response = await request.GetCultivate({farmer:need})
                setCrops(response.data)
            }

            catch(err) {
                console.log(err)
            }
        }

        const get_Farmer =()=> {
            const app_user = new AppUser
            setUser(app_user.fetch().id)

            get_Crops(app_user.fetch().id)
        }

        get_Farmer()
    }, []);
    
    return (
        <View style={{position:'relative'}}>
            {popup && (<CropPopup press_Action={()=>setPopup(false)} Farmer={user}></CropPopup>)}

            {remove && (
                <View style={[styles.popup, {height}]}>
                    <ActionPopup 
                            Title='Remove Crop' 
                            Description='Are you want to remove this crop?' 
                            Positive='Remove'
                            Close={()=> setRemove(false)}
                            get_Action={remove_Cultivation}>
                    </ActionPopup>
                </View>
            )}
            
            <BodyHeader Title='My Crops'></BodyHeader>
            
            <View>
                <Text style={styles.text}>Crop Cultivation Plan</Text>

                <View style={styles.grid}>
                    <ThreeColumn
                        Col_1 = 'Crop'
                        Col_2 = 'Cultivation Start Date'
                        Col_3 = 'Harvesting Date'>   
                    </ThreeColumn>

                    {crops.map((crop, index) => (
                        <View style={styles.list} key={index}>
                            <TouchableOpacity onPress={()=> plan_Cultivation(crop.crop)}><Text style={styles.item}>{crop.crop}</Text></TouchableOpacity>
                            <Text style={styles.item}>{crop.begin.slice(0,10)}</Text>
                            <Text style={styles.item}>{crop.end.slice(0,10)}</Text>
                            <TouchableOpacity onPress={() => get_Remove(crop.crop)}><Image style={styles.options} source={require('../../../Assets/Icons/Delete.png')}/></TouchableOpacity>
                        </View>
                    ))}

                    <TouchableOpacity onPress={()=> setPopup(true)}><View style={styles.button}><Text style={{color:'white'}}>+ Add Crop</Text></View></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    grid: {
        borderStyle:'solid',
        borderWidth:2
    },

    popup : {
        position:'absolute',
        zIndex:3,
        backgroundColor:'rgba(0, 0, 0, 0.8)',
        top:0,
        left:0,
        right:0,
        bottom:0
    },

    text: {
        color:'black',
        fontSize:20
    },

    list : {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:7
    },

    item: {
        color:'black'
    },

    options : {
        height:17,
        width:17
    },

    button: {
        marginVertical:20,
        marginHorizontal:35,
        backgroundColor:'#005F41',
        paddingVertical:5,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center'
    }
})

export default MyCrops;