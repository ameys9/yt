import React from 'react';
import moment from "moment";

export const Videotime = ({time}) => {
    const length = moment()
    .startOf("day")
    .seconds(time)
    .format("H:mm:ss");
  return (
    <div className="absolute right-2 bottom-2 bg-black py-1 px-2 text-white text-xs round rounded-md">
        {length}
    </div>
  )
}

