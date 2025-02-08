import app from "./server";
import "dotenv/config";
import mongoose from "mongoose";

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "";

mongoose.connect(MONGO_URI);
mongoose.connection.on("error", (error: Error) => {
    console.log(error);
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
