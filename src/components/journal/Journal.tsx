"use client";

import { useEffect, useState } from "react";
import InputJournal from "../journal/ui/InputJournal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../app/globals.css";

const Journal = () => {
    const [value, setValue] = useState<string>("Zanotuj swoje myśli tutaj...");
    const [entries, setEntries] = useState<
        { text: string; date: Date | null }[]
    >([]);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

    useEffect(() => {
        const savedEntries = localStorage.getItem("journalEntries");
        if (savedEntries) {
            const parsedEntries = JSON.parse(savedEntries).map(
                (entry: { text: string; date: string | null }) => ({
                    text: entry.text,
                    date: entry.date ? new Date(entry.date) : null,
                })
            );
            setEntries(parsedEntries);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(
            "journalEntries",
            JSON.stringify(
                entries.map((entry) => ({
                    text: entry.text,
                    date: entry.date ? entry.date.toISOString() : null,
                }))
            )
        );
    }, [entries]);

    const handleTyping = (inputValue: string) => {
        setValue(inputValue);
    };

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === "Enter" && value.trim() !== "") {
            setEntries([
                ...entries,
                {
                    text: value,
                    date: selectedDate ? selectedDate : null,
                },
            ]);
            setValue("");
        }
    };

    const handleDateClick = () => {
        setShowDatePicker(!showDatePicker);
    };

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
        setShowDatePicker(false);
    };

    const formatDate = (date: Date | null) => {
        if (!date) return "";
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <>
            <section className=" col-span-3 inside-shadow  h-full">
                <div className="border-2 border-gray rounded-[24px] p-[24px] bg-white max-h-[250px] overflow-y-auto">
                    <div className="flex justify-between w-full mb-6">
                        <div className="flex gap-2.5">
                            <img
                                src="../icons/journal-alt.svg"
                                alt="Journal Icon"
                            />
                            <span>Dziennik</span>
                        </div>
                        <img
                            className="cursor-pointer"
                            src="../icons/more-options.svg"
                            alt="More Options Icon"
                        />
                    </div>
                    <div className="flex-grow">
                        <div className="relative">
                            <InputJournal
                                inputText={value}
                                isTyping={handleTyping}
                                onKeyPress={handleKeyPress}
                                onClick={handleDateClick}
                            />
                            {showDatePicker && (
                                <div className="absolute z-50">
                                    <DatePicker
                                        selected={selectedDate}
                                        onChange={handleDateChange}
                                        inline
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="mt-4 flex-grow">
                        {entries.map((entry, index) => (
                            <div
                                key={index}
                                className="relative border-b border-gray-300 flex items-end pb-1 mb-4 min-h-[80px] rounded-lg bg-[#F9F9FF] shadow-boxShadow"
                            >
                                <p className="flex-grow ml-4 mb-2">
                                    {entry.text}
                                </p>
                                {entry.date && (
                                    <span className="text-gray-500 text-sm absolute bottom-[40px] left-[16px]">
                                        {formatDate(entry.date)}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Journal;
