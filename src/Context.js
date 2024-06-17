import React, { createContext, useState } from 'react';

const SessionContext = createContext();

const SessionProvider = ({ children }) => {
  const [sessionId, setSessionId] = useState(null);
console.log(sessionId)
  return (
    <SessionContext.Provider value={{ sessionId, setSessionId }}>
      {children}
    </SessionContext.Provider>
  );
};

export { SessionContext, SessionProvider };
