import React from 'react'
import Main from './Component/Home/Main'
import Login from './Component/Signin/Login'
import Register from './Component/Register/Register'
import Password from './Component/Passowrd/Password'
import Profile from './Component/Profile/Profile'
import Sidebar from './AdminPanel/Sidebar/Sidebar'
import Tenentstatement from './AdminPanel/FeasabilityForms/TenentStatemen'
import Stepper from './Stepper/Stepper'
import DarkMode from './Darkmode/Darkmode'
import { ThemeProvider } from './Darkmode/ThemeContext'
import AreaStatement1 from './AdminPanel/FeasabilityForms/AreaStatement1'
import StepFormContainer from './AdminPanel/Call/StepFormContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormPDFRenderer from './Pdf'


function App() {
  return (

    <ThemeProvider>
      <DarkMode/>
      {/* <FormPDFRenderer/> */}
      <StepFormContainer/>
    </ThemeProvider>
  )
}

export default App
