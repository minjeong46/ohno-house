import { useEffect } from "react";

export const useOutSideClick = (ref, handler) => {
    useEffect(() => {
        const OutSideClickHandler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                handler(event);
            }
        };
        document.addEventListener("mousedown", OutSideClickHandler);
        return () => {
            document.removeEventListener("mousedown", OutSideClickHandler);
        };
    }, [ref, handler]);
};
