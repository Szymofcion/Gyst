"use client";

import { ButtonTimerProps } from "@/types/timer/ButtonsType";

const ButtonTimer: React.FC<ButtonTimerProps> = ({
    isRunning,
    onStartStopClick,
    onSaveClick,
}) => {
    return (
        <div className="flex space-x-4">
            <button
                onClick={onStartStopClick}
                className={`border-2 border-gray  px-6 py-2 rounded-xl font-semibold transition duration-300  ${
                    isRunning ? "opacity-100" : "opacity-50"
                }`}
            >
                {isRunning ? "Stop" : "Start"}
            </button>
            <button
                onClick={onSaveClick}
                className="text-white border-2 bg-blue border-blue px-6 py-2 rounded-xl font-semibold bg-blue-500 hover:bg-blue-600 transition duration-300 "
            >
                Save
            </button>
        </div>
    );
};

export default ButtonTimer;
