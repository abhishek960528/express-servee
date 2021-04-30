import * as dotenv from "dotenv";
import {Iconfig} from "./Iconfig";
dotenv.config();

const config: Iconfig = {
    PORT:process.env.PORT,
    NODE_ENV:process.env.NODE_ENV,
};

Object.freeze(config)

export default config;