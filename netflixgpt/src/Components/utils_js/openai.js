
import OpenAI from 'openai';
const API=process.env.REACT_APP_OPENAI_API

export const openai = new OpenAI({
  apiKey: API, 
  dangerouslyAllowBrowser:true
});

