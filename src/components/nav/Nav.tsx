import Account from "./ui/Account";
import List from "./ui/List";
import Logo from "./ui/Logo";
import Settings from "./ui/Settings";
import Target from "./ui/Target";

const Nav: React.FC = () => {
    return (
        <aside className="flex flex-col py-10 bg-white h-full w-full items-center justify-between rounded-tr-[22px] rounded-br-[22px]">
            <div className="flex items-center flex-col w-full">
                <Logo />
                <Account />
                <Target />
                <List />
            </div>
            <Settings />
        </aside>
    );
};

export default Nav;
