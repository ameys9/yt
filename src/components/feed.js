import React, { useContext, useEffect } from 'react'
import { Leftnav } from './leftnav'
import { Context } from '../context/contextApi'
import { Videocard } from './videocard'

export const Feed = () => {

  const {loading, result} = useContext(Context);

  useEffect(()=>{
  document.getElementById("root").classList.remove("custom-h")
  },[]);

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <Leftnav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!loading && result.map((item) => {
            if(item.type !== "video") return false;
            return(
              
              <Videocard 
               key={item?.video?.videoId}
               video={item?.video}
               />
            )
          })}
        </div>
      </div> 
    </div>
  )
}

