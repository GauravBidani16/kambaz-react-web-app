// import './App.css'
import { HashRouter, Routes, Route, Navigate } from 'react-router'
import Labs from './Labs'
import Kambaz from './Kambaz'

function App() {
  return (
    <>
      <HashRouter>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Kambaz" />} />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kambaz/*" element={<Kambaz />} />
          </Routes>
        </div>
      </HashRouter>

    </>
  )
}

export default App
