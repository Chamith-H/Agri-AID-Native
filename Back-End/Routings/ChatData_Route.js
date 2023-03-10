const dataModel = require("../Models/ChatModel")
const {Server} = require("socket.io")
const moment = require('moment-timezone');

const dateString = "2023-02-24T15:46:48+05:30";
const dateObj = new Date(dateString);


const chat_Handler = ( chat_Server )=> {
  const io = new Server(chat_Server)

  io.on("connection", (socket) => {
      console.log('User Connected')

      socket.on("identify", async(receiver) => {
          console.log(receiver)
          await socket.join(receiver)
      })
    
      socket.on ("chat", async(data)=> {

          //Manage chats
          if(data.s_TYPE == 'farmer') {
              try {
                await io.to(data.a_ID).emit('chat', data)
              }

              catch (error) {
                console.log(error)
              }
          }

          else if(data.s_TYPE == 'professional') {
            try {
              await io.to(data.f_ID).emit('chat', data)
            }

            catch (error) {
              console.log(error)
            }
          }

          //Save chat to the database
          try {
            if(data != null) {
                const new_Message = new dataModel({
                  f_ID: data.f_ID,
                  f_Name: data.f_Name,
                  a_ID: data.a_ID,
                  a_Name: data.a_Name,
                  type: data.s_TYPE,
                  msg: data.m_TEXT,
                  time: moment().tz('Asia/Colombo').format()
                })
    
                const response = await new_Message.save()
                response != null ?
                    console.log('done') :console.log('Null')
            }
    
            else {
              console.log('Solve')
            }
        }
    
        catch (error) {
            console.log(error)
        }
      })

      socket.on ("previous", async(data)=> {
        console.log(data)
        //Get chat history
        try {
            if (data.role == 0 ) {
              const messages = await dataModel.find({f_ID : data.need}, {_id:0})

              if(messages != null) {
                const groupedMessages = messages.reduce((acc, curr) => {
      
                  const index = acc.findIndex(item => item.id === curr.a_ID);
                  if (index !== -1) {
                    acc[index].data.push({time:curr.time, message:curr.msg, type:curr.type});
                  } else {
                    acc.push({id: curr.a_ID, name:curr.a_Name, chat:false, data: [{time:curr.time, message: curr.msg, type:curr.type}]});
                  }

                  return acc;
                  
                }, []);
                
                socket.emit("inbox", groupedMessages)
              }

            }

            else if(data.role == 1 ) {
              const messages = await dataModel.find({a_ID : data.need}, {_id:0})

              if(messages != null) {
                
                const groupedMessages = messages.reduce((acc, curr) => {
      
                  const index = acc.findIndex(item => item.id === curr.f_ID);
                  if (index !== -1) {
                    acc[index].data.push({time:curr.time, message:curr.msg, type:curr.type});
                  } else {
                    acc.push({id: curr.f_ID, name:curr.f_Name, chat:false, data: [{time:curr.time, message: curr.msg, type:curr.type}]});
                  }

                  return acc;

                }, []);
                
                socket.emit("inbox", groupedMessages)
              }
              
              else {
                socket.emit("inbox", 0)
              }
            }

            else {
              console.log('Crash')
            }
        }

        catch {

        }
    })

  })

}
module.exports = chat_Handler