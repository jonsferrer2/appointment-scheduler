import app from "./server";
import { PORT, MONGO_URL } from "./utils/constants";
import mongoose from "mongoose";

mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => {
    console.log(error);
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
