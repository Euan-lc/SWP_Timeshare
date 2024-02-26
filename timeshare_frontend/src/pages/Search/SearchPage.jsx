import React from 'react'
import Header from '../../components/header/Header.jsx'
import SearchList from '../../components/SearchList/SearchList.jsx'
import FilterBar from '../../components/FilterBar/FilterBar.jsx'
import Footer from "../../components/Footer.js";
import Navbar from '../../components/navbar/Navbar.jsx';

export default function SearchPage() {
  return (
    <>
        <div>
          <Navbar/>
          {/* <Header/> */}
          <div>
            <SearchList/>
            <FilterBar/>
          </div>
          {/* <Footer/> */}
        </div>
    </>
  )
}
