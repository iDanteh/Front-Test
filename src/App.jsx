import Welcome from './pages/Welcome';
import Dashboard from './pages/dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Welcome/>}/>
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
