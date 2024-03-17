import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
<<<<<<< HEAD
import UsersCard from "./components/users/UsersCard";

=======
>>>>>>> 2f77dc49d641c1ddf2822e8d24063b8174717219
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