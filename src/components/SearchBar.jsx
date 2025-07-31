
import React, { useState, useRef, useEffect } from "react";
import { FiSend, FiEdit2, FiX, FiCheck, FiRotateCcw } from "react-icons/fi";
import "../styles/style.css";

const SearchBar = ({ messages, setMessages }) => {
  const [input, setInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);

  // Sample translation suggestions
  const translationSuggestions = [
    "Hello, how are you?",
    "What is the weather today?",
    "Can you help me with this?",
    "Translate this text",
    "How do you say this in English?"
  ];

  useEffect(() => {
    if (editingIndex !== null) {
      setEditText(messages[editingIndex]?.text || "");
    }
  }, [editingIndex, messages]);

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = {
        text: input,
        timestamp: Date.now(),
        type: "user",
        id: Date.now()
      };
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      setInput("");
      setSuggestions([]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (editingIndex !== null) {
        handleEditSave();
      } else {
        handleSend();
      }
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditText(messages[index]?.text || "");
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleEditSave = () => {
    if (editText.trim() && editingIndex !== null) {
      const updatedMessages = [...messages];
      updatedMessages[editingIndex] = {
        ...updatedMessages[editingIndex],
        text: editText,
        edited: true,
        editTimestamp: Date.now()
      };
      setMessages(updatedMessages);
      setEditingIndex(null);
      setEditText("");
    }
  };

  const handleEditCancel = () => {
    setEditingIndex(null);
    setEditText("");
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    setSuggestions([]);
    inputRef.current?.focus();
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    
    // Show suggestions based on input
    if (value.trim()) {
      const filtered = translationSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 3));
    } else {
      setSuggestions([]);
    }
  };

  const handleDeleteMessage = (index) => {
    const updatedMessages = messages.filter((_, i) => i !== index);
    setMessages(updatedMessages);
  };

  return (
    <div className="search-container">
      {/* Messages Display */}
      <div className="messages-display">
        {messages.map((message, index) => (
          <div key={message.id || index} className="message-item">
            {editingIndex === index ? (
              <div className="edit-mode">
                <input
                  ref={inputRef}
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="edit-input"
                  placeholder="Edit your message..."
                />
                <div className="edit-actions">
                  <button 
                    onClick={handleEditSave}
                    className="action-btn save-btn"
                    title="Save changes"
                  >
                    <FiCheck />
                  </button>
                  <button 
                    onClick={handleEditCancel}
                    className="action-btn cancel-btn"
                    title="Cancel edit"
                  >
                    <FiX />
                  </button>
                </div>
              </div>
            ) : (
              <div className="message-content">
                <div className="message-text">
                  {message.text}
                  {message.edited && (
                    <span className="edited-indicator"> (edited)</span>
                  )}
                </div>
                <div className="message-actions">
                  <button 
                    onClick={() => handleEdit(index)}
                    className="action-btn edit-btn"
                    title="Edit message"
                  >
                    <FiEdit2 />
                  </button>
                  <button 
                    onClick={() => handleDeleteMessage(index)}
                    className="action-btn delete-btn"
                    title="Delete message"
                  >
                    <FiX />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <div className="input-container">
          <input
            ref={inputRef}
            type="text"
            placeholder="Ask me anything or type to translate..."
            value={input}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            className="search-input"
          />
          <button 
            onClick={handleSend}
            className="send-btn"
            disabled={!input.trim()}
            title="Send message"
          >
            <FiSend />
          </button>
        </div>

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <div className="suggestions">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="suggestion-item"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}

        {/* Quick Actions */}
        <div className="quick-actions">
          <button 
            onClick={() => setInput("")}
            className="quick-btn"
            title="Clear input"
          >
            <FiRotateCcw />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
