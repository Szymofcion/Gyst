import Image from "next/image";
import Box from "@/components/progress/Box";
import Timer from "@/components/timer/Timer";
import Journal from "@/components/journal/Journal";
import Nav from "@/components/nav/Nav";

export default function Home() {
    return (
        <main className="bg-main h-lvh flex ">
            <div className="w-[150px]">
                <Nav />
            </div>
            <div className=" w-full h-full rounded-[32px] p-[26px] mb-[36px]">
                <div>
                    <img
                        className="w-fit m-auto"
                        src="../icons/subscription.svg"
                    />
                </div>
                <div className="grid grid-cols-12 gap-[30px] p-[26px]">
                    <Box />
                    <Timer />
                    <Journal />
                </div>
            </div>
        </main>
    );
}
