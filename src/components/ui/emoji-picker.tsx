import { useState } from "react";

const emojis = [
  "😀",
  "😁",
  "😂",
  "🤣",
  "😃",
  "😄",
  "😅",
  "😆",
  "😉",
  "😊",
  "😋",
  "😎",
  "😍",
  "😘",
  "😗",
  "😙",
  "😚",
  "😇",
  "😐",
  "😑",
  "😶",
  "😏",
  "😒",
  "🙄",
  "😬",
  "😮",
  "😯",
  "😲",
  "😳",
  "😵",
  "😡",
  "😠",
  "😤",
  "😣",
  "😖",
  "😫",
  "😩",
  "😨",
  "😰",
  "😱",
  "😳",
  "😵",
  "😷",
  "🤒",
  "🤕",
  "🤢",
  "🤮",
  "🤧",
  "😇",
  "🥳",
];

export function EmojiPicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (emoji: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleEmojiClick = (emoji: string) => {
    onChange(emoji);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="border p-2 rounded">
        {value} {isOpen ? "▲" : "▼"}
      </button>
      {isOpen && (
        <div className="absolute bg-white border rounded shadow-lg mt-1">
          {emojis.map((emoji) => (
            <button
              key={emoji}
              onClick={() => handleEmojiClick(emoji)}
              className="p-2 hover:bg-gray-200"
            >
              {emoji}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
