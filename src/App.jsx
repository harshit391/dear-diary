import React from 'react'
import Main from './Components/Home/Main'
import Login from './Components/Home/Login'
import { Routes, Route } from 'react-router-dom'
import Journal from './Components/Journal/JournalHome'
import MoodTracker from './Components/Journal/JournalEntry'
import Calendar from './Components/PeriodTracker/Calendar/Calendar'
import DayCounter from './Components/PeriodTracker/DayCounter/DayCounter'
import MonthCounter from './Components/PeriodTracker/MonthCounter/MonthCounter'
import Homepage from './Components/PeriodTracker/HomePage/Homepage'
import MarkedDates from './Components/PeriodTracker/HomePage/MarkedDates'
import Skin from './Components/SkinCare/Skin'
import Comb from './Components/SkinCare/Comb'
import Dry from './Components/SkinCare/Dry'
import Oily from './Components/SkinCare/Oily'
import Home from './Components/SkinCare/Home'
const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/journal' element={<Journal/>} />
      <Route path='/entry' element={<MoodTracker/>} />
      <Route path='/periodTracker' element={<Homepage/>} />
      <Route path='/calendar' element={<Calendar/>} />
      <Route path='/daycounter' element={<DayCounter/>} />
      <Route path='/monthcounter' element={<MonthCounter/>} />
      <Route path='/periodtracker' element={<Homepage/>} />
      <Route path='/markeddates' element={<MarkedDates/>} />
      <Route path='/skincare' element={<Home/>}/>
      <Route path='/skin' element={<Skin/>}/>
      <Route path='/oily' element={<Oily/>}/>
      <Route path='/comb' element={<Comb/>}/>
      <Route path='/dry' element={<Dry/>}/>
      </Routes>
    </div>
  )
}

export default App
