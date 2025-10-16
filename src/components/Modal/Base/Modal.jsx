import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import { closeModal } from "../../../store/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

const Modal = ({ children, width, height }) => {
    const isOpen = useSelector((state) => state.modal.isOpen);
    const dispatch = useDispatch();
    const location = useLocation();
    const prevPath = useRef(location.pathname);

    useEffect(() => {
        if (isOpen && prevPath.current !== location.pathname) {
            dispatch(closeModal());
        }
        prevPath.current = location.pathname;
    }, [location.pathname, dispatch, isOpen]);

    return ReactDOM.createPortal(
        <>
            <Backdrop />
            <div
                className="fixed w-full h-full inset-0 flex items-center justify-center z-50"
                onClick={() => dispatch(closeModal())}
            >
                <div
                    className={`${width} ${height} bg-white border rounded-md relative z-50`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </div>
            </div>
        </>,
        document.getElementById("modal-root")
    );
};

export default Modal;
