import { InputProps } from "@/types/journal/InputTypes";
import { useState } from "react";
const inputJournal: React.FC<InputProps> = ({
    isTyping,
    inputText,
    onKeyPress,
    onClick,
}) => {
    return (
        <div>
            inputJournal
            <input
                className="relative border-2 w-full p-2 rounded-md pl-4 bg-no-repeat bg-left bg-[url('/icons/pencil.svg')]"
                type="text"
                placeholder={inputText}
                // value={inputText}
                // onClick={(e) => e.target.value}
                onChange={(e) => isTyping(e.target.value)}
                onKeyDown={onKeyPress} // Zmieniono na onKeyDown
                onClick={onClick} // Obsługa kliknięcia, aby otworzyć kalendarz
            />
        </div>
    );
};

export default inputJournal;
