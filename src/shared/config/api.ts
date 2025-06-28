import axios from 'axios';
import { Env } from './env';

export const API = axios.create({
  baseURL: Env.NEXT_PUBLIC_APP_URL,
});
