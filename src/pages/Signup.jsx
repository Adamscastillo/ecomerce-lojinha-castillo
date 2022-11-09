import React from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

import { api } from "../services/api";

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
 

  const onSubmit = (e) => {
    console.log(e);
  };

  //variaveis que recebem os elementos do input

  //função que manupula os que é recebido
  function handleDados() {
    const dados = getValues();
    console.log(dados);
    api.post("/v1/user", dados).then((response) => {
      console.log(response);
    });
  }

  return (
    <>
      <div className="bg-theme flex items-center justify-center py-12 px-8 lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto h-auto">
        <div className="w-full max-w-md mb-12 space-y-8 ">
          <div>
            <img
              className={`mx-auto h-12 w-auto mt-20 text-gray-900`}
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
                <label htmlFor="Nome" className="sr-only">
                  Nome
                </label>
                <input
                  {...register("nome")}
                  name="nome"
                  autoComplete="nome"
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
                  className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 mb-1 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  type="text"
                  required
                  placeholder="CEP"
                  {...register("cep")}
                  maxLength={8}
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
                  autoComplete="address"
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
                  autoComplete="numbe"
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
                  autoComplete="district"
                  required
                  className="relative block w-80 appearance-none rounded-none border border-gray-300 px-3 py-2 mb-1 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Bairro"
                />

                <label htmlFor="city" className="sr-only">
                  city
                </label>
                <input
                  {...register("city")}
                  type="text"
                  autoComplete="city"
                  required
                  className="relative block w-28 appearance-none rounded-none border border-gray-300 px-3 py-2 mb-1 ml-1 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Cidade"
                />
                <label htmlFor="UF" className="sr-only">
                  UF
                </label>
                <input
                  {...register("UF")}
                  type="text"
                  autoComplete="UF"
                  required
                  className="relative block w-14 appearance-none rounded-none border border-gray-300 px-3 py-2 mb-1 ml-1 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 mb-1 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="Senha" className="sr-only">
                  Senha
                </label>
                <input
                  {...register("senha")}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Senha"
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
                onClick={handleDados}
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
