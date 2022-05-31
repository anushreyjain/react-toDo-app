import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Todo from './Components/Todo/Todo'
import Confirm from './Components/Confirm/Confirm'

const App = () => {
  

  return (
    <div>

    <Routes>
      <Route path='/' element={<Todo />} />
      <Route path='/confirm/:id' element={<Confirm />} />

    </Routes>
     

    </div>
  )
}

export default App