import { BoxProps } from "../../types/box/BoxTypes"; // Ścieżka do pliku z typami

const Box: React.FC<BoxProps> = () => {
    return (
        <section className="col-span-4 border-2 border-gray w-fit rounded-[24px] p-[24px] bg-white shadow-box">
            <div className="grid grid-cols-[3fr_1fr] pb-[69px] gap-8">
                <div>
                    <p className="">Cześć Beata! blblblbl</p>
                    <p>
                        Dziś zaczynam nowe życie. Powitam ten dzień z miłością w
                        sercu.
                    </p>
                </div>
                <div>
                    <img src="path/to/image.jpg" alt="Opis obrazka" />
                    <p>-Og Mandino</p>
                </div>
            </div>
            <button className="text-gray-500 font-sans text-sm font-medium leading-normal tracking-tight rounded-[12px] border-2 border-gray px-[23px] py-[6px]">
                Dodaj nowy cel +
            </button>
        </section>
    );
};

export default Box;
