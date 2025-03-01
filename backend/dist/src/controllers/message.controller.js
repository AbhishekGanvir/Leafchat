import prisma from "../db/prisma.js";
import { getReceiverSocketId, io } from "../socket/socket.js";
export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user.id;
        let conversation = await prisma.conversation.findFirst({
            where: {
                participantIds: {
                    hasEvery: [senderId, receiverId],
                },
            },
        });
        //fisrt time conversation is created
        if (!conversation) {
            conversation = await prisma.conversation.create({
                data: {
                    participantIds: [senderId, receiverId],
                    messages: {
                        create: [],
                    },
                },
            });
        }
        const newMessage = await prisma.message.create({
            data: {
                senderId,
                body: message,
                conversationId: conversation.id,
            },
        });
        if (newMessage) {
            conversation = await prisma.conversation.update({
                where: {
                    id: conversation.id,
                },
                data: {
                    messages: {
                        connect: {
                            id: newMessage.id,
                        },
                    }
                }
            });
        }
        // socket io will work here from now on
        const receiverSocketId = getReceiverSocketId(receiverId);
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }
        res.status(200).json({ newMessage });
    }
    catch (error) {
        console.error("error in sendMessage: ", error.message);
        res.status(500).json({ error: "Server Error" });
    }
};
export const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user.id;
        const conversation = await prisma.conversation.findFirst({
            where: {
                participantIds: {
                    hasEvery: [senderId, userToChatId],
                }
            },
            include: {
                messages: {
                    orderBy: {
                        createdAt: "asc",
                    }
                }
            }
        });
        if (!conversation) {
            res.status(200).json([]);
            return;
        }
        // messages will be seen here
        res.status(200).json(conversation.messages);
        //
    }
    catch (error) {
        console.error("error in get messages: ", error.message);
        res.status(500).json({ error: "Server Error" });
    }
};
export const getUserForSidebar = async (req, res) => {
    try {
        const authUserId = req.user.id;
        const users = await prisma.user.findMany({
            where: {
                id: {
                    not: authUserId,
                }
            },
            select: {
                id: true,
                fullName: true,
                profilePic: true,
            }
        });
        // users will be seen here
        res.status(200).json(users);
        //
    }
    catch (error) {
        console.log("Error in getUsersForSideBar", error.message);
        res.status(500).json({ error: "Server Error" });
    }
};
