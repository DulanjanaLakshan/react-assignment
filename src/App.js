import Login from "./pages/Login/Login";
import { Routes, Route } from 'react-router-dom'
import SingUp from "./pages/SingUp/SingUp";
import Dashboard from "./pages/dashboard/Dashboard";


function App() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
