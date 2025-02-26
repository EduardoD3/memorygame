import { useState, useEffect } from "react";
import "./App.css";

const cardsArray = ["🐱", "🐶", "🐭", "🐹", "🦊", "🐻", "🐼", "🐷"];
const shuffledCards = [...cardsArray, ...cardsArray].sort(() => Math.random() - 0.5);

export default function MemoryGame() {
  const [cards, setCards] = useState(shuffledCards);
  const [flipped, setFlipped] = useState([]); 
  const [matched, setMatched] = useState([]);

  useEffect(() => {
    if (flipped.length === 2) {
      const [firstIndex, secondIndex] = flipped;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatched((prevMatched) => [...prevMatched, cards[firstIndex]]);
      }
      setTimeout(() => setFlipped([]), 1000);
    }
  }, [flipped, cards]);

  const handleClick = (index) => {
    if (!flipped.includes(index) && flipped.length < 2) {
      setFlipped((prevFlipped) => [...prevFlipped, index]);
    }
  };

  const isGameOver = matched.length === cardsArray.length;

  return (
    <div className="game-container">
      <h1>Jogo da Memória 🧠</h1>
      <div className="grid">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${flipped.includes(index) || matched.includes(card) ? "flipped" : ""}`}
            onClick={() => handleClick(index)}
          >
            {flipped.includes(index) || matched.includes(card) ? card : "❓"}
          </div>
        ))}
      </div>
      {isGameOver && <div className="victory-message">Você venceu! 🎉</div>}
    </div>
  );
}
