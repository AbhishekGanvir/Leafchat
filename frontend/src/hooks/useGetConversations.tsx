import  { useEffect, useState } from 'react'
import { ConversationType } from '../types/global'
import toast from 'react-hot-toast';

const useGetConversations = () => {
  const [loading,setLoading]= useState(false)
  const [conversations, setConversations] = useState<ConversationType[]>([]);

  useEffect(() => {
    const GetConversations = async () => {
        setLoading(true);
        try{
          const res = await fetch("/api/messages/conversations");
          const data = await res.json();
          if(data.error) {
            throw new Error(data.error);
          }
          setConversations(data);  
        } catch (error:any) {
            toast.error(error.message);
        }finally {
            setLoading(false);
        }
    };
    GetConversations();
  },[])
  return{ loading, conversations};
};

export default useGetConversations;