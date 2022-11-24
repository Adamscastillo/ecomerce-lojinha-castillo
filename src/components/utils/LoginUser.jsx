import React, { useEffect, useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function LoginUser() {
  const [navState, setNavState] = useState(false);

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);
  return (
    <>
    
      <div className="flex items-center justify-between nike-container">
        <div className="relative items-center justify-center ml-0 pl-0 py-1 gap-1 ">
          <div className=" flex items-center border-none outline-none active:scale-110 transition-all duration-300 relative">
            <Link to={"/login"} className=" flex items-center xsm:mr-6 sm:mr-2">
              <UserCircleIcon
                className={`icon-style ${
                  navState && "text-slate-900 transition-all duration-300"
                }`}
              />
              <p
                className={`text-1xl lg:text-xl md:text-1xl sm:text-[1rem]   font-semibold filter drop-shadow-sm${
                  navState && "filter brightness-0"
                } text-slate-200`}
              >
                login
              </p>
            </Link>
          </div>
        </div>
      </div>
 
    </>
   
  );
}
