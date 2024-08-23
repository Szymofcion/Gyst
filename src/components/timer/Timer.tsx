"use client";

import { useEffect, useState, useRef } from "react";
import ButtonTimer from "./ui/ButtonTimer";

const Timer: React.FC = () => {
    const [sec, setSec] = useState<number>(0);
    const [min, setMin] = useState<number>(0);
    const [hour, setHour] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const updateTimer = () => {
        setSec((prevSec) => {
            if (prevSec + 1 === 60) {
                setMin((prevMin) => {
                    if (prevMin + 1 === 60) {
                        setHour((prevHour) => prevHour + 1);
                        return 0;
                    }
                    return prevMin + 1;
                });
                return 0;
            }
            return prevSec + 1;
        });
    };

    const handleButtonClick = () => {
        if (isRunning) {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        } else {
            intervalRef.current = setInterval(updateTimer, 1000);
        }
        setIsRunning(!isRunning);
    };

    const handleSaveClick = () => {
        console.log("Save button clicked");
        // Add your save logic here
    };

    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return (
        <section className="col-span-2 flex flex-col items-center text-center border-2 border-gray rounded-[24px] p-[24px] bg-white shadow-box">
            <div className="flex justify-between w-full mb-6">
                <div className="flex gap-2.5">
                    <img
                        className="cursor-pointer"
                        src="../icons/alarm-clock.svg"
                    />
                    <span className="text-gray">Mierzenie czasu</span>
                </div>
                <img
                    className="cursor-pointer"
                    src="../icons/more-options.svg"
                />
            </div>
            <div className="mb-4 text-gray">
                <p className="mb-1">Czytanie książki</p>
                <p className="text-[40px] ">
                    <span>{hour.toString().padStart(2, "0")}</span>:
                    <span>{min.toString().padStart(2, "0")}</span>:
                    <span>{sec.toString().padStart(2, "0")}</span>
                </p>
            </div>
            <div className="flex space-x-4">
                <ButtonTimer
                    isRunning={isRunning}
                    onStartStopClick={handleButtonClick}
                    onSaveClick={handleSaveClick}
                />
            </div>
        </section>
    );
};

export default Timer;
