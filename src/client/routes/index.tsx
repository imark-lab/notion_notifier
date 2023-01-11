import { Routes, Route } from 'react-router-dom';
import Notifier from '../features/Notifier'

export default function AppRoutes(){
  return(
    <Routes>
      <Route path='/' element={<Notifier/>}/>
    </Routes>
  )
}