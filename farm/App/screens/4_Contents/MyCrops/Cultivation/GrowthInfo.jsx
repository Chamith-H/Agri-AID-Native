import React , {useEffect, useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import Request from '../../../../API_Callings/Request';
import BodyHeader from '../../../../components/headers/BodyHeader';
import SelectedCrop from '../../../../StaticData/SelectedCrop';

const GrowthInfo =()=> {

    const [needed, setNeeded] = useState('')
    const [expand, setExpand] = useState(false)
    const [selected, setSelected] = useState()

    const [cropData, setCropData] = useState()

    const headings = [
        'Cultivation Practices',
        'Growth Requirements',
        'Pest and Disease Threats',
        'Harvesting Information'
    ]

    const select_Heading =( pressed )=> {
        if (selected == pressed) {
            setExpand(!expand)
        }

        else {
            setExpand(true)
        }

        setSelected(pressed)
        
    }

    useEffect(() => {
        const get_Selecter =()=> {
            const selected_crop = new SelectedCrop
            setNeeded(selected_crop.fetch().name)

            get_CropDetails(selected_crop.fetch().name);
        }

        const get_CropDetails =async( crop )=> {
            const request = new Request
            const response = await request.Selected({name:crop})

            setCropData(response.data[0])
        }

        get_Selecter();
       
    }, []);
    

    return (
        <View style={styles.body}>
            <BodyHeader Title='Crop Growth Information'></BodyHeader>

            <Text style={styles.title}>{needed}</Text>

            <View style={styles.separater}/>

            <ScrollView style={{marginHorizontal:3}}>
            {headings.map((heading, index) => (
                <View key={index}>
                    <TouchableOpacity style={(expand && selected == index)? styles.active : styles.selected} onPress={()=> select_Heading(index)}>
                        <Text style={{color:'white', fontSize:16}}>{heading}</Text>

                        {!expand && (
                            <Image style={styles.options} source={require('../../../../Assets/Icons/Collapse.png')}/>
                        )}

                        {expand && selected != index &&(
                            <Image style={styles.options} source={require('../../../../Assets/Icons/Collapse.png')}/>
                        )}

                        {expand && selected == index && (
                            <Image style={styles.options} source={require('../../../../Assets/Icons/Expand_W.png')}/>
                        )}
                    </TouchableOpacity>

                    {expand && (
                        <View>
                            {selected == index &&(
                                <View>
                                    {index == 0 &&(
                                        <View>
                                            {cropData.cultivation.map((cultivate, index) => (
                                                <View key={index} style={{marginHorizontal:12, marginVertical:8}}>
                                                    <Text style={{color:'black', fontWeight:800, fontSize:16}}>Stage 0{index+1} - <Text style={{color:'grey', fontWeight:800, fontSize:16}}>{cultivate.stage}</Text></Text>
                                                    <Text style={{color:'black', marginTop:5, fontSize:15}}>Weeding: <Text style={{color:'grey', fontSize:15}}>{cultivate.weeding}</Text></Text>
                                                    <Text style={{color:'black', marginTop:5, fontSize:15}}>Soil Preparation: <Text style={{color:'grey', fontSize:15}}>{cultivate.soil}</Text></Text>
                                                    {cultivate.pruning != '' &&(
                                                        <Text style={{color:'black'}}>Pruning: <Text style={{color:'grey'}}>{cultivate.pruning}</Text></Text>
                                                    )}
                                                </View>
                                            ))}
                                        </View>
                                    )}

                                    {index == 1 &&(
                                        <View>
                                            {cropData.growth.map((grow, index) => (
                                                <View key={index} style={{marginHorizontal:12, marginVertical:8}}>
                                                    <Text style={{color:'black', fontWeight:800, fontSize:16}}>Stage 0{index+1} - <Text style={{color:'grey', fontWeight:800, fontSize:16}}>{grow.stage}</Text></Text>
                                                    <Text style={{color:'black', marginTop:5, fontSize:15}}>Irrigation: <Text style={{color:'grey', marginTop:5, fontSize:15}}>{grow.irrigation}</Text></Text>
                                                    <Text style={{color:'black', marginTop:5, fontSize:15}}>Fertiliation: <Text style={{color:'grey', marginTop:5, fontSize:15}}>{grow.fertiliation}</Text></Text>
                                                    <Text style={{color:'black', marginTop:5, fontSize:15}}>Nutrient Application: <Text style={{color:'grey', marginTop:5, fontSize:15}}>{grow.nutrient}</Text></Text>
                                                    <Text style={{color:'black', marginTop:5, fontSize:15}}>Ambient Condition: <Text style={{color:'grey', marginTop:5, fontSize:15}}>{grow.ambient}</Text></Text>
                                                </View>
                                            ))}
                                        </View>
                                    )}

                                    {index == 2 &&(
                                        <View>
                                            <View style={{marginTop:20, marginBottom:7, marginLeft:12}}>
                                                <Text style={{color:'black', fontSize:17, fontWeight:800}}>Pest Attacks and Remedies</Text>
                                            </View>
                                            

                                            {cropData.disease.pest.map((pes, index) => (
                                                <View key={index} style={{marginHorizontal:12, marginVertical:8}}>
                                                    <Text style={{color:'black', fontSize:16, fontWeight:800}}>{index+1}. {pes.name}</Text>

                                                    <View style={{flexDirection:'row'}}>
                                                        <View>
                                                            <Image style={{height:80, width:115, marginRight:10, marginTop:4}} source={{ uri: pes.image }}/>
                                                        </View>

                                                        <View>
                                                            <View>
                                                                <View>
                                                                    <Text style={{color:'black', fontWeight:800}}>Symptoms</Text>
                                                                </View>

                                                                {pes.symptoms.map((symptom, index) => (
                                                                    <View key={index} style={{flexDirection:'row'}}>
                                                                        <Image style={{height:5, width:5, marginTop:6, marginRight: 6}} source={require('../../../../Assets/Icons/Bullet.png')}/>

                                                                        <View style={{marginRight:133}}>
                                                                            <Text style={{color:'grey'}}>{symptom}</Text>
                                                                        </View>
                                                                    </View>
                                                                ))}

                                                                <View style={{marginTop:10}}>
                                                                    <Text style={{color:'black', fontWeight:800}}>Remedies</Text>
                                                                </View>

                                                                {pes.remedies.map((remedy, index) => (
                                                                    <View key={index} style={{flexDirection:'row'}}>
                                                                        <Image style={{height:5, width:5, marginTop:6, marginRight: 6}} source={require('../../../../Assets/Icons/Bullet.png')}/>

                                                                        <View style={{marginRight:133}}>
                                                                            <Text style={{color:'grey'}}>{remedy}</Text>
                                                                        </View>
                                                                    </View>
                                                                ))}
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                            ))}

                                            <View style={{marginTop:20, marginBottom:7, marginLeft:12}}>
                                                <Text style={{color:'black', fontSize:17, fontWeight:800}}>Pest Attacks and Remedies</Text>
                                            </View>
                                            

                                            {cropData.disease.threats.map((pes, index) => (
                                                <View key={index} style={{marginHorizontal:12, marginVertical:8}}>
                                                    <Text style={{color:'black', fontSize:16, fontWeight:800}}>{index+1}. {pes.name}</Text>

                                                    <View style={{flexDirection:'row'}}>
                                                        <View>
                                                            <Image style={{height:80, width:115, marginRight:10, marginTop:4}} source={{ uri: pes.image }}/>
                                                        </View>

                                                        <View>
                                                            <View>
                                                                <View>
                                                                    <Text style={{color:'black', fontWeight:800}}>Symptoms</Text>
                                                                </View>

                                                                {pes.symptoms.map((symptom, index) => (
                                                                    <View key={index} style={{flexDirection:'row'}}>
                                                                        <Image style={{height:5, width:5, marginTop:6, marginRight: 6}} source={require('../../../../Assets/Icons/Bullet.png')}/>

                                                                        <View style={{marginRight:133}}>
                                                                            <Text style={{color:'grey'}}>{symptom}</Text>
                                                                        </View>
                                                                    </View>
                                                                ))}

                                                                <View style={{marginTop:10}}>
                                                                    <Text style={{color:'black', fontWeight:800}}>Remedies</Text>
                                                                </View>

                                                                {pes.remedies.map((remedy, index) => (
                                                                    <View key={index} style={{flexDirection:'row'}}>
                                                                        <Image style={{height:5, width:5, marginTop:6, marginRight: 6}} source={require('../../../../Assets/Icons/Bullet.png')}/>

                                                                        <View style={{marginRight:133}}>
                                                                            <Text style={{color:'grey'}}>{remedy}</Text>
                                                                        </View>
                                                                    </View>
                                                                ))}
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                            ))}
                                        </View>
                                    )}

                                    {index == 3 &&(
                                        <View>
                                            <View style={{marginVertical:8, marginHorizontal:12}}>
                                                <Text style={{color:'black', fontWeight:800, fontSize:16,}}>Harvesting Time</Text>
                                                <Text style={{color:'grey', textAlign:'justify', fontSize:15}}>{cropData.harvest.time}</Text>
                                            </View>

                                            <View style={{marginVertical:8, marginHorizontal:12}}>
                                                <Text style={{color:'black',fontSize:16, fontWeight:800}}>Quality Grading</Text>

                                                {cropData.harvest.grading.map((grade, index) => (
                                                    <View key={index}>
                                                        <Text style={{color:'black', textAlign:'justify', fontSize:15, marginTop:10}}>Grade {grade.grade}</Text>
                                                        <Text style={{color:'grey', textAlign:'justify', fontSize:15, marginTop:1}}>{grade.status}</Text>
                                                    </View>
                                                ))}
            
                                            </View>

                                            <View style={{marginVertical:8, marginHorizontal:12}}>
                                                <Text style={{color:'black', fontWeight:800, fontSize:16,}}>Packing</Text>
                                                <Text style={{color:'grey', textAlign:'justify', fontSize:15}}>{cropData.harvest.packing}</Text>
                                            </View>
                                            
                                            <View style={{marginVertical:8, marginHorizontal:12}}>
                                                <Text style={{color:'black', fontWeight:800, fontSize:16}}>Storage</Text>
                                                <Text style={{color:'grey', textAlign:'justify', fontSize:15}}>{cropData.harvest.storage}</Text>
                                            </View>
                                        </View>
                                    )}
                                </View>
                            )}
                        </View>
                    )}
                </View>
            ))}
            </ScrollView>
        </View>
    ) 
}

const styles = StyleSheet.create({
    title : {
        color:'black',
        fontSize:22,
        fontWeight:800,
        marginLeft:25,
        marginTop:'5%',
        color:'#005F41'
    },

    selected : {
        backgroundColor:'#005F41',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:2,
        marginHorizontal:1,
        paddingVertical:8,
        paddingHorizontal:5
    },

    active : {
        backgroundColor:'#09392A',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:2,
        marginHorizontal:1,
        paddingVertical:8,
        paddingHorizontal:5
    },

    body : {
        flex:1
    },

    separater : {
        marginTop:'5%'
    },

    options : {
        height:20,
        width:20,
        marginRight:5
    }

})

export default GrowthInfo;