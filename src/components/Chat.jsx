
import React, { useEffect, useState } from 'react';
import { saveMessages, loadMessages } from '../utils/storage';
import '../styles/style.css';

const Chat = ({ chatId = 'default' }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const savedMessages = loadMessages(chatId);
    setMessages(savedMessages);
  }, [chatId]);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { text: input, timestamp: Date.now() }];
    setMessages(newMessages);
    saveMessages(chatId, newMessages);
    setInput('');
  };

  return (
    <div className="chat">
      <div className="chat-history">
        {messages.map((msg, idx) => (
          <div key={idx} className="chat-message">
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
