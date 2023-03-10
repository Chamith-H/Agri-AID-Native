import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChooseRole from "../screens/1_start/ChooseRole";
import ChooseSign from "../screens/1_start/ChooseSign";
import FarmerRegister from "../screens/2_sign/farmer/FarmerRegister";
import FarmerLogin from "../screens/2_sign/farmer/FarmerLogin";
import Home from "../screens/3_Home/Home";
import MarketConditions from "../screens/4_Contents/MarketConditions/MarketConditions";
import CropRecommendations from "../screens/4_Contents/CropRecommendations/CropRecommendations";
import MyCrops from "../screens/4_Contents/MyCrops/MyCrops";
import CropAdvisory from "../screens/5_Advisory/CropAdvisory";
import CropAdvisiors from "../screens/4_Contents/CropAdvisiors/CropAdvisiors";
import MgmtHome from "../screens/6_UserMgmt/MgmtHome";
import ProfMgmt from "../screens/6_UserMgmt/ProfMgmt";
import FarmerMgmt from "../screens/6_UserMgmt/FarmerMgmt";
import CultivationPlan from "../screens/4_Contents/MyCrops/Cultivation/CultivationPlan";
import GrowthInfo from "../screens/4_Contents/MyCrops/Cultivation/GrowthInfo";

const Stack = createNativeStackNavigator();


const Routings =()=> {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name='ChooseRole' component={ChooseRole} />
                <Stack.Screen name='ChooseSign' component={ChooseSign} />
                <Stack.Screen name='FarmerRegister' component={FarmerRegister} />
                <Stack.Screen name='FarmerLogin' component={FarmerLogin} />
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='MarketConditions' component={MarketConditions} />
                <Stack.Screen name='CropRecommendations' component={CropRecommendations} />
                <Stack.Screen name='MyCrops' component={MyCrops} />
                <Stack.Screen name='CropAdvisiors' component={CropAdvisiors} />
                <Stack.Screen name='CropAdvisory' component={CropAdvisory} />
                <Stack.Screen name='Management' component={MgmtHome} />
                <Stack.Screen name='ProfMgmt' component={ProfMgmt} />
                <Stack.Screen name='FarmerMgmt' component={FarmerMgmt} />
                <Stack.Screen name='Cultivation' component={CultivationPlan} />
                <Stack.Screen name='GrowthInfo' component={GrowthInfo} />
            </Stack.Navigator>
        </NavigationContainer>
    ) 
}

export default Routings;