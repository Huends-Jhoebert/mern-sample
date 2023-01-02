import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowToast from "./components/Toast";
import { register, reset } from "./features/auth/authSlice";

import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
      <ShowToast />
    </>
  );
}

export default App;
