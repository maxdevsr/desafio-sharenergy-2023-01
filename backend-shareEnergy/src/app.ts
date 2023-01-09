import express from "express"
import mongoose from "mongoose"
import routes from "./routes/user.routes"

const app = express()

app.use(express.json())
app.use(routes)

const DB_USER = "maxdev"
const DB_PASSWORD = encodeURIComponent("97268705Mm")

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.vipzqdg.mongodb.net/bancodaapi?retryWrites=true&w=majority`)
.then(() => {
    console.log("Conectado ao MongoDB")
    app.listen(3000)
})
.catch((err) => console.log(err))