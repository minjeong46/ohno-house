import ReactDOM from "react-dom";
import BackDrop from "./BackDrop";
import { closeModal } from "../../store/modalSlice";
import { useDispatch } from "react-redux";

const Modal = ({ children, width, height }) => {
    const dispatch = useDispatch();

    return ReactDOM.createPortal(
        <>
            <BackDrop />
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
