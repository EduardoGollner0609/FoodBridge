import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import IntroductionPage from './routes/IntroductionPage'
import HomePage from './routes/IntroductionPage/HomePage'
import LoginPage from './routes/IntroductionPage/LoginPage'
import RegisterPage from './routes/IntroductionPage/RegisterPage'
import AboutPage from './routes/IntroductionPage/AboutPage'
import TalkToUsPage from './routes/IntroductionPage/TalkToUsPage'
import HomeCommunityPage from './routes/CommunityPage/HomeCommunityPage'
import CommunityPage from './routes/CommunityPage'
import UserDetailsPage from './routes/CommunityPage/UserDetailsPage'
import DonationRegisterPage from './routes/CommunityPage/DonationRegisterPage'
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { history } from "./utils/history";
import { PrivateRoute } from './components/PrivateRoute'
import { AccessTokenPayloadDTO } from './models/auth'
import { useEffect, useState } from 'react'
import { ContextToken } from './utils/context-token'
import * as authService from './services/auth-service';
import DonationDetailsPage from './routes/CommunityPage/DonationDetailsPage'


function App() {

  const [contextTokenPayload, setContextTokenPayload] = useState<AccessTokenPayloadDTO>();

  useEffect(() => {

    if (authService.isAuthenticated()) {
      const payload = authService.getAccessTokenPayload();
      setContextTokenPayload(payload);
    }
  }, []);

  return (
    <ContextToken.Provider
      value={{ contextTokenPayload, setContextTokenPayload }}
    >
      <HistoryRouter history={history}>
        <Routes>
          <Route path="/" element={<IntroductionPage />} >
            <Route index element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/contact" element={<TalkToUsPage />} />
          </Route>

          <Route path="/community" element={<PrivateRoute roles={["ROLE_USER"]}><CommunityPage /></PrivateRoute>}>
            <Route index element={<Navigate to="/community/home" />} />
            <Route path="/community/home" element={<HomeCommunityPage />} />
            <Route path="/community/donation/:donationId" element={<DonationDetailsPage />} />
            <Route path="/community/donation-register" element={<DonationRegisterPage />} />
            <Route path="/community/user-details" element={<UserDetailsPage />} />
          </Route>
        </Routes>
      </HistoryRouter>
    </ContextToken.Provider>
  )
}

export default App
