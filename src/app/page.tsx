import Image from "next/image";
import Box from "@/components/progress/Box";
import Timer from "@/components/timer/Timer";
import Journal from "@/components/journal/Journal";

export default function Home() {
    return (
        <main className="bg-white h-lvh pt-[67px] pr-[20px] pb-[36px] pl-[90px] ">
            <div className="bg-light-blue  w-full h-full rounded-[32px] p-[26px]">
                <div className="grid grid-cols-12 gap-[30px] p-[26px]">
                    <Box />
                    <Timer />
                    <Journal />
                </div>
            </div>
        </main>
    );
}
