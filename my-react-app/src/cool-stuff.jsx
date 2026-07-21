import React, {useEffect} from 'react';
import { motion } from 'framer-motion'
import './index.css'

export default function Projects() {
  useEffect(() => {
    console.log("hi")
    async function hackatime() {
      const till = await fetch('https://hackatime.hackclub.com/api/summary?start=&from=&end=&to=&interval=all_time&range=&user_id=U0AARL70NG5&user=',{
      });
      //200 good 
      console.log(till.status)
      try{
        if(till.status === 200){
          const data = await till.json()// to array js bleh bleh
          console.log(data)
        }
      }catch(e){
        console.log(e)
      }
    }
    hackatime()
  }, [])
  return (
  <>
    <p> hey</p>
  </>
);
}
