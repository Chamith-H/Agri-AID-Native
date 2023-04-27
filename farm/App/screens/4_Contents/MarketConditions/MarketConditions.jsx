import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BodyHeader from '../../../components/headers/BodyHeader';
import DoubleTab from '../../../components/sub-headers/DoubleTab';
import CurrentMarket from './Tabs/CurrentMarket';
import ForetastedMarket from './Tabs/ForetastedMarket';
import Request from '../../../API_Callings/Request';

const MarketConditions =()=> {

    const[leftTab, setLeftTab] = useState(true)
    const[cropName, setCropName] = useState(['_DEFAULT'])
    const[marketData, setMarketData] = useState([0, 0, 0])

    useEffect(() => {
        const get_CropLIST = async()=> {
            request = new Request
    
            try {
                const response = await request.List()
    
                if(response != 0) {
                    setCropName(response.data)
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

    const get_Conditions = async( fetch )=> {
        const request = new Request
        console.log(3)
        try {
            const response = await request.Add_Market(fetch)
            let market = [response.data.price, response.data.demand, response.data.supply]
            console.log(3)
            setMarketData(market)
        }

        catch (err) {
            console.log(err)
        }
    }

    return (
        <View style={{flex:1, height:'100%'}}>
            <BodyHeader Title='Market Conditions'></BodyHeader>

            <DoubleTab 
                    LeftButton='Current Market Conditions' 
                    Mark={leftTab}
                    press_LeftAction={()=> setLeftTab(true)}
                    RightButton='Foretasted Market Conditions'
                    press_RightAction={()=> setLeftTab(false)}>
            </DoubleTab>

            <ScrollView>
            { !leftTab && (
                <ForetastedMarket 
                    CropList={cropName} 
                    posting_Data={(data)=>get_Conditions(data)} 
                    Market={marketData}>
                </ForetastedMarket>
            )}

            { leftTab && (
                <CurrentMarket 
                    CropList={cropName} 
                    posting_Data={(data)=>get_Conditions(data)} 
                    Market={marketData}>
                </CurrentMarket>
            )}
            </ScrollView>
        </View>
    ) 
}

const styles = StyleSheet.create({
    form: {
        marginHorizontal:'9%',
        height:145,
        justifyContent:'space-between',
        marginVertical:60
    }
})

export default MarketConditions;