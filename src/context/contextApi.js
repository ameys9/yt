import React,{createContext,useState,useEffect} from "react";

import {fetchdata} from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setloading] = useState(false);
    const [result, setresult] = useState([]);
    const [categories, setcategories] = useState("New");
    const [menu, setmenu] = useState(false);

    useEffect(()=>{
        fetchforcategories(categories);
    },[categories]);

    const fetchforcategories = (query) => {
        setloading(true);
        fetchdata(`search/?q=${query}`).then(( {contents} ) => {          
            setresult(contents);
            console.log(result);
            setloading(false);
        });
    };
 return (
    <Context.Provider value={{loading, setloading,result, setresult,categories, setcategories,menu, setmenu,}}>
        {props.children}
    </Context.Provider>
 )
}