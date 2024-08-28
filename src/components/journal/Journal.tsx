"use client";

import { useState } from "react";
import InputJournal from "../journal/ui/InputJournal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const journal = () => {
    const [value, setValue] = useState<string>("Zanotuj swoje myśli tutaj...");
    const [entries, setEntries] = useState<
        { text: string; date: Date | null }[]
    >([]);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

    const handleTyping = (inputValue: string) => {
        setValue(inputValue);
    };

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === "Enter" && value.trim() !== "") {
            setEntries([...entries, { text: value, date: selectedDate }]);
            setValue(""); // Resetowanie wartości po dodaniu wpisu
        }
    };
    const handleDateClick = () => {
        setShowDatePicker(!showDatePicker);
    };

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
        console.log(date);

        setShowDatePicker(false); // Zamknij popup po wybraniu daty
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
            <section className="col-span-12 border-2 border-gray rounded-[24px] p-[24px] bg-white shadow-box w-fit max-h-[250px] overflow-y-auto">
                <div className="flex justify-between w-full mb-6">
                    <div className="flex gap-2.5">
                        <img src="../icons/journal-alt.svg" />
                        <span>Dziennik</span>
                    </div>
                    <img
                        className="cursor-pointer"
                        src="../icons/more-options.svg"
                    />
                </div>
                <div className="overflow-hidden">
                    <InputJournal
                        inputText={value}
                        isTyping={handleTyping}
                        onKeyPress={handleKeyPress}
                        onClick={handleDateClick} // Dodaj obsługę kliknięcia
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
                <div className="mt-4">
                    {entries.map((entry, index) => (
                        <div
                            key={index}
                            className="border-b border-gray-300 py-1 flex items-center"
                        >
                            <p className="flex-grow">{entry.text}</p>
                            {entry.date && (
                                <span className="ml-4 text-gray-500 text-sm">
                                    {formatDate(entry.date)}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default journal;
