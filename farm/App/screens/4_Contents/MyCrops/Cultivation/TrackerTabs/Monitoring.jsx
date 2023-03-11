import React, {useEffect, useState} from 'react';
import Request from '../../../../../API_Callings/Request';

import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  useWindowDimensions,
  ScrollView,
} from 'react-native';

const Monitoring =( props )=> {
    const [reload, setReload] = useState(false)
    const { height } = useWindowDimensions();

    const [stepOne, setStepOne] = useState({title:'', name:'', duration:'', begin:'', end:''})
    const [stepTwo, setStepTwo] = useState({title:'', name:'', duration:'', begin:'', end:''})
    const [stepThree, setStepThree] = useState({title:'', name:'', duration:'', begin:'', end:''})
    const [stepFour, setStepFour] = useState({title:'', name:'', duration:'', begin:'', end:''})
    const [stepFive, setStepFive] = useState({title:'', name:'', duration:'', begin:'', end:''})

    const [allStages, setAllStages] = useState([])

    const stage_One =()=> {
        try {

            const started = new Date(props.Grow)
            const over = new Date(started.getTime()+(props.Stages.one.duration*7*24*60*60*1000))
            const stage = {
                title:'Stage 01',
                name:'Seeding',
                image:props.Stages.one.image,
                duration:props.Stages.one.duration,
                description:props.Stages.one.description,
                begin: started.toISOString().slice(0,10),
                end: over.toISOString().slice(0,10),
            }

            setStepOne(stage)
        }

        catch(err) {
            setReload(true)
            console.log(err)
        }  
    }

    const stage_Two =()=> {
        try {

            const started = new Date(props.Grow)
            const begin = new Date(started.getTime()+(props.Stages.one.duration*7*24*60*60*1000))
            const over = new Date(begin.getTime()+(props.Stages.two.duration*7*24*60*60*1000))
            const stage = {
                title:'Stage 02',
                name:'Vegetative',
                image:props.Stages.two.image,
                duration:props.Stages.two.duration,
                description:props.Stages.two.description,
                begin: begin.toISOString().slice(0,10),
                end: over.toISOString().slice(0,10),
            }

            setStepTwo(stage)
        }

        catch(err) {
            setReload(true)
            console.log(err)
        }     
    }

    const stage_Three =()=> {
        try {

            const started = new Date(props.Grow)
            const begin = new Date(started.getTime()+(props.Stages.one.duration*7*24*60*60*1000)+(props.Stages.two.duration*7*24*60*60*1000))
            const over = new Date(begin.getTime()+(props.Stages.three.duration*7*24*60*60*1000))
            const stage = {
                title:'Stage 03',
                name:'Flowering',
                image:props.Stages.three.image,
                duration:props.Stages.three.duration,
                description:props.Stages.three.description,
                begin: begin.toISOString().slice(0,10),
                end: over.toISOString().slice(0,10),
            }

            setStepThree(stage)
        }

        catch(err) {
            setReload(true)
            console.log(err)
        }     
    }

    const stage_Four =()=> {
        try {

            const started = new Date(props.Grow)
            const begin = new Date(started.getTime()+(props.Stages.one.duration*7*24*60*60*1000)+(props.Stages.two.duration*7*24*60*60*1000)+(props.Stages.three.duration*7*24*60*60*1000))
            const over = new Date(begin.getTime()+(props.Stages.four.duration*7*24*60*60*1000))
            const stage = {
                title:'Stage 04',
                name:'Fruit Development',
                image:props.Stages.four.image,
                duration:props.Stages.four.duration,
                description:props.Stages.four.description,
                begin: begin.toISOString().slice(0,10),
                end: over.toISOString().slice(0,10),
            }

            setStepFour(stage)
        }

        catch(err) {
            setReload(true)
            console.log(err)
        }     
    }

    const stage_Five =()=> {
        try {

            const started = new Date(props.Grow)
            const begin = new Date(started.getTime()+(props.Stages.one.duration*7*24*60*60*1000)+(props.Stages.two.duration*7*24*60*60*1000)+(props.Stages.three.duration*7*24*60*60*1000)+(props.Stages.four.duration*7*24*60*60*1000))
            const over = new Date(begin.getTime()+(props.Stages.five.duration*7*24*60*60*1000))
            const stage = {
                title:'Stage 05',
                name:'Harvesting',
                image:props.Stages.five.image,
                duration:props.Stages.five.duration,
                description:props.Stages.five.description,
                begin: begin.toISOString().slice(0,10),
                end: over.toISOString().slice(0,10),
            }

            setStepFive(stage)
        }

        catch(err) {
            setReload(true)
            console.log(err)
        }     
    }

    const testing =()=> {
        try {
            const request = new Request
            const response = request.Add_Crop('')
        }

        catch(err) {

        }
    }

    useEffect(() => { 
        stage_One()
        stage_Two()
        stage_Three()
        stage_Four()
        stage_Five()
    }, []);

    useEffect(() => { 
        stage_One()
        stage_Two()
        stage_Three()
        stage_Four()
        stage_Five()
    }, [reload]);

    useEffect(() => { 
        const steps = [stepOne, stepTwo, stepThree, stepFour, stepFive]
        setAllStages(steps)
    }, [stepFive]);

    return (
        <ScrollView style={{height:height-180}}>
            {allStages.map((stage, index) => (
                <View key={index} style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginTop:30, marginLeft:40}}>
                    <View style={{borderStyle:'solid', borderWidth:1}}>
                        <Image
                            style={styles.options}
                            source={{ uri: stage.image }}
                        />
                    </View>

                    <View>
                        <Text style={{color:'black', fontSize:15, fontWeight:800}}>{stage.title} - {stage.name} [{stage.duration} Weeks]</Text>
                        <Text style={{color:'black', fontSize:15, fontWeight:800}}>{stage.begin} to {stage.end}</Text>
                        <Text style={{color:'grey', marginEnd:'23%', textAlign: 'justify'}}>{stage.description}</Text>
                    </View>
                </View>
            ))}

            {/* <Button title='press me' onPress={testing}></Button> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent:'center',
        height:25,
        width:25,
        borderRadius:30,
    },

    icon: {
        color:'black',
        fontSize:19
    },

    options: {
        height:100,
        width:60,
    }
})

export default Monitoring;