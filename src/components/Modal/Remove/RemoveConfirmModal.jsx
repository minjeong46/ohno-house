import { useDispatch } from "react-redux";
import { closeModal } from "../../../store/modalSlice";
import { removeToCart } from "../../../store/userSlice";
import Modal from "../Base/Modal";

const RemoveConfirmModal = ({ product, quantity }) => {
    const dispatch = useDispatch();

    const handleConfirmRemove = () => {
        const itemToRemove = { product: product, quantity: quantity };

        dispatch(removeToCart({ item: itemToRemove }));

        dispatch(closeModal());
    };

    const handleCancel = () => {
        dispatch(closeModal());
    };

    return (
        <Modal>
            <div className="w-[300px] h-auto p-2 flex justify-center pt-4">
                <span className="text-sm text-gray-800">
                    상품을 삭제하시겠어요?
                </span>
            </div>

            <div className="py-4 px-4 flex">
                <button
                    className="h-[50px] w-[calc(50%-5px)] mr-[5px] rounded-md border text-gray-700 hover:bg-gray-100 font-semibold"
                    onClick={handleCancel}
                >
                    취소
                </button>
                <button
                    onClick={handleConfirmRemove}
                    className="h-[50px] w-[50%] bg-primary rounded-md text-white hover:bg-hoverPrimary font-semibold"
                >
                    삭제
                </button>
            </div>
        </Modal>
    );
};

export default RemoveConfirmModal;
