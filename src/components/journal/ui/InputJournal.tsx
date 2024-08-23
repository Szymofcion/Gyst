import { InputProps } from "@/types/journal/inputTypes";
import { useState } from "react";
const inputJournal: React.FC<InputProps> = ({ isTyping, inputText }) => {
    return (
        <div>
            inputJournal
            <input
                type="text"
                value={inputText}
                // onClick={(e) => e.target.value}
                onChange={(e) => isTyping(e.target.value)}
            />
        </div>
    );
};

export default inputJournal;
