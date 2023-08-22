import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {Header} from "./components/Header"
import {Feed} from "./components/feed"
import {Searchresult} from "./components/searchresult"
import {Videodetail} from "./components/Videodetail"
import { AppContext } from "./context/contextApi";

function App() {
  return (
    
     < AppContext > 
       <BrowserRouter>
          <div className="text-3xl">
            <Header />
            <Routes>
              <Route path="/" element={<Feed />}/>
              
              <Route path="/searchResult/:searchQuery" element={<Searchresult />}
                        />
              <Route path="/video/:id" element={<Videodetail />} />
            </Routes>
          </div>
       </BrowserRouter>
     </AppContext>
     
  );
}

export default App;
