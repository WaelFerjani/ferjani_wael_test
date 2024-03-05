import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Route } from 'react-router-dom'
import { Routes } from 'react-router'
import Competitions from './Competitions'
import Home from './Home'
import NotFound from './NotFound'
import CompetitionsDetails from './CompetitionsDetails'
import AddCompetion from './AddCompetion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        
         <Route path="/competitions" element={<Competitions />} />
         <Route path="/CompetitionsDetails" element={<CompetitionsDetails />} />*

         <Route path="/AddCompetion" element={<AddCompetion />} />
         <Route path='*' exact={true} element={<NotFound /> } />



<Route path="/home" element={<Home />} />
<Route path="*/*" element={<NotFound />} />


      </Routes>

    </>
  );
}

export default App;