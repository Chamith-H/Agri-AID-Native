import React, {useState, useEffect} from 'react';
import Request from '../../API_Callings/Request';
import ActionPopup from '../../components/popups/ActionPopup';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';

const UserMgmt =( props )=> {

    const { height } = useWindowDimensions();
    const [reload, setReload] = useState(0)

    const [users, setUsers] = useState([])
    const [showPopup, setShowPopup] = useState(false)

    const [manage, setManage] = useState ({
                                            id:'',
                                            title:'',
                                            description:'',
                                            positive:''
                                         })

    const get_Remove =( id )=> {
        if(props.Type == 'Professional') {
            const data = {
                            id:id,
                            title:'Remove Agricultural Professional',
                            description:'Are you sure you want to Remove this Agricultural Professional?',
                            positive: props.Type
                         }

            setManage(data)
        }

        if(props.Type == 'Farmer') {
            console.log('Farmer found')
            const data = {
                            id:id,
                            title:'Remove Farmer',
                            description:'Are you sure you want to Remove this Farmer?',
                            positive: props.Type
                         }

            setManage(data)
        }

        setShowPopup(true)
    }

    const confirm_Action =async()=> {
        const request = new Request

        try {
            const data = {id : manage.id}
            const response = await request.DeleteUser(data)
            setReload(1)
            setShowPopup(false)
        }

        catch(err) {
            console.log(err)
        }
    }

    useEffect(()=> {
        const get_Requests =async()=> {
            const user = {type : props.Type, status:'show'}

            const request = new Request

            try {
                const response = await request.FetchUsers(user)
                setUsers(response.data)
            }

            catch(err) {
                console.log(err)
            } 
        }

        get_Requests();

    }, []);

    useEffect(()=> {
        const get_Requests =async()=> {
            const user = {type : props.Type, status:'show'}

            const request = new Request

            try {
                const response = await request.FetchUsers(user)
                setUsers(response.data)
            }

            catch(err) {
                console.log(err)
            } 
        }

        get_Requests();
        setReload(0)

    }, [reload]);

    const titles = [
        {head: 'ID', width:'15%'}, 
        {head: 'Name', width:'40%'}, 
        {head: 'Registration Date', width:'30%'}, 
    ]

    return (
        <View style={{position:'relative'}}>
            {showPopup && (
                <View style={[styles.actionPopup, {height}]}>
                    <ActionPopup
                        Title={manage.title}
                        Description={manage.description}
                        Positive='Remove'
                        Close={()=> setShowPopup(false)}
                        get_Action={confirm_Action}>
                    </ActionPopup>
                </View>
            )}

                {props.Type === 'Farmer' && (
                    <View style={{marginTop:20}}></View>
                )}


            <View style={styles.titleRow}>
                {titles.map((title, index) => (
                    <View key={index} style={{backgroundColor:'#005F41', width:title.width, marginHorizontal:3,display:'flex', flexDirection:'row', justifyContent:'center'}}><Text style={styles.text}>{title.head}</Text></View>
                ))}
            </View>

            <View>
                {users.map((user, index) => (
                    <View style={{display:'flex', flexDirection:'row', marginHorizontal:5, marginVertical:6}} key={index}>
                        <Text style={{color:'black', width:'18%'}}>{user.id}</Text>
                        <Text style={{color:'black', width:'42%'}}>{user.name}</Text>
                        <Text style={{color:'black', width:'32%'}}>2012/12/20</Text>
                        <TouchableOpacity onPress={() => get_Remove(user.id)}><Image style={styles.options} source={require('../../Assets/Icons/Delete.png')}/></TouchableOpacity>
                    </View>
                ))}
            </View>
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

    options : {
        height:17,
        width:17
    }
})

export default UserMgmt;