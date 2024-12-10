import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import IntroductionPage from './routes/IntroductionPage'
import HomePage from './routes/IntroductionPage/HomePage'
import LoginPage from './routes/IntroductionPage/LoginPage'
import RegisterPage from './routes/IntroductionPage/RegisterPage'
import AboutPage from './routes/IntroductionPage/AboutPage'
import TalkToUsPage from './routes/IntroductionPage/TalkToUsPage'
import HomeCommunityPage from './routes/CommunityPage/HomeCommunityPage'
import CommunityPage from './routes/CommunityPage'
import DonationRegisterPage from './routes/CommunityPage/DonationRegisterPage'



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

        <Route path="/community" element={<CommunityPage />} >
          <Route index element={<Navigate to="/community/home" />} />
          <Route path="/community/home" element={<HomeCommunityPage />} />
          <Route path="/community/donation-register" element={<DonationRegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
