import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import IntroductionPage from './routes/HomePage/IntroductionPage'
import HomePage from './routes/HomePage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} >
          <Route index element={<IntroductionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
