'use client';

import React, { createContext, useContext } from 'react'

import { useEffect, useState } from "react";

interface JwtPayload {
  id: number;
  email: string;
}

interface SessionContextType {
  userId: number;
  setUserId: (id: number) => void;
  loggedIn: boolean;
  setLoggedIn: (id: boolean) => void;
  userName: string;
  setUserName: (id: string) => void;
  userRole: string;

}
const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionProvider = ({ children }: { children: React.ReactNode }) => {
    const [userId, setUserId] = useState(0);
    const [userName, setUserName] = useState('');
    const [userRole, setUserRole] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    console.log(userId)
    console.log(loggedIn)
    console.log(userName)

    useEffect(() => {

      async function fetchSession() {
        const res = await fetch('/api/session');
        const data = await res.json();

        if(data.loggedIn) {
          setUserId(data.user.id);
          setUserName(data.user.name)
          setUserRole(data.user.role)
          setLoggedIn(true);
        }
        else {
          setLoggedIn(false);
          setUserId(0);
          setUserName('');
          setUserRole('');
        }
      }
      fetchSession();
    }, []);
     

  return (
    <SessionContext.Provider value={{ userId, setUserId, loggedIn, setLoggedIn, userName, setUserName, userRole }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
};


