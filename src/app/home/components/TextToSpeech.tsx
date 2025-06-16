// TextToSpeech.tsx
import React, { useState } from "react";
import { Button } from "react-day-picker";

const TextToSpeech = () => {
  const [text, setText] = useState("");

  const handleSpeak = () => {
    if (!text.trim()) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US"; // hoặc 'vi-VN' nếu muốn tiếng Việt
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập văn bản"
      />
      <Button onClick={() => handleSpeak()}>Speak</Button>
    </div>
  );
};

export default TextToSpeech;
