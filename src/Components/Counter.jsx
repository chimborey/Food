import React, { useEffect, useState } from 'react'

const Counter = ({target}) => {
      const [count, setCount] = useState(0);
      useEffect(()=>{
            if(target){
                  const increment = target/200;
                  const timer = setInterval(()=>{
                        setCount(preCount=>{
                              if(preCount<target){
                                    return Math.ceil(preCount + increment);
                              }
                              clearInterval(timer)
                              return target
                        });
                  },10);
                  return()=> clearInterval(timer);
            }
      }, [target])
  return (
    <div>{count}</div>
  )
}

export default Counter
