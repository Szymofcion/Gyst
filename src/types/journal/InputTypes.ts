export interface InputProps {
    isTyping: (text: string) => void;
    inputText: string;
    onKeyPress: (event: React.KeyboardEvent) => void;
    onClick?: () => void;
}
