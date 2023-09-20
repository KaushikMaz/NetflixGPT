import OpenAI from 'openai';
const config = require('../../config');
const API=config.openAI_API

export const openai = new OpenAI({
  apiKey: API, 
  dangerouslyAllowBrowser:true
});

