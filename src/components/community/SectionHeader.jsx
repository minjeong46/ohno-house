const SectionHeader = ({ title, subTitle }) => {
    return (
        <div className="flex justify-between items-center py-5">
            <div>
                <strong className="text-xl hover:text-[#aaa]">{title}</strong>
                {subTitle && <p className="text-sm font-light">{subTitle}</p>}
            </div>
            <div>
                <span className="font-bold text-[#11A5FD]">
                    <a href="/">더보기</a>
                </span>
            </div>
        </div>
    );
};

export default SectionHeader;
