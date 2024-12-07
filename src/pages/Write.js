import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Write from './write/Write'

const Blogs = ({setIsAuth}) => {
  return (
    <>
    <Header/>
    <Write setIsAuth={setIsAuth}/>
    <Footer/>
    </>
  )
}

export default Blogs