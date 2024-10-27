const List: React.FC = () => {
    return (
        <nav className=" w-full">
            <ul className="flex justify-between	flex-col  items-center gap-[43px] ">
                <li className="w-full">
                    <a className="w-full">
                        <img
                            className="w-fit m-auto"
                            src="../icons/comment-info.svg"
                        />
                    </a>
                </li>
                <li className="w-full active-radius">
                    <a className="active">
                        <img
                            className="w-fit m-auto"
                            src="../icons/house-chimney.svg"
                        />
                    </a>
                </li>
                <li className="w-full">
                    <a className="w-full">
                        <img
                            className="w-fit m-auto"
                            src="../icons/chart-simple.svg"
                        />
                    </a>
                </li>
                <li className="w-full">
                    <a className="w-full">
                        <img
                            className="w-fit m-auto"
                            src="../icons/calendar.svg"
                        />
                    </a>
                </li>
                <li className="w-full">
                    <a className="w-full">
                        <img
                            className="w-fit m-auto"
                            src="../icons/alarm-clock-blue.svg"
                        />
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default List;
