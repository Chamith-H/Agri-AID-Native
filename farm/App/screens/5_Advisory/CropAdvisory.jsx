import React, { useState, useEffect } from 'react';
import AppUser from '../../StaticData/AppUser';
import io from 'socket.io-client';
const socket = io.connect("http://192.168.8.182:3001")

import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native';
import HomeHeader from '../../components/headers/HomeHeader';
import Receivers from '../../components/messages/Receivers';

const CropAdvisory =()=> {

  const [clientID, setClientID] = useState(null);
  const [allMessages, setAllMessages] = useState([])
  const [showChat, setShowChat] = useState(false)
  const [chatExpand, setChatEpand] = useState(false)
  

  const show_Chatting =async(index)=> {

    try {
      setChatEpand(!chatExpand)
    }
    
    catch (err){
      console.log(err)
    }

    setAllMessages(current => {
      const remake = [...current]
      remake[index] = {...remake[index], chat:chatExpand}
      return remake
    })
  }

    
  useEffect(() => {

    const app_user = new AppUser

    socket.emit("previous", {role:1, need: app_user.fetch().id})

    socket.on("inbox", (allMSGS)=> {
      if (allMSGS != 0) {
        setAllMessages(allMSGS)
        setShowChat(true)
      }
    })

    socket.on('identify', (clientID) => {
      console.log(`Identified as client ${clientID}`);
      setClientID(clientID);
    });

    
    socket.on('chat', (message) => {
      console.log(`Received message: ${message}`);
      
      if (message.a_ID === clientID) {
        console.log('Ok All done')
        // setMessages((prevMessages) => [...prevMessages, message]);
      }
    });

   
    socket.on('connect', () => {
      socket.emit('identify', app_user.fetch().id); 
    });

  }, []);

    return (
        <View>
            <HomeHeader Title='Crop Advisory'></HomeHeader>
         
            {showChat && (
              <ScrollView>
                 {allMessages.map((sender, index) => (
                    <Receivers 
                        Sender={sender.name} 
                        Id={sender.id} 
                        Data={sender.data} 
                        press_Action={()=>show_Chatting(index)}
                        OpenChat={sender.chat}
                        Role='Advisior'>
                    </Receivers>
                 ))}      
              </ScrollView>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default CropAdvisory;