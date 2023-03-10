import React from 'react';
import { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import Request from '../../../API_Callings/Request';

import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';

import LongButton from '../../../components/buttons/LongButton';
import LoginHeader from '../../../components/headers/LoginHeader';
import CredentialField from '../../../components/inputs/CredentialField';
import PasswordField from '../../../components/inputs/PasswordField';

const FarmerRegister =()=> {
    const route = useRoute()

    const [role, setRole] = useState('')
    const [status, setStatus] = useState('hide')

    const [header, setHeader] = useState('')
    const [title, setTitle] = useState('')

    const [userId, setUserId] = useState('')
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [designation, setDesignation] = useState('')
    const [workplace, setWorkplace] = useState('')

    const submit_Values = async() => {

        const newUser = {  
                            id: userId, 
                            name: userName, 
                            designation: designation, 
                            workplace: workplace, 
                            email: userEmail, 
                            password: userPassword,
                            role: role,
                            visible: status,
                        }

        request = new Request

        try {
            const response = await request.Register(newUser)
            console.log(response.data)
        }

        catch (err) {
            console.log(err)
        }
    }

    useEffect(()=> {

        if(route.params == 0) {
            setRole('Farmer')
            setStatus('show')
            setHeader('Farmer Registration');
            setTitle('Farmer ID');
        }
            else if(route.params == 1) {
                setRole('Professional')
                setHeader('Agricultural Professional Registration');
                setTitle('Agriultural Professional ID');
            }
                else if(route.params == 2) {
                    setRole('Admin')
                    setStatus('show')
                    setHeader('Site Administrator Registration');
                    setTitle('Site Administrator ID');
                }
                    else {
                        console.log('_ERROR')
                    }

    }, []);
   
    return (
        <View style={styles.body}>
            <LoginHeader Title={header}></LoginHeader>

            <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
                <ScrollView>
                    <View style={styles.fields}>
                        <View style={styles.singleField} >
                            <CredentialField Label={title} Placeholder='Your id' Change={ (value) => setUserId(value) } />
                        </View>

                        <View style={styles.singleField} >
                            <CredentialField Label='Full Name' Placeholder='Your name' Change={ (value) => setUserName(value) } />
                        </View>

                        {role == 'Professional' && (
                            <View style={styles.singleField} >
                                <CredentialField Label='Designation' Placeholder='Your designation' Change={ (value) => setDesignation(value) } />
                            </View> )}

                        {role == 'Professional' && (
                            <View style={styles.singleField} >
                                <CredentialField Label='Workpalce' Placeholder='Your workplace' Change={ (value) => setWorkplace(value) } />
                            </View>  )}

                        <View style={styles.singleField} >
                            <CredentialField Label='Email Address' Placeholder='example@gmail.com' Change={ (value) => setUserEmail(value) } />
                        </View>

                        <View style={styles.singleField} >
                            <PasswordField Label='Password' Placeholder='Your password' Change={ (value) => setUserPassword(value) } />
                        </View>

                        <View style={styles.singleField} >
                            <PasswordField Label='Confirm Password' Placeholder='Confirm Password'/>
                        </View>  
                    </View>

                    <View style={styles.button}>
                        <LongButton Title='Register' press_Action={submit_Values}></LongButton> 
                    </View>
                </ScrollView> 
            </KeyboardAvoidingView>             
        </View>
    )
}

const styles = StyleSheet.create({
    body : {
        backgroundColor: 'white',
        height:'100%'
    },

    container: {
        flex: 1,
    },

    singleField: {
        marginVertical:'2.5%'
    },

    fields: {
        marginTop:'8%',
    },

    button: {
        marginTop:'20%',
        marginBottom:'15%'
    }
})

export default FarmerRegister;