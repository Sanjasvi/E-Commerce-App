import React from 'react'
import{ useState,useEffect } from 'react'

export default function counter() {

    let[counter, setCounter]=useState(0);

    useEffect(()=>{
        let timer=setInterval(()=>{
            setCounter(counter+1);
            console.log(counter);
        },1000);

        return(
            ()=>{
                clearInterval(timer);
            }
        )

    })

  return (
    <div>
        <h1>{counter}</h1>
        <h2>💙</h2>
    </div>
  )
}
