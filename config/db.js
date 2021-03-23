const mongoose = require("mongoose");

const MONGO_URI =  'mongodb+srv://amin:SSsHi8vJnZTVXFq@cluster0.xqhsk.mongodb.net/crm'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

module.exports = connectDB