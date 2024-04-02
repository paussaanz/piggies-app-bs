import { Route, Routes } from "react-router-dom";
import './styles/fonts.css';
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
import ProfilePage from "./pages/ProfilePage";
import Footer from "./components/Footer";

function App() {
  const hiddenPaths = ['/messages'];


  return (
    <>
      <header className="sticky-top">
        <Navbar />
      </header>
      <main className={hiddenPaths.includes(location.pathname) ? "h-header" : ""}>
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
          <Route path="/profile" element={<ProtectedRoute><ProfilePage /> </ProtectedRoute>} />
        </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
