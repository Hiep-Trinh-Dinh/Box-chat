import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_DB_URI);
		console.log("Da ket noi voi MongoDB");
	} catch (error) {
		console.log("Ko the ket noi voi DB", error.message);
	}
};

export default connectToMongoDB;
