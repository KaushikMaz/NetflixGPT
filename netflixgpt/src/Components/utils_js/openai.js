
// import OpenAI from 'openai';
// const API=process.env.REACT_APP_OPENAI_API


const { GoogleGenerativeAI } = require("@google/generative-ai");
export const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API);



// export const openai = new OpenAI({
//   apiKey: API, 
//   dangerouslyAllowBrowser:true
// });

