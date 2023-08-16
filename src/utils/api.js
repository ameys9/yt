import axios from "axios";

const urldefault = "https://youtube138.p.rapidapi.com";

const options = {
    
    
    params: {
      
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': 'b012a2c831msh1628e808acfaf22p18c78bjsn08bbe95c2dfc',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
    }
  };

 export const fetchdata = async (url) =>{
    const {data} = await axios.get(`${urldefault}/${url}` , options);
    return data;
 }