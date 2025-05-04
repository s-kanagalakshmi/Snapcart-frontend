import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../config'; // Firebase config
import { onAuthStateChanged } from 'firebase/auth';
import { signOut } from 'firebase/auth';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

    });

    return () => unsubscribe(); // Clean up the subscription on unmount
  }, []);
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };
  return (
    <AuthContext.Provider value={{ user,loading,logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
