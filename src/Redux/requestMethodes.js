import axios from "axios";

import { baseURL } from "../constants/baseURL";


export const publicRequest = axios.create({baseURL:baseURL});