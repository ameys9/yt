
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Leftnavelement } from "./leftnavelement";
import {  category } from "../utils/constants";
import { Context } from "../context/contextApi";

export const Leftnav = () => {
    const {categories, setcategories ,menu} = useContext(Context);

    const clickHandler = (name, type) => {
        switch (type) {
            case "category":
                return setcategories(name);
            case "home":
                return setcategories(name);
            case "menu":
                return false;
            default:
                break;
        }
    };

  return (
    <div className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all 
     ${menu ? "translate-x-0" : ""}`}>
    <div className="flex px-5 flex-col">
        {category.map((item)=>{
            return(
                <React.Fragment key={item.name}>
                    <Leftnavelement 
                    text={item.type === "home" ? "Home" : item.name}
                    icon={item.icon}
                    action={()=>{
                        clickHandler(item.name, item.type);

                    }}
                    className={`${
                        categories === item.name
                            ? "bg-black/[0.15]"
                            : ""
                    }`}
                    />
                    {item.divider && (
                        <hr className="my-5 border-white/[0.2]" />
                    )}
                </React.Fragment>
            );

        })}
        <hr className="my-5 border-white/[0.2]" />
    </div>
    </div>
  )
}
