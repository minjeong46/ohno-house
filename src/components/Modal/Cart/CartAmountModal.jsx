import { useDispatch } from "react-redux";
import { closeModal } from "../../../store/modalSlice";
import Modal from "../Base/Modal";
import { useState } from "react";
import { quantityChange } from "../../../store/userSlice";

const CartAmountModal = ({ product, quantity }) => {
    const [currentQuantity, setCurrentQuantity] = useState(quantity);
    const dispatch = useDispatch();

    const quantityOnChangeHandler = (e) => {
      const value = e.target.value;
      if (value === '' || /^\d+$/.test(value)) {
        setCurrentQuantity(value);
      }
    };

    const quantityChangeHandler = () => {
      const newQuantity = Number(currentQuantity);

      if (!isNaN(newQuantity) && newQuantity >= 1) {
        dispatch(quantityChange({ item: { product, quantity: newQuantity } }));
        dispatch(closeModal());
      } else {
        alert('수량은 1 이상의 숫자만 입력 가능합니다.');
      }
    };

    return (
        <Modal width={"max-w-[300px] w-full"} height={"h-fit"}>
            <div className="w-full p-4 flex justify-center">
                <span className="font-bold text-xl text-gray-800">
                    옵션수량을 입력해주세요
                </span>
            </div>
            <div className="mt-3 mb-4 mx-5">
                <input
                    type="number"
                    min={1}
                    max={9999}
                    value={currentQuantity}
                    onChange={quantityOnChangeHandler}
                    className="w-full py-2 px-2 h-[40px] border rounded-md"
                ></input>
            </div>
            <div className="py-4 px-4 flex">
                <button
                    className="h-[50px] border-md w-[calc(50%-5px)] mr-[5px] rounded-md border"
                    onClick={() => dispatch(closeModal())}
                >
                    취소
                </button>
                <button
                    onClick={quantityChangeHandler}
                    className="h-[50px] border-md w-[50%] bg-[#11A5FD] rounded-md text-white hover:bg-[#0198ED]"
                >
                    확인
                </button>
            </div>
        </Modal>
    );
};

export default CartAmountModal;
