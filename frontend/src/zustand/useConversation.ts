
import { create } from "zustand";
import { ConversationType } from "../types/global"
 // type ConversationType = {
  //  id:string;
  //  fullName:string;
  //  profilePic:string;
  // }

 export type MessageType ={
    id: string;
    body: string;
    senderId: string;
    createdAt: string;
    //shouldshake
    shouldShake?:boolean;
}
interface ConversationState{
    selectedConversation: ConversationType | null;
    messages: MessageType[];
    setSelectedConversation: (conversation: ConversationType|null ) => void;
    setMessages: (messages: MessageType[] ) => void;
}

const useConversation = create<ConversationState>((set) =>({
    selectedConversation: null,
    setSelectedConversation: (conversation) => set({selectedConversation: conversation}),
    messages: [],
    setMessages: (messages) => set({ messages }),
}) );

export default useConversation;