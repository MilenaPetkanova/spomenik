const PORT = 8000

import express from 'express'
import cors from 'cors'
import indexRoutes from './routes/index'
import dotenv from 'dotenv'
import * as Sentry from '@sentry/node';

dotenv.config()
Sentry.init({
  dsn: "https://92eb2b9379e4413f8926e39013b0326d@o1151232.ingest.sentry.io/6244833",
  tracesSampleRate: 1.0,
});

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(indexRoutes)
app.listen(PORT, () => console.log(`server running on port ${PORT}`))


