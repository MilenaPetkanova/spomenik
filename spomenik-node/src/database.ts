import {Pool} from 'pg'
import {CONSTANT} from './constant'
import dotenv from 'dotenv'
dotenv.config()

const config = {
  user: CONSTANT.DB_USERNAME,
  database: CONSTANT.DB_SCHEMA,
  host: CONSTANT.DB_HOST,
  password: process.env.LOCAL_DB_PASSWORD,
  port: CONSTANT.DB_PORT
};

const pool = new Pool(config)

export default pool;