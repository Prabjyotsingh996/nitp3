import React from "react";
import "../styles/style.css";

const Header = () => {
  return (
    <div className="header text-center py-4">
      <img
        src="images/nit logo.png" // Ensure this path matches your public folder or image import
        alt="NIT Logo"
        className="mx-auto w-20 h-auto mb-2"
      />
      <h1 className="text-2xl font-semibold">English ↔ Kashmiri Translator</h1>
    </div>
  );
};

export default Header;
