import { NavLink } from "react-router-dom";

const TabNav = ({ tabList }) => {
    return (
        <div className="flex">
            {tabList.map((tab, index) => {
                return (
                    <div
                        className="flex items-center mx-1 relative"
                        key={`${index}-${tab.name}`}
                    >
                        <NavLink
                            to={
                                tab.path.indexOf("/none") !== -1
                                    ? `${tab.path}/${index}`
                                    : tab.path
                            }
                            end
                            className={({ isActive }) =>
                                `py-3 px-[6px] hover:text-[#11A5FD] ${
                                    isActive
                                        ? "text-[#11A5FD] before:absolute before:w-full before:h-[2px] before:bg-[#11A5FD] before:bottom-0 before:right-0"
                                        : "text-gray-700"
                                }`
                            }
                        >
                            <span className="text-[16px] font-bold leading-5">
                                {tab.name}
                            </span>
                        </NavLink>
                    </div>
                );
            })}
        </div>
    );
};

export default TabNav;
