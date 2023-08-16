import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";

import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextApi";
// import SuggestionVideoCard from "./SuggestionVideoCard";

export const Videodetail = () => {
  const [video ,setVideo] = useState();
  const [relatedvideo ,setRelatedvideo] = useState();
  const {id} = useParams();
  const {setloading} = useContext(Context);

  const fetchvideo = () =>{
    setloading(false);
    fetchdata(`video/details/?id=${id}`).then((res)=>{
      console.log(res);
    })
  }

  return (
    <div></div>
  )
}
