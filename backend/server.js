import express, { urlencoded } from 'express'
import userRoute from './routes/userRoute.js'
import journalRoutes from './routes/journalRoutes.js'
import { config } from 'dotenv'
import connectDB from './config/db.js'
import { errorHandler ,notFound } from './middleware/errorMiddleware.js'

import cookieParser from 'cookie-parser'



config()
connectDB()
const app = express()

const port = process.env.PORT
app.use(express.json())
app.use(express.urlencoded({extended :false}))
app.use(cookieParser())


app.use('/api/users' , userRoute)
app.use('/api/journals' , journalRoutes)
app.use(errorHandler)
app.use(notFound)

app.listen(port ,()=>{ console.log(`server started listening at port ${port}`)})