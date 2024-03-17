import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import UsersCard from "./components/users/UsersCard";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={[<Navbar />, <Profile />]} />
            {/* <Route path="/" element={<Dashboard />} /> */}
            {/* <Route path="/profile" element={<Profile />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App