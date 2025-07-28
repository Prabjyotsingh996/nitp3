
import React from "react";
import "../styles/style.css";

const ChatHistory = ({ history, onSelect }) => {
  return (
    <div className="chat-history">
      <h2>Chat History</h2>
      {history.length === 0 ? (
        <p>No previous chats</p>
      ) : (
        <ul>
          {history.map((chat, index) => (
            <li key={index} onClick={() => onSelect(index)}>
              Chat {index + 1}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ChatHistory;
