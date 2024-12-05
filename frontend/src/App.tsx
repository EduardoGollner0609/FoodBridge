import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import IntroductionPage from './routes/IntroductionPage'
import HomePage from './routes/IntroductionPage/HomePage'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroductionPage />} >
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
