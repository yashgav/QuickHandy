import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    const storedUserData = localStorage.getItem('userData');
    return storedUserData
      ? JSON.parse(storedUserData)
      : {
          id: null,
          emailorphone: '',
          password: '',
          type: '',
          loginTime: null,
        };
  });

  useEffect(() => {
    const { loginTime } = userData;
    if (loginTime) {
      const currentTime = Date.now();
      const timeElapsed = currentTime - loginTime;
      const remainingTime = 600000 - timeElapsed; // 1 minute in milliseconds

      if (remainingTime > 0) {
        setTimeout(() => {
          logout();
          window.location.href = '/QuickHandy'; // Redirect to landing page
          alert('Session closed. Please log in again.');
        }, remainingTime);
      } else {
        window.location.href = '/QuickHandy'; // Redirect to landing page
        logout();
      }
    }
  }, [userData]);

  useEffect(() => {
    if (userData.id) {
      const currentTime = Date.now();
      setUserData((prevUserData) => ({
        ...prevUserData,
        loginTime: currentTime,
      }));
    }
  }, [userData.id]);

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

  const logout = () => {
    setUserData({
      id: null,
      emailorphone: '',
      password: '',
      type: '',
      loginTime: null,
    });
    localStorage.removeItem('userData');
  };

  return (
    <UserContext.Provider value={{ userData, setUserData, logout }}>
      {children}
    </UserContext.Provider>
  );
};
