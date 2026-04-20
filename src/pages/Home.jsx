import React from 'react'
import Navbar from './header/Navbar'
import Banner from '../components/banner/Banner'
import BookNow from '../components/booknow/BookNow'
import Condition from '../components/condition/Condition'
import Pillars from '../components/pillars/Pillars'
import Choose from '../components/choose/Choose'
import Facilities from '../components/facilities/Facilities'
import Care from '../components/care/Care'
import Center from '../components/center/Center'
import Experts from '../components/experts/Experts'
import Location from '../components/location/Location'
import Qna from '../components/qna/Qna'
import Footer from './footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <BookNow/>
      <Condition/>
      <Pillars/>
      <Choose/>
      <Facilities/>
      <Care/>
      <Center/>
      <Experts/>
      <Location/>
      <Qna/>
      <Footer/>
    </div>
  )
}

export default Home
