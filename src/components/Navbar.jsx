import React, { useEffect, useState } from "react";
import LoginUser from "./utils/LoginUser.jsx";
import { LoginOnOff } from "./Main.js";
import { useDispatch, useSelector } from "react-redux";
import { selectTotalQTY, setOpenCart } from "../app/CartSlice.js";
import { Link } from "react-router-dom";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  
  IdentificationIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.webp";


const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const dispatch = useDispatch();
  const totalQTY = useSelector(selectTotalQTY);

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  const [login, setLogin] = useState(false);

  //importa do token do localstorrage
  useEffect(() => {

    setLogin(localStorage.getItem("token"))

  }, [localStorage.getItem("token")])

  // muda a cor do nav bar quando acontece o scroll
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  // dropdown
  const [showOptions, setShowoptions] = useState(false);
  
  const handleClick = () => {
    setShowoptions(!showOptions);
  };

  // funcao delete e sair

  function handleEnd() {

    localStorage.clear();
    alert("saiu")
    //window.location.assign("/")

  }

  
  return (
    <>
      <header
        className={
          !navState
            ? "absolute top-7 left-0 right-0 opacity-100 z-50"
            : "fixed top-0 left-0 right-0 h-[10vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme"
        }
      >
        {/* import do logo */}
        <nav className="flex items-center justify-between nike-container">
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo/img"
              className={`w-16 mr-4 h-20${navState && "filter brightness-0"}`}
            />
            <button
              className={`text-3xl lg:text-2xl md:text-xl sm:text-opacity-0 xsm:text-x1 font-extrabold filter drop-shadow-sm${navState && "filter brightness-0"
                } text-slate-200`}
            >
              <Link to="/">Lojinha Castillo</Link>
            </button>
          </div>

          {/* importes dos icones do navbar */}
          <ul className="flex items-center justify-center px-1 py-0 gap-0 sm:ml-[-2rem]">
            <li className="grid items-center px-2">
              <MagnifyingGlassIcon
                className={`icon-style ${navState &&
                  "text-slate-900 transition-all duration-300 sm:opacity-0"
                  }`}
              />
            </li>
            <li className="grid items-center px-2">
              <HeartIcon
                className={`icon-style ${navState && "text-slate-900 transition-all duration-300"
                  }`}
              />
            </li>
            <li className="grid items-center px-2">
              <button
                type="button"
                onClick={onCartToggle}
                className="border-none outline-none active:scale-110 transition-all duration-300 relative"
              >
                <ShoppingBagIcon
                  className={`icon-style ${navState && "text-slate-900 transition-all duration-300"
                    }`}
                />
                <div
                  className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${navState
                      ? "bg-slate-900 text-slate-100 shadow-slate-900"
                      : "bg-slate-100 text-slate-900 shadow-slate-100"
                    }`}
                >
                  {totalQTY}
                </div>
              </button>
            </li>
            {/* menu cadastro */}
            <div className="flex items-center justify-center pl-6 py-1 gap-4 ">
              <div className=" flex items-center border-none outline-none active:scale-110 transition-all duration-300 relative">
                <Link
                  to={"/signup"}
                  className=" flex items-center xsm:mr-6 sm:mr-2"
                >
                  <IdentificationIcon
                    className={` icon-style ${navState && "text-slate-900 transition-all duration-300"
                      }`}
                  />
                  <p
                    className={`text-1xl lg:text-xl md:text-1xl sm:text-[1rem]   font-semibold filter drop-shadow-sm${navState && "filter brightness-0"
                      } text-slate-200`}
                  >
                    cadastro
                  </p>
                </Link>
              </div>
            </div>
                 {/* menu drop donw */}

              {login ?
                <LoginOnOff />
                :
                <LoginUser />
              }
         
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
