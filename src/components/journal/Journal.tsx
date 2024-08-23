"use client";

import { useState } from "react";
import InputJournal from "../journal/ui/InputJournal";

const journal = () => {
    const [value, setValue] = useState<string>("Zanotuj swoje myśli tutaj...");

    const handleTyping = () => {
        setValue("");
    };

    return (
        <>
            <section className="col-span-12 border-2 border-gray rounded-[24px] p-[24px] bg-white shadow-box w-fit">
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
                    <InputJournal inputText={value} isTyping={handleTyping} />
                </div>
            </section>
        </>
    );
};

export default journal;
