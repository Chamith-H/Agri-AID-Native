import React, {useEffect, useState} from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  Image
} from 'react-native';

import { Calendar } from 'react-native-calendars';
import { RadioButton } from 'react-native-paper';


const Management =( props )=> {
    const [reload, setReload] = useState(false)
    const [step, setStep] = useState('')
    const [targetDays, setTargetDays] = useState()

    const [activityTabs, setActivityTabs] = useState(false)
    const [todayActivities, setTodayActivities] = useState([])

    const weed = {key: 'weed', color: '#005F41', selectedDotColor: 'blue'};
    const soil = {key: 'soil', color: '#005F41', selectedDotColor: 'blue'};
    const prune = {key: 'prune', color: '#005F41', selectedDotColor: 'blue'};
    const irrigate = {key: 'irrigate', color: '#005F41', selectedDotColor: 'blue'};
    const fertilize = {key: 'fertilize', color: '#005F41', selectedDotColor: 'blue'};
    const harvest = {key: 'harvest', color: '#005F41', selectedDotColor: 'blue'};

    const [weedingDates, setWeedingDates] = useState()
    const [soilingDates, setSoilingDates] = useState()
    const [pruningDates, setPruningDates] = useState()
    const [irrigationDates, setIrrigationDates] = useState()
    const [fertilizationDates, setfertiliationDates] = useState()
    const [harvestingDates, setharvestingDates] = useState()

    const [weedExpand, setWeedExpand] = useState(false)
    const [soilExpand, setSoilExpand] = useState(false)
    const [pruneExpand, setPruneExpand] = useState(false)
    const [irrigateExpand, setIrrigateExpand] = useState(false)
    const [fertilieExpand, setFertilieExpand] = useState(false)
    const [harvestExpand, setHarvestExpand] = useState(false)
 
    const weeding =(duration, started, actions)=> {
        const weedingDays = Math.ceil(duration / actions.weeding.gap)
        const soilingDays = Math.ceil(duration / actions.soiling.gap)
        const pruningDays = Math.ceil(duration / actions.pruning.gap)
        const irrigationDays = Math.ceil(duration / actions.irrigation.gap)
        const fertiliationDays = Math.ceil(duration / actions.fertilization.gap)
        const harvestingDays = Math.ceil(duration / actions.harvesting.gap)

        const startedDay = new Date(started)
            
        const mark_Weedings = []
        const mark_Soilings = []
        const mark_Prunings = []
        const mark_Irrigations = []
        const mark_Fertiliations = []
        const mark_Harvestingsings = []

        for(i=0; i<=weedingDays; i++) {
            const target_weed = new Date(startedDay.getTime()+(actions.weeding.gap*i*24*60*60*1000)+(actions.weeding.start*24*60*60*1000))
            
            const dateObject_toWeed = new Date(target_weed);
            const dateString_toWeed = dateObject_toWeed.toISOString().slice(0,10);

            mark_Weedings.push(dateString_toWeed)

            if(i == weedingDays) {
                const marked = {}

                mark_Weedings.forEach(date => {
                    marked[date] = {dots:[weed]}
                })

                setWeedingDates(marked)
                setStep('Weeding dates updated')
            }
        }

        for(i=0; i<=soilingDays; i++) {
            const target_soil = new Date(startedDay.getTime()+(actions.soiling.gap*i*24*60*60*1000)+(actions.soiling.start*24*60*60*1000))

            const dateObject_toSoil = new Date(target_soil);
            const dateString_toSoil = dateObject_toSoil.toISOString().slice(0,10);

            mark_Soilings.push(dateString_toSoil)

            if(i == soilingDays) {
                const marked = {}

                mark_Soilings.forEach(date => {
                    marked[date] = {dots:[soil]}
                })

                setSoilingDates(marked)
                setStep('Soiling dates updated')
            }
        }

        for(i=0; i<=pruningDays; i++) {
            const target_prune = new Date(startedDay.getTime()+(actions.pruning.gap*i*24*60*60*1000)+(actions.pruning.start*24*60*60*1000))

            const dateObject_toPrune = new Date(target_prune);
            const dateString_toPrune = dateObject_toPrune.toISOString().slice(0,10);

            mark_Prunings.push(dateString_toPrune)

            if(i == pruningDays) {
                const marked = {}

                mark_Prunings.forEach(date => {
                    marked[date] = {dots:[prune]}
                })

                setPruningDates(marked)
                setStep('Pruning dates updated')
            }
        }

        for(i=0; i<=irrigationDays; i++) {
            const target_irrigate = new Date(startedDay.getTime()+(actions.irrigation.gap*i*24*60*60*1000)+(actions.irrigation.start*24*60*60*1000))

            const dateObject_toIrrigate = new Date(target_irrigate);
            const dateString_toIrrigate = dateObject_toIrrigate.toISOString().slice(0,10);

            mark_Irrigations.push(dateString_toIrrigate)

            if(i == irrigationDays) {
                const marked = {}

                mark_Irrigations.forEach(date => {
                    marked[date] = {dots:[irrigate]}
                })

                setIrrigationDates(marked)
                setStep('Irrigation dates updated')
            }
        }

        for(i=0; i<=fertiliationDays; i++) {
            const target_fertilize = new Date(startedDay.getTime()+(actions.fertilization.gap*i*24*60*60*1000)+(actions.fertilization.start*24*60*60*1000))

            const dateObject_toFertilie = new Date(target_fertilize);
            const dateString_toFertilize = dateObject_toFertilie.toISOString().slice(0,10);

            mark_Fertiliations.push(dateString_toFertilize)

            if(i == fertiliationDays) {
                const marked = {}

                mark_Fertiliations.forEach(date => {
                    marked[date] = {dots:[fertilize]}
                })

                setfertiliationDates(marked)
                setStep('Fertiliation dates updated')
            }
        }

        for(i=0; i<=harvestingDays; i++) {
            const target_harvest = new Date(startedDay.getTime()+(actions.harvesting.gap*i*24*60*60*1000)+(actions.harvesting.start*24*60*60*1000))

            const dateObject_toHarvest = new Date(target_harvest);
            const dateString_toHarvest = dateObject_toHarvest.toISOString().slice(0,10);

            mark_Harvestingsings.push(dateString_toHarvest)

            if(i == harvestingDays) {
                const marked = {}

                mark_Harvestingsings.forEach(date => {
                    marked[date] = {dots:[harvest]}
                })

                setharvestingDates(marked)
                setStep('Harvesting dates updated')
            }
        }
    }

    const set_AllDates =()=> {

        const merged = {    ...weedingDates, 
                            ...soilingDates, 
                            ...pruningDates,
                            ...irrigationDates,
                            ...fertilizationDates,
                            ...harvestingDates
                       };

        const result = {};

        Object.keys(merged).forEach(date => {
            const dots = [];

            if (weedingDates[date]) dots.push(...weedingDates[date].dots);
            if (soilingDates[date]) dots.push(...soilingDates[date].dots);
            if (pruningDates[date]) dots.push(...pruningDates[date].dots);
            if (irrigationDates[date]) dots.push(...irrigationDates[date].dots);
            if (fertilizationDates[date]) dots.push(...fertilizationDates[date].dots);
            if (harvestingDates[date]) dots.push(...harvestingDates[date].dots);

            result[date] = {dots};
        });

        setTargetDays(result);
    }

    const selected_dayPressed =(date)=> {
        try {
            const dots = targetDays[date.dateString].dots;
            const dotKeys = dots.map(dot => dot.key);
            setTodayActivities(dotKeys);

            setWeedExpand(false)
            setSoilExpand(false)
            setPruneExpand(false)
            setIrrigateExpand(false)
            setFertilieExpand(false)
            setHarvestExpand(false)
            setActivityTabs(true)
        }

        catch(err) {
            setActivityTabs(false)
            console.log(err)
        }
    }

    const mark_Weeding =( status )=> {

    }

    useEffect(() => {
        weeding(props.Period, props.Grow, props.Actions)
    }, []);

    useEffect(() => {
        set_AllDates()
    }, [step]);

    useEffect(() => {
        weeding(props.Period, props.Grow, props.Actions)
        set_AllDates()
        setReload(false)
    }, [reload]);
    

    return (
        <ScrollView style={{marginHorizontal:10}}>
            <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginVertical:8}}>
                <Text style={styles.title}>Activity Calender</Text>
                <TouchableOpacity onPress={()=>setReload(true)}><Image style={styles.options} source={require('../../../../../Assets/Icons/Refresh.png')}/></TouchableOpacity>
            </View>
            

            <View>
                <Calendar
                    markingType={'multi-dot'}
                    markedDates={targetDays}
                    onDayPress={(day) => selected_dayPressed(day)}
                />
            </View>

            {activityTabs && (
                <ScrollView style={{height:220}}>
                    <Text style={{color:'black', fontSize:20, fontWeight:800, marginTop:15}}>Daily Cultivation Workflow Tasks</Text>
                    {todayActivities.map((activity, index) => {
                        if(activity === 'weed') {
                            return (
                                <View key={index}>
                                    <TouchableOpacity onPress={()=>setWeedExpand(!weedExpand)} style={{backgroundColor:'#005F41', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingVertical:6, marginTop:5}}>
                                        <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                                            <View style={{height:15, width:15, borderStyle:'solid', borderWidth:2, borderColor:'white', marginLeft:15}}></View>
                                            <Text style={{color:'white', fontSize:19, fontWeight:500, marginLeft:8}}>T0{index+1} | Weeding</Text>
                                        </View>

                                        {!weedExpand && (
                                            <Image style={styles.options} source={require('../../../../../Assets/Icons/Collapse.png')}/>
                                        )}

                                        {weedExpand && (
                                            <Image style={styles.options} source={require('../../../../../Assets/Icons/Expand_W.png')}/>
                                        )}
                                        
                                    </TouchableOpacity>

                                    {weedExpand && (
                                        <View style={{marginVertical:8, marginHorizontal:5}}>
                                            <Text style={{color:'black', fontSize:16, fontWeight:800}}>Description</Text>
                                            <Text style={{color:'grey', fontSize:15, textAlign: 'justify'}}>{props.Actions.weeding.description}</Text>

                                            <View style={{marginTop:10}}>
                                                <Text style={{color:'black', fontSize:16, fontWeight:800}}>Status</Text>
                                                <View style={{marginRight:'50%'}}>
                                                    <RadioButton.Item label="Completed" labelPosition="right" style={{paddingVertical:0}} status={'checked'}></RadioButton.Item>
                                                    <RadioButton.Item label="Ignore" labelPosition="right" style={{paddingVertical:0}}></RadioButton.Item>
                                                </View>
                                            </View>
                                        </View>
                                    )}
                                </View>
                            )
                        }

                        if(activity === 'soil') {
                            return (
                                <View key={index}>
                                    <TouchableOpacity onPress={()=>setSoilExpand(!soilExpand)} style={{backgroundColor:'#005F41', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingVertical:6, marginTop:5}}>
                                        <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                                            <View style={{height:15, width:15, borderStyle:'solid', borderWidth:2, borderColor:'white', marginLeft:15}}></View>
                                            <Text style={{color:'white', fontSize:19, fontWeight:500, marginLeft:8}}>T0{index+1} | Soiling</Text>
                                        </View>
                                        
                                        {!soilExpand && (
                                            <Image style={styles.options} source={require('../../../../../Assets/Icons/Collapse.png')}/>
                                        )}

                                        {soilExpand && (
                                            <Image style={styles.options} source={require('../../../../../Assets/Icons/Expand_W.png')}/>
                                        )}
                                    </TouchableOpacity>

                                    {soilExpand && (
                                        <View style={{marginVertical:8, marginHorizontal:5}}>
                                            <Text style={{color:'black', fontSize:16, fontWeight:800}}>Description</Text>
                                            <Text style={{color:'grey', fontSize:15, textAlign: 'justify'}}>{props.Actions.soiling.description}</Text>

                                            <View style={{marginTop:10}}>
                                                <Text style={{color:'black', fontSize:16, fontWeight:800}}>Status</Text>
                                                <View style={{marginRight:'50%'}}>
                                                    <RadioButton.Item label="Completed" labelPosition="right" style={{paddingVertical:0}}></RadioButton.Item>
                                                    <RadioButton.Item label="Ignore" labelPosition="right" style={{paddingVertical:0}}></RadioButton.Item>
                                                </View>
                                            </View>
                                        </View>
                                    )}
                                </View>
                            )
                        }

                        if(activity === 'prune') {
                            return (
                                <View key={index}>
                                    <TouchableOpacity onPress={()=>setPruneExpand(!pruneExpand)} style={{backgroundColor:'#005F41', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingVertical:6, marginTop:5}}>
                                        <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                                            <View style={{height:15, width:15, borderStyle:'solid', borderWidth:2, borderColor:'white', marginLeft:15}}></View>
                                            <Text style={{color:'white', fontSize:19, fontWeight:500, marginLeft:8}}>T0{index+1} | Pruning</Text>
                                        </View>
                                        
                                        {!pruneExpand && (
                                            <Image style={styles.options} source={require('../../../../../Assets/Icons/Collapse.png')}/>
                                        )}

                                        {pruneExpand && (
                                            <Image style={styles.options} source={require('../../../../../Assets/Icons/Expand_W.png')}/>
                                        )}
                                    </TouchableOpacity>

                                    {pruneExpand && (
                                        <View style={{marginVertical:8, marginHorizontal:5}}>
                                            <Text style={{color:'black', fontSize:16, fontWeight:800}}>Description</Text>
                                            <Text style={{color:'grey', fontSize:15, textAlign: 'justify'}}>{props.Actions.pruning.description}</Text>

                                            <View style={{marginTop:10}}>
                                                <Text style={{color:'black', fontSize:16, fontWeight:800}}>Status</Text>
                                                <View style={{marginRight:'50%'}}>
                                                    <RadioButton.Item label="Completed" labelPosition="right" style={{paddingVertical:0}}></RadioButton.Item>
                                                    <RadioButton.Item label="Ignore" labelPosition="right" style={{paddingVertical:0}}></RadioButton.Item>
                                                </View>
                                            </View>
                                        </View>
                                    )}
                                </View>
                            )
                        }

                        if(activity === 'irrigate') {
                            return (
                                <View key={index}>
                                    <TouchableOpacity onPress={()=>setIrrigateExpand(!irrigateExpand)} style={{backgroundColor:'#005F41', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingVertical:6, marginTop:5}}>
                                        <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                                            <View style={{height:15, width:15, borderStyle:'solid', borderWidth:2, borderColor:'white', marginLeft:15}}></View>
                                            <Text style={{color:'white', fontSize:19, fontWeight:500, marginLeft:8}}>T0{index+1} | Irrigation</Text>
                                        </View>
                                        
                                        {!irrigateExpand && (
                                            <Image style={styles.options} source={require('../../../../../Assets/Icons/Collapse.png')}/>
                                        )}

                                        {irrigateExpand && (
                                            <Image style={styles.options} source={require('../../../../../Assets/Icons/Expand_W.png')}/>
                                        )}
                                    </TouchableOpacity>

                                    {irrigateExpand && (
                                        <View style={{marginVertical:8, marginHorizontal:5}}>
                                            <Text style={{color:'black', fontSize:16, fontWeight:800}}>Description</Text>
                                            <Text style={{color:'grey', fontSize:16, fontSize:15, textAlign: 'justify'}}>{props.Actions.irrigation.description}</Text>

                                            <View style={{marginTop:10}}>
                                                <Text style={{color:'black', fontSize:16, fontWeight:800}}>Status</Text>
                                                <View style={{marginRight:'50%'}}>
                                                    <RadioButton.Item label="Completed" labelPosition="right" style={{paddingVertical:0}}></RadioButton.Item>
                                                    <RadioButton.Item label="Ignore" labelPosition="right" style={{paddingVertical:0}}></RadioButton.Item>
                                                </View>
                                            </View>
                                        </View>
                                    )}
                                </View>
                            )
                        }

                        if(activity === 'fertilize') {
                            return (
                                <View key={index}>
                                    <TouchableOpacity onPress={()=>setFertilieExpand(!fertilieExpand)} style={{backgroundColor:'#005F41', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingVertical:6, marginTop:5}}>
                                        <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                                            <View style={{height:15, width:15, borderStyle:'solid', borderWidth:2, borderColor:'white', marginLeft:15}}></View>
                                            <Text style={{color:'white', fontSize:19, fontWeight:500, marginLeft:8}}>T0{index+1} | Fertiliation</Text>
                                        </View>
                                        
                                        {!fertilieExpand && (
                                            <Image style={styles.options} source={require('../../../../../Assets/Icons/Collapse.png')}/>
                                        )}

                                        {fertilieExpand && (
                                            <Image style={styles.options} source={require('../../../../../Assets/Icons/Expand_W.png')}/>
                                        )}
                                    </TouchableOpacity>

                                    {fertilieExpand && (
                                        <View style={{marginVertical:8, marginHorizontal:5}}>
                                            <Text style={{color:'black', fontSize:16, fontWeight:800}}>Description</Text>
                                            <Text style={{color:'grey', fontSize:16, fontSize:15, textAlign: 'justify'}}>{props.Actions.fertilization.description}</Text>

                                            <View style={{marginTop:10}}>
                                                <Text style={{color:'black', fontSize:16, fontWeight:800}}>Status</Text>
                                                <View style={{marginRight:'50%'}}>
                                                    <RadioButton.Item label="Completed" labelPosition="right" style={{paddingVertical:0}}></RadioButton.Item>
                                                    <RadioButton.Item label="Ignore" labelPosition="right" style={{paddingVertical:0}}></RadioButton.Item>
                                                </View>
                                            </View>
                                        </View>
                                    )}
                                </View>
                            )
                        }

                        if(activity === 'harvest') {
                            return (
                                <View key={index}>
                                    <TouchableOpacity onPress={()=>setHarvestExpand(!harvestExpand)} style={{backgroundColor:'#005F41', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingVertical:6, marginTop:5}}>
                                        <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                                            <View style={{height:15, width:15, borderStyle:'solid', borderWidth:2, borderColor:'white', marginLeft:15}}></View>
                                            <Text style={{color:'white', fontSize:19, fontWeight:500, marginLeft:8}}>T0{index+1} | Harvesting</Text>
                                        </View>
                                        
                                        {!harvestExpand && (
                                            <Image style={styles.options} source={require('../../../../../Assets/Icons/Collapse.png')}/>
                                        )}

                                        {harvestExpand && (
                                            <Image style={styles.options} source={require('../../../../../Assets/Icons/Expand_W.png')}/>
                                        )}
                                    </TouchableOpacity>

                                    {harvestExpand && (
                                        <View style={{marginVertical:8, marginHorizontal:5}}>
                                            <Text style={{color:'black', fontSize:16, fontWeight:800}}>Description</Text>
                                            <Text style={{color:'grey', fontSize:15, textAlign: 'justify'}}>{props.Actions.harvesting.description}</Text>

                                            <View style={{marginTop:10}}>
                                                <Text style={{color:'black', fontSize:16, fontWeight:800}}>Status</Text>
                                                <View style={{marginRight:'50%'}}>
                                                    <RadioButton.Item label="Completed" labelPosition="right" style={{paddingVertical:0}}></RadioButton.Item>
                                                    <RadioButton.Item label="Ignore" labelPosition="right" style={{paddingVertical:0}}></RadioButton.Item>
                                                </View>
                                            </View>
                                        </View>
                                    )}
                                </View>
                            )
                        }
                    })}
                </ScrollView>
            )}
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title : {
        fontSize:21,
        fontWeight:800,
        color:'black',
    },

    options : {
        height:25,
        width:25,
        marginRight:10
    }

})

export default Management;