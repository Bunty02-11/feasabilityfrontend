import React, { useContext } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import { SessionContext } from './Context';

const ProtectedRoute = ({ children }) => {
  const { sessionId } = useContext(SessionContext);
  console.log(sessionId)
  // const auth = 
  // return (
  //   <Routes>
  //   <Route
  //     {...rest}
  //     element={sessionId ? <Component  /> : <Navigate to="/login" />}
  //   />
  //   </Routes>
  // );/

  if(!sessionId){
    return <Navigate to="/login" />
  }else{
    return children
  }
};

export default ProtectedRoute;
