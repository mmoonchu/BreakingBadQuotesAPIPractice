import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Characters from './pages/Characters';
import Quote from './pages/Quote';
import Nav from './components/Nav';

function App(props) {
  return (
    <div>
        <Nav />
        <Routes>
            <Route path='/' element={<Main/>}/>
            {/* <Route path='/characters' element={<Characters/>}/> */}
            {/* <Route path='/quote/:symbol' element={<Quote/>}/> */}
        </Routes>
    </div>
  )
}

export default App