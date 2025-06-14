
const emojis = ["😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊"];

interface EmojiPickerProps {
  onSelect: (emoji: string) => void;
  onClose: () => void;
}

export function EmojiPicker({ onSelect, onClose }: EmojiPickerProps) {
  return (
<div className="absolute z-20 mt-1 w-48 bg-white border border-gray-300 rounded-lg shadow-md p-3 flex flex-wrap gap-2 right-0">
  {emojis.map((emoji) => (
    <button
      key={emoji}
      type="button"
      className="text-2xl hover:bg-gray-100 rounded-md p-1 transition-colors duration-150"
      onClick={() => {
        onSelect(emoji);
        onClose();
      }}
      aria-label={`Select emoji ${emoji}`}
    >
      {emoji}
    </button>
  ))}
</div>

  );
}
