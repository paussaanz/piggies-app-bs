import { Route, Routes, useLocation } from "react-router-dom";
import io from 'socket.io-client'
import './styles/fonts.css';
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import DashboardPage from "./pages/DashboardPage";
import SignUp from "./pages/SignUp";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import MessagesPage from "./pages/MessagesPage";
import ProjectsManagementPage from "./pages/ProjectsManagementPage";
import SchedulePage from "./pages/SchedulePage";
import SettingsPage from "./pages/SettingsPage";

const socket = io.connect("http://localhost:3000")
function App() {
  const webNavbar = () => {
    const location = useLocation();
    const hiddenPaths = ['/dashboard'];
  
    if (hiddenPaths.includes(location.pathname)) {
      return null;
    }
    return <Navbar />;
  };
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/id" element={<ProjectDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /> </ProtectedRoute>} />
        <Route path="/messages" element={<ProtectedRoute><MessagesPage /> </ProtectedRoute>} />
        <Route path="/projects-management" element={<ProtectedRoute><ProjectsManagementPage /> </ProtectedRoute>} />
        <Route path="/schedule" element={<ProtectedRoute><SchedulePage /> </ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><SettingsPage /> </ProtectedRoute>} />
      </Routes>
    </div>
  )
}

export default App
