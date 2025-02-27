/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import notificationSound from "../assets/notification.mp3"

const uselistenMessages = () => {
    const { socket } = useSocketContext()
    const {messages,setMessages} = useConversation()

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
           newMessage.shouldShake =true;
           const sound = new Audio(notificationSound);
           sound.play();
            setMessages([...messages, newMessage]);
            
        });
        return () => {socket?.off("newMessage");}
    },[socket, messages, setMessages])
    
};
export default uselistenMessages;