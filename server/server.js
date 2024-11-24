import app from "./app.js"
import { connectToDB } from "./config/database.js"

connectToDB()

app.listen(process.env.PORT, () => {
    console.log(`Server is running on Port: ${process.env.PORT}`)
})