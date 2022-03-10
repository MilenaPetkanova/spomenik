import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import indexRoutes from './routes/index'

dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(indexRoutes)

app.listen(process.env.PORT || 8000, () => console.log(`server running on port 8000`))


