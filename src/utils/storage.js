
// src/utils/storage.js

export const saveMessages = (chatId, messages) => {
  localStorage.setItem(`chat_${chatId}`, JSON.stringify(messages));
};

export const loadMessages = (chatId) => {
  const saved = localStorage.getItem(`chat_${chatId}`);
  return saved ? JSON.parse(saved) : [];
};
