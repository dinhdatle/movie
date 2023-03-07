import { useState,useEffect } from 'react'
import {fetchDataFromApi} from "./utils/api"
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfigrtation } from './store/homeSlice'

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import Details from "./pages/details/Details"
import SearchResult from "./pages/searchResults/SearchResult"
import Explore from "./pages/explore/Explore"
import PageNotFound from "./pages/404/PageNotFound"
import {BrowserRouter,Route,Routes} from "react-router-dom"

function App() {
  const dispatch = useDispatch()
  const {url} = useSelector((state)=> state.home)

  useEffect(()=>{
    fetchApiConfig()
  },[])

  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration').then((res)=> {
      console.log(res);

      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original"
      }

      dispatch(getApiConfigrtation(url));

    })
  }
  
  return (
    
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path='/search/:query' element={<Explore />}></Route>
        <Route path="*"  element={<PageNotFound />}/>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
   
  )
}

export default App
