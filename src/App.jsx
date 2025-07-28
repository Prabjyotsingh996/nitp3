import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Quotes from "./components/Quotes";
import SearchBar from "./components/SearchBar";
import ChatHistory from "./components/ChatHistory";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import "./styles/style.css";

// Home component without Navbar duplication
function Home({ darkMode, messages, setMessages, history, handleSelectChat }) {
  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
      <div className="main">
        <ChatHistory history={history} onSelect={handleSelectChat} />
        <div className="chat-container">
          <Header />
          <Quotes />
          <SearchBar messages={messages} setMessages={setMessages} />
        </div>
      </div>
    </div>
  );
}

// App wrapper with conditional Navbar
function AppWrapper() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const [messages, setMessages] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("chatMessages"));
    if (stored && Array.isArray(stored)) {
      setMessages(stored);
      setHistory([stored]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
    if (messages.length > 0) {
      setHistory((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = messages;
        return updated;
      });
    }
  }, [messages]);

  const handleSelectChat = (index) => {
    setMessages(history[index] || []);
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Hide Navbar on auth pages
  const hideNavbarOnRoutes = ["/signin", "/signup"];
  const showNavbar = !hideNavbarOnRoutes.includes(location.pathname);

  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
      {showNavbar && (
        <Navbar toggleDarkMode={handleToggleDarkMode} darkMode={darkMode} />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              darkMode={darkMode}
              messages={messages}
              setMessages={setMessages}
              history={history}
              handleSelectChat={handleSelectChat}
            />
          }
        />
        <Route path="/signin" element={<SignIn darkMode={darkMode} />} />
        <Route path="/signup" element={<SignUp darkMode={darkMode} />} />
      </Routes>
    </div>
  );
}

// Main App component with router
function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;