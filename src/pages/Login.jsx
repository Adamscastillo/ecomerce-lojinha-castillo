import React from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import logo from "../assets/logo.webp";

import { createUser } from "../services/api";

import { toast } from "react-hot-toast";
import Home  from "../pages/Home"



export default function Login() {

  const { register, getValues } = useForm();

  //função que manupula os que é recebido
  async function handleDados() {
    //pegar dos valores do imput
    const dados = getValues();
    const response = await createUser.post("/v1/user/auth", dados)
      .then((response) => {
        //salva no localstorage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.user._id);

        toast(response.data.message);

      })
      .catch(error => toast(error.message));
  }

  return (
    <>
      <div className="bg-theme flex min-h-full items-center justify-center py-12 px-4 h-[95vh] lg:h-[90vh] md:h-[95vh] sm:h-[100vh] w-auto">
        <div className="w-full max-w-md mb-12 space-y-8 ">
          <div>
            <img
              className={`mx-auto h-20 w-auto mt-40 text-gray-900`}
              src={logo}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-100">
              Faça login em sua conta
            </h2>
            <p className="mt-2 text-center text-sm text-gray-100">
              Ou{" "}
              <a
                href="#"
                className="font-extrabold text-lg text-indigo-900 hover:text-indigo-200"
              >
                <Link to={"/signup"}>Cadastre-se</Link>
              </a>
            </p>
          </div>

          <form className="mt-8 space-y-6" >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  {...register("email")}
                  type="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 mb-1 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Endereço Email"
                />
              </div>
              <div>
                <label htmlFor="Senha" className="sr-only">
                  Senha
                </label>

                <input
                  {...register("password")}
                  type="password"
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
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Esqueceu sua senha?
                </a>
              </div>
            </div>
            {/* button de submit */}
            <div>
              <button
                onClick={async (dados) => {
                  await handleDados(dados);
                  window.location.assign("/")
                }}
                type="button"
                className="relative opacity-100 flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
