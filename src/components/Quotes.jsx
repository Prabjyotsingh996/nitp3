
import React from "react";
import "../styles/style.css";

const Quotes = () => {
  const quotes = [
    "“Achev khote che kuthe duur",
    "“Imagination is more important than knowledge.” – Albert Einstein",
    "“The best way to predict the future is to invent it.” – Alan Kay",
    "“Simplicity is the ultimate sophistication.” – Leonardo da Vinci",
    "“Stay hungry, stay foolish.” – Steve Jobs"
  ];

  return (
    <div className="quotes-marquee">
      <marquee behavior="scroll" direction="left" scrollamount="5">
        {quotes.map((quote, index) => (
          <span key={index} className="quote">{quote} &nbsp;&nbsp;&nbsp;</span>
        ))}
      </marquee>
    </div>
  );
};

export default Quotes;
