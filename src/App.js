import React from 'react';
import Main from './Component/Home/Main';
import { ThemeProvider } from './Darkmode/ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  HashRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import LoginForm from './Component/Signin/Login';
import Register from './Component/Register/Register';
import Header from './Component/Layout/Header/Header';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './Component/Layout/Footer/Footer';
import Feasibility from './feasibility/feasibility';
import Pdf2 from './feasibility/Renderpdf/Pdf2';

function AppContent() {
  // const location = useLocation();
  // const noSidebarRoutes = ['/login', '/register', '/'];

  // const showSidebar = !noSidebarRoutes.includes(location.pathname);

  return (
    <ThemeProvider>
      {/* <DarkMode /> */}
      <Header />
      <Container fluid>
        
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<Register />} />
              <Route path="/feasibility" element={<Feasibility />} />
              <Route path="/table" element={<Pdf2/>} />
            </Routes>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;
