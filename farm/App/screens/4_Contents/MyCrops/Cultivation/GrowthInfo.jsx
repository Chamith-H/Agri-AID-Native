import React , {useEffect, useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import BodyHeader from '../../../../components/headers/BodyHeader';
import SelectedCrop from '../../../../StaticData/SelectedCrop';

const GrowthInfo =( { navigation } )=> {

    const [needed, setNeeded] = useState('')

    const headings = [
        'Cultivation Practices',
        'Growth Requirements',
        'Pest and Disease Threats',
        'Harvesting Information'
     ]

    useEffect(() => {
       const selected_crop = new SelectedCrop
       setNeeded(selected_crop.fetch().name)
    }, []);
    

    return (
        <View style={styles.body}>
            <BodyHeader Title='Crop Cultivation Plan'></BodyHeader>

            <Text style={styles.title}>{needed}</Text>

            <View style={styles.separater}/>

            {headings.map((heading) => (
                <View>
                    <TouchableOpacity>
                        <View>
                            <Text>{heading}</Text>
                        </View>
                    </TouchableOpacity>


                    <View>

                    </View>
                </View>
            ))}
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

    body : {
        flex:1,
    },

    separater : {
        marginTop:'5%'
    },

})

export default GrowthInfo;