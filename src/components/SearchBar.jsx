
import React, { useState } from "react";
import "../styles/style.css";
import { BiColor } from "react-icons/bi";

const SearchBar = ({ messages, setMessages }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      const updatedMessages = [...messages, { text: input }];
      setMessages(updatedMessages);
      setInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Ask me anything..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSend} >Send</button>
    </div>
  );
};

export default SearchBar;
