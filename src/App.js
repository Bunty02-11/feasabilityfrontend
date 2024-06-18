import React from 'react';
import Main from './Component/Home/Main';
import { ThemeProvider } from './Darkmode/ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  HashRouter, Routes, Route, } from "react-router-dom";
import LoginForm from './Component/Signin/Login';
import Register from './Component/Register/Register';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './Component/Layout/Footer/Footer';
import Feasibility from './feasibility/feasibility';
import Pdf2 from './feasibility/Renderpdf/Pdf2';
import DownloadPdf from './feasibility/Renderpdf/DownloadPdf';
import { SessionProvider } from './Context';
import ProtectedRoute from './ProtectedRoute';

function AppContent() {
  // const location = useLocation();
  // const noSidebarRoutes = ['/login', '/register', '/'];

  // const showSidebar = !noSidebarRoutes.includes(location.pathname);

  return (
    <ThemeProvider>
      {/* <DarkMode /> */}
      <Container fluid>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
          <Route exact path ="/feasibility" element={<ProtectedRoute>
            <Feasibility />
          </ProtectedRoute>}/>
          <Route path="/table" element={<ProtectedRoute><DownloadPdf/></ProtectedRoute>} />
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
