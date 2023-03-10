import React, {useState, useEffect} from 'react';
import Request from '../../API_Callings/Request';

import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    useWindowDimensions
} from 'react-native';
import CloseButton from '../buttons/CloseButton';
import PositiveButton from '../buttons/PositiveButton';
import SelectionDropdown from '../inputs/SelectionDropdown';


const RequestBox =( props )=> {

    const { height } = useWindowDimensions();

    const[crop, setCrop] = useState([''])

    useEffect(() => {
        const get_CropLIST = async()=> {
            request = new Request
    
            try {
                const response = await request.List()
    
                if(response != 0) {
                    setCrop(response.data)
                }
    
                else {

                }
            }
    
            catch (err) {
                console.log(err)
            }
        }

        get_CropLIST()

    }, []);


    return (
        <View style={[styles.popup, {height}]}>
           <View>
                <View style={styles.warning}>
                    <Text style={styles.title}>Post Request</Text>
                    <CloseButton press_Action={props.Close}></CloseButton>
                </View>

                <View style={styles.reason}>
                    <View style={styles.NameField}>
                        <Image style={styles.image} source={require('../../Assets/Icons/Account.png')}/>
                        <Text style={styles.Name}>{props.Name}</Text>
                    </View>

                    <View style={styles.NameField}>
                        <SelectionDropdown Label="I am a  " List={crop} Selected={props.Selected}></SelectionDropdown>
                        <Text style={styles.intro}>  farmer</Text>
                    </View>

                    <View>
                        <TextInput
                            style={styles.input}
                            multiline={true}
                            numberOfLines={5}
                            textAlignVertical="top"
                            paddingLeft={10}
                            scrollEnabled={true}
                            placeholder='State your query'
                            placeholderTextColor={'grey'}
                            value={props.Value}
                            onChangeText={props.get_Value}>
                        </TextInput>
                    </View>
                    
                    <View>
                        <PositiveButton Title='Post' press_Action={props.Post}></PositiveButton>
                    </View>
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
        paddingTop:'40%',
        paddingHorizontal:20
    },

    title: {
        color:'black',
        fontSize:16,
        fontWeight:600
    },

    input: {
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'grey',
        color:'black',
        height:100,
        
    },

    Name: {
        color:'black',
        fontSize:26,
        fontWeight:600,
        marginLeft:6
    },

    intro : {
        color:'black',
        fontSize:14,
        fontWeight:600
    },

    NameField: {
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },

    text: {
        color:'red',
        textAlign:'center'
    },

    warning: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        borderStyle:'solid',
        borderBottomWidth:1,
        alignItems:'center',
        backgroundColor:'white',
        paddingVertical:4,
        paddingLeft:20,
        paddingRight:8
    },

    reason: {
        backgroundColor:'white',
        display:'flex',
        justifyContent:'center',
        paddingHorizontal:20,
    },

    image: {
        height:30,
        width:30
    }
})

export default RequestBox;