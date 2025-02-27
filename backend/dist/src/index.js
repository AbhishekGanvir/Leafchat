import express from "express";
import cookieparser from "cookie-parser";
import messageRoutes from "./routes/message.route.js";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
import { app, server } from "./socket/socket.js";
import path from "path";
dotenv.config();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();
app.use(express.json()); //middleware for application/json
app.use(cookieparser()); // for parsing cookies
app.use("/api/messages", messageRoutes);
app.use("/api/auth", authRoutes);
if (process.env.NODE_ENV !== "development") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
    });
}
server.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});
