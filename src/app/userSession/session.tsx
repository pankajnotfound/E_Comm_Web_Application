'use client';

import React, { createContext, useContext } from 'react'

import { useEffect, useState } from "react";

interface SessionContextType {
  userId: number;
  setUserId: (id: number) => void;
  loggedIn: boolean;
  setLoggedIn: (id: boolean) => void;
  userName: string;
  setUserName: (id: string) => void;

}
const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionProvider = ({ children }: { children: React.ReactNode }) => {
    const [userId, setUserId] = useState(0);
    const [userName, setUserName] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    console.log(userId)
    console.log(loggedIn)
    console.log(userName)

  return (
    <SessionContext.Provider value={{ userId, setUserId, loggedIn, setLoggedIn, userName, setUserName }}>
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


