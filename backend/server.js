import express, { urlencoded } from 'express'
import userRoute from './routes/userRoute.js'
import { config } from 'dotenv'
import connectDB from './config/db.js'



config()
connectDB()
const app = express()

const port = process.env.PORT
app.use(express())
app.use(express.urlencoded({extended :false}))

app.use('/api/users' , userRoute)


app.listen(port ,()=>{ console.log(`server started listening at port ${port}`)})