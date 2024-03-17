import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <div>
      <div className="container mx-auto">
<<<<<<< HEAD
        <Navbar />
        <UsersCard />
=======
>>>>>>> e5c5c96498fad1bd9d2bf9d81ecac3306f2b55ba
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
