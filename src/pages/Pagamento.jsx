import React from "react";
import cardVisa from "../assets/card-visa-front.png";
import { useSelector } from "react-redux";
import { selectTotalAmount } from "../app/CartSlice.js";

const Pagamento = () => {
  const totalAmount = useSelector(selectTotalAmount);

  console.log();
  return (
    <div className="bg-theme flex min-h-full items-center justify-center py-12 px-2 h-[125vh] lg:h-[120vh] md:h-[95vh] sm:h-[100vh] w-auto ">
      <div className=" flex h-auto bg-white p-1 rounded-lg  max-w-3xl">
        <div>
          <img src={cardVisa} alt="" />
          <ul className="flex m-6">
            <li className="mx-2">
              <img
                className="w-20"
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/computop.png"
                alt=""
              />
            </li>
            <li className="mx-2">
              <img
                className="w-24"
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png"
                alt=""
              />
            </li>
            <li className="ml-5">
              <img
                className="w-7"
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png"
                alt=""
              />
            </li>
          </ul>
        </div>
        {/* imputs */}
        <div className="m-14">
          <p className="text-xl font-semibold">Detalhe do Pagamento</p>
          <div className="input_text mt-6 relative">
            <input
              type="text"
              className="h-12 pl-6 outline-none px-2 focus:border-blue-900 transition-all w-full border-b "
              placeholder="John Row"
            />
            <span className="absolute left-0 text-sm -top-4">
              Nome impresso no cartão
            </span>
            <i className="absolute left-2 top-4 text-gray-400 fa fa-user"></i>
          </div>
          <div className="input_text mt-8 relative">
            <input
              type="text"
              className="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b "
              placeholder="0000 0000 0000 0000"
              data-slots="0"
              data-accept="\d"
              size="19"
              maxLength="22"
            />
            <span className="absolute left-0 text-sm -top-4">Número do Cartão</span>
            <i className="absolute left-2 top-[14px] text-gray-400 text-sm fa fa-credit-card"></i>
          </div>
          <div className="mt-8 flex gap-5 ">
            <div className="input_text relative w-full">
              <input
                type="text"
                className="h-12 pl-2 outline-none px-2 focus:border-blue-900 transition-all w-full border-b "
                placeholder="mm/yyyy"
                data-slots="my"
                maxLength="6"
              />
              <span className="absolute left-0 text-sm -top-4">Vencimento</span>
              <i className="absolute left-2 top-4 text-gray-400 fa fa-calendar-o"></i>
            </div>
            <div className="input_text relative w-full">
              <input
                type="text"
                className="h-12 pl-4 outline-none px-2 focus:border-blue-900 transition-all w-full border-b "
                placeholder="000"
                data-slots="0"
                data-accept="\d"
                size="3"
                maxLength="3"
              />
              <span className="absolute left-0 text-sm -top-4">CVV</span>
              <i className="absolute left-2 top-4 text-gray-400 fa fa-lock"></i>
            </div>
          </div>
          <p className="text-lg text-center mt-4 text-gray-800 font-bold">
            Valor Total R$ {totalAmount}
          </p>
          <div className="flex justify-center mt-4">
            
            <button className="outline-none pay h-12 bg-orange-600 text-white mb-3 hover:bg-orange-700 rounded-lg w-1/2 cursor-pointer transition-all">
              Finalizar
            </button>
          </div>
        </div>
        </div>
      </div>
    

    /*  <div className="h-auto ">
      <div className="bg-theme flex min-h-full items-center justify-center py-12 px-4 h-[125vh] lg:h-[120vh] md:h-[95vh] sm:h-[100vh] w-auto">
   
        <div className=" flex h-[auto] w-[40vh] bg-white p-8 rounded-lg">
          <img src={cardVisa} alt="" />
          
          
          
      </div>
    </div>*/
  );
};

export default Pagamento;
