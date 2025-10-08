import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../store/modalSlice";
import { removeSelectedItems } from "../../../store/userSlice";
import Modal from "../Base/Modal";

const RemoveSelectedConfirmModal = () => {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.user);
    const selectedCount = cart.filter((item) => item.isChecked).length;

    const handleConfirmRemove = () => {
        dispatch(removeSelectedItems());
        dispatch(closeModal());
    };

    const handleCancel = () => {
        dispatch(closeModal());
    };

    return (
        <Modal>
            <div className="w-[250px] mt-4 mx-5 text-center">
                <p className="text-sm text-gray-800 mb-2">
                    선택한 {selectedCount}개 상품을 삭제하시겠습니까?
                </p>
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
                    className={
                        "h-[50px] w-[50%] rounded-md text-white font-semibold bg-primary hover:bg-hoverPrimary"
                    }
                >
                    삭제
                </button>
            </div>
        </Modal>
    );
};

export default RemoveSelectedConfirmModal;
