import React from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";

import { useForm } from "react-hook-form";
import { Link} from "react-router-dom";

import logo from "../assets/logo.webp";
import {createUser } from "../services/api";

//import { token } from "../ultis/token";
// preciso fazer requerimento de dentro da api

import { toast } from "react-hot-toast";





const Signup = () => {

  //preence os campos com as informacoes que vem do cep
  const { register, handleSubmit, setValue, setFocus, getValues } = useForm();

  //busca cep
  const apiCep = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setValue("address", data.logradouro);
        setValue("district", data.bairro);
        setValue("city", data.localidade);
        setValue("UF", data.uf);
        setFocus("number");
      });
  };
  // submit do CEP
  const onSubmit = (e) => {
   
  };

  //função que manupula os que é recebido
  
  function handleDados() {
    

    const dados = getValues();
    
    createUser.post("/v1/user", dados).then((response) => {
      
      
      toast(response.data.message)
      localStorage.setItem("token", response.data.token);
  
        
 
    });
    
  }


  return (
    <>
      <div className="bg-theme flex min-h-full items-center justify-center py-10 px-4 h-[120vh] lg:h-[90vh] md:h-[95vh] sm:h-[110vh] w-auto">
        <div className="w-full max-w-md mb-10 space-y-8 ">
          <div>
            <img
              className={`mx-auto h-20 w-auto mt-60 text-gray-900`}
              src={logo}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-100">
              Crie sua Conta
            </h2>
            <p className="mr-2 mx-1 text-center text-sm text-gray-100">
              Ou{" "}
              <a
                href=" "
                className="ml-1 font-extrabold text-lg text-indigo-900 hover:text-indigo-200"
              >
                <Link to={"/login"}>Faça Login</Link>
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="username" className="sr-only">
                  Nome
                </label>
                <input
                  {...register("username")}
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 mb-1 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Nome "
                />
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="cep" className="sr-only">
                  CEP
                </label>
                <input
                  {...register("cep")}
                  className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 mb-1 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  type="text"
                  required
                  placeholder="CEP"
                  maxLength="8"
                  onBlur={apiCep}
                />
              </form>
              <div className="flex">
                <label htmlFor="address" className="sr-only">
                  address
                </label>
                <input
                  {...register("address")}
                  type="text"
                  required
                  className="relative block w-80 appearance-none rounded-none border border-gray-300 px-3 py-2 mb-1 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Rua / Av / Trav"
                />
                <label htmlFor="number" className="sr-only">
                  number
                </label>
                <input
                  {...register("number")}
                  type="text"
                  required
                  className="relative block w-32 appearance-none rounded-none border border-gray-300 px-3 py-2 mb-1 ml-1 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Número"
                />
              </div>
              <div className="flex">
                <label htmlFor="district" className="sr-only">
                  district
                </label>
                <input
                  {...register("district")}
                  type="text"
                  required
                  className="relative block w-[11.5rem] lg:w-[10rem] md:w-[8.5rem] sm:w-[8rem] appearance-none rounded-none border border-gray-300 px-3 py-2 mb-1 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Bairro"
                />

                <label htmlFor="city" className="sr-only">
                  city
                </label>
                <input
                  {...register("city")}
                  type="text"
                  required
                  className="relative block w-[8rem] lg:w-[9rem] md:w-[6.5rem] sm:w-[8rem] appearance-none rounded-none border border-gray-300 px-3 py-2 mb-1 ml-1 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Cidade"
                />
                <label htmlFor="UF" className="sr-only">
                  UF
                </label>
                <input
                  {...register("UF")}
                  type="text"
                  required
                  className="relative block w-[8rem] lg:w-[8.5rem] md:w-[6rem] sm:w-[5rem] appearance-none rounded-none border border-gray-300 px-3 py-2 mb-1 ml-1 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="UF"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  {...register("email")}
                  type="email"
                  required
                  className="relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 mb-1 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  senha
                </label>
                <input
                  {...register("password")}
                  type="password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  lembre de mim
                </label>
              </div>

              <div className="text-sm">
                <a
                  href=" "
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Esqueceu sua senha?
                </a>
              </div>
            </div>

            <div>
              <button
                onClick={async (handleDados) =>
                  window.location.assign("/")
                }

                type="button"
                className="relative opacity-100 flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 mb-10 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Cadastrar
              </button>

            </div>

          </form>
                     
        </div>
      </div>
    </>
  );
};

export default Signup;
