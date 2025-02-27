import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/Auth.context";

const useSendMessage = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();
	const { authUser } = useAuthContext();

	const sendMessage = async (messageText: string) => {
		if (!selectedConversation) return;
		setLoading(true);

		try {
			const res = await fetch(`/api/messages/send/${selectedConversation.id}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ message: messageText }),
                //msgtext
			});

			const data = await res.json();
			if (data.error) throw new Error(data.error);

			// Log the response to see its structure
			console.log("API response:", data);

			// Ensure the message has the expected structure
			const formattedMessage = {
				...data,
				senderId: data.senderId || authUser?.id,
				// Make sure the message has the "body" field that your component expects
				body: data.body || data.message || data.content || messageText
			};

			console.log("🍂 Message sent successfully");
            //toast("🍂 Message sent successfully")

			setMessages([...messages, formattedMessage]);
		} catch (error: any) {
			console.error("Error sending message:", error);
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { sendMessage, loading };
};

export default useSendMessage;