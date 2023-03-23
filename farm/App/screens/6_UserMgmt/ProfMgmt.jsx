import React, {useState, useEffect} from 'react';
import Request from '../../API_Callings/Request';

import {
  StyleSheet,
  View,
  Text,
  Image,
  useWindowDimensions,
  TouchableOpacity
} from 'react-native';

import BodyHeader from '../../components/headers/BodyHeader';
import DoubleTab from '../../components/sub-headers/DoubleTab';
import ActionPopup from '../../components/popups/ActionPopup';
import UserMgmt from './UserMgmt';

const ProfMgmt =()=> {
    const { height } = useWindowDimensions();

    const [left, setLeft] = useState(true)

    const titles = [
                        {head: 'ID', width:'10%'}, 
                        {head: 'Name', width:'20%'}, 
                        {head: 'Workplace', width:'30%'}, 
                        {head: 'Designation', width:'23%'}
                    ]

    const [requests, setRequests] = useState([])
    const [element, setElement] = useState(null)
    const [confirm, setConfirm] = useState(false)
    const [select, setSelect] = useState(false)

    const [manage, setManage] = useState ({
                                            id:'',
                                            title:'',
                                            description:'',
                                            positive:''
                                         })

    const active_Left =()=> {
        setLeft(true)
    }

    const active_Right =()=> {
        setSelect(false)
        setConfirm(false)
        setLeft(false)
    }

    const get_Options =( selected )=> {
        setElement(selected)
        setSelect(true)
    }

    const approve_Request =( id )=> {
        const popup = {
                        id: id,
                        title: 'Approve Request',
                        description: 'Are you sure you want to Approve the Agricultural Professional Request?',
                        positive: 'Approve',  
                      }
        
        setManage(popup)
        setConfirm(true);
    }

    const reject_Request =( id )=> {
        const popup = {
            id: id,
            title: 'Reject Request',
            description: 'Are you sure you want to Reject the Agricultural Professional Request?',
            positive: 'Reject',  
          }

        setManage(popup)
        setConfirm(true);
    }

    const confirm_Action =async( action )=> {
        if (action == 'Approve') { 
            try {
                const data = {id: manage.id, status: 'show'}
                const request = new Request
                const response = await request.ApproveRequest(data)
                console.log(response.data)
            }

            catch(err) {
                console.log(err)
            }
        }

        else if (action == 'Reject') {
            try {
                const request = new Request
                const response = await request.DeleteUser(manage.id)
                console.log(response.data)
            }

            catch(err) {
                console.log(err)
            }
        }
    }

    useEffect(()=> {
        const get_Requests =async()=> {
            const request = new Request

            try {
                const response = await request.AdminRequests()
                setRequests(response.data)
            }

            catch(err) {
                console.log(err)
            } 
        }

        get_Requests();

    }, []);

    return (
        <View>
            <BodyHeader Title="Agricultural Professionals"></BodyHeader>

            {confirm && (
                <View style={[styles.actionPopup, {height}]}>
                    <ActionPopup
                        Title={manage.title}
                        Description={manage.description}
                        Positive={manage.positive}
                        Close={()=> setConfirm(false)}
                        get_Action={()=> confirm_Action(manage.positive)}>
                    </ActionPopup>
                </View>
            )}

            <DoubleTab
                Mark={left}
                LeftButton="Agricultural Professional Requests"
                RightButton="Agricultural Professionals"
                press_LeftAction={active_Left}
                press_RightAction={active_Right}>
            </DoubleTab>

            <View style={{marginTop:25}}>
                {left && (
                    <View style={{marginHorizontal:5}}>
                        <View style={styles.titleRow}>
                            {titles.map((title, index) => (
                                <View key={index} style={{backgroundColor:'#005F41', width:title.width, marginHorizontal:3,display:'flex', flexDirection:'row', justifyContent:'center'}}><Text style={styles.text}>{title.head}</Text></View>
                            ))}
                        </View>

                        <View>
                            {requests.map((person, index) => (
                                <View style={{position:'relative'}}>
                                    <View style={styles.requests} key={index}>
                                        <Text style={{color:'black', width:'10%', marginHorizontal:3, fontSize:13}}>{person.id}</Text>
                                        <Text style={{color:'black', width:'20%', marginHorizontal:3, fontSize:13}}>{person.name}</Text>
                                        <Text style={{color:'black', width:'30%', marginHorizontal:3, fontSize:13}}>{person.workplace}</Text>
                                        <Text style={{color:'black', width:'25%', marginHorizontal:3, fontSize:13}}>{person.designation}</Text>
                                        <TouchableOpacity onPress={() => get_Options(index)}><Image style={styles.options} source={require('../../Assets/Icons/Options.png')}/></TouchableOpacity>
                                    </View>
                                    {index == element && select == true && (
                                        <View style={{display:'flex', alignItems:'flex-end'}}>
                                            <View style={styles.optionsBar}>
                                                <TouchableOpacity onPress={()=> approve_Request(person.id)} style={{display:'flex', alignItems:'center'}}>
                                                    <Text style={styles.approve}>APPROVE</Text>
                                                </TouchableOpacity>

                                                <TouchableOpacity onPress={()=> reject_Request(person.id)} style={{display:'flex', alignItems:'center'}}>
                                                    <Text style={styles.reject}>REJECT</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    )}
                                </View>
                            ))}
                        </View>
                    </View>
                )}
            </View>

            {!left && (
                <UserMgmt Type='Professional'></UserMgmt>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    titleRow: {
        display:'flex',
        flexDirection:'row',
    },

    actionPopup :{
        position:'absolute',
        top:0,
        width:'100%',
        backgroundColor:'rgba(0, 0, 0, 0.8)',
        zIndex:12
    },

    text :{
        color:'white',
        marginHorizontal:5,
        marginVertical:4
    },

    requests: {
        display:'flex',
        flexDirection:'row',
    },

    options :{
        marginTop:4,
        width:18,
        height:9
    },

    approve : {
        backgroundColor:'#005F41',
        color:'white',
        paddingHorizontal:7,
        marginRight:9
    },

    optionsBar : {
        position:'absolute',
        backgroundColor:'white',
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'black',
        display:'flex',
        flexDirection:'row',
        paddingHorizontal:10,
        paddingVertical:8,
        borderRadius:8,
        marginEnd:5,
    },

    reject : {
        backgroundColor:'red',
        color:'white',
        paddingHorizontal:12
    }
})

export default ProfMgmt;