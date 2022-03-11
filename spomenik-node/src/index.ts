import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import indexRoutes from './routes/index'
import db from './models'

dotenv.config()

const app = express()
const port = process.env.PORT || 8000

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(indexRoutes)

try {
    db.sequelize.sync().then(() => {
        app.listen(port, () => {
            console.log(`server running on port ${port}`)
        })
    })
} catch (error: any) {
    console.error(`Error occurred: ${error.message}`)
}



