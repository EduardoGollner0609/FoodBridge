import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import IntroductionPage from './routes/IntroductionPage'
import HomePage from './routes/IntroductionPage/HomePage'
import LoginPage from './routes/IntroductionPage/LoginPage'
import RegisterPage from './routes/IntroductionPage/RegisterPage'
import AboutPage from './routes/IntroductionPage/AboutPage'
import TalkToUsPage from './routes/IntroductionPage/TalkToUsPage'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroductionPage />} >
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contact" element={<TalkToUsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
