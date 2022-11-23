import React, { useEffect, useState } from "react";

import { userById } from "../../services/api";
import logo from "../../assets/logo.webp";

import { deleteUSer } from "../../services/api";







export default function DadosUser() {

  //guarda o estado da reposta
  const [dadosUser, setDadosUser] = useState('');

  // pega usuario logado pela ID e TOKEN para poder fazer alteracoes
  //useefect para ser redencizado apenas uma vez
  useEffect(() => {
    userById(`/v1/user/${localStorage.getItem("userId")}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((response) => {

        setDadosUser(response.data.user)


      })
  }, []);

  function UserDelete() {

    deleteUSer(`/v1/user/${localStorage.getItem("userId")}`, {
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    })
      .then((response) => {

        localStorage.clear();
        alert("usario deletado");
        window.location.reload() 

      });

  }


  return (
    <>

      <div className="nike-container bg-theme flex min-h-full items-center justify-center py-10 px-4 h-[130vh] lg:h-[125vh] md:h-[95vh] sm:h-[110vh] w-auto">
        <div className="w-full max-w-md mb-10 space-y-2 " >
          <div>
            <img
              className={`mx-auto h-40 w-auto mt-40 text-gray-900`}
              src={logo}
              alt="Your Company"
            />
          </div>

          <label className="relative font-semibold block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 mb-1 text-gray-100  focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" >
            Nome completo: {dadosUser.username}</label>

          <label className="relative font-semibold block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 mb-1 text-gray-100  focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" >
            Email:{dadosUser.email}</label>

          <label className="relative font-semibold block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 mb-1 text-gray-100  focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
            CEP: {dadosUser.cep}</label>

          <label className="relative font-semibold block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 mb-1 text-gray-100  focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" >
            Endereço: {dadosUser.address}</label>

          <label className="relative font-semibold block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 mb-1 text-gray-100  focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" >
            N°: {dadosUser.number}</label>

          <label className="relative font-semibold block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 mb-1 text-gray-100  focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" >
            Bairro: {dadosUser.district}</label>

          <label className="relative font-semibold block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 mb-1 text-gray-100  focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" >
            Cidade: {dadosUser.city}</label>

          <label className="relative font-semibold block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-100  focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" >
            Estado: {dadosUser.UF}</label>


          <button className="relative opacity-100 flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 mb-10 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"> atualizar </button>
          <button
            onClick={UserDelete}
            type="button"
            className="relative opacity-100 flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 mb-10 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"> Deletar sua Conta </button>
        </div>

      </div>
    </>

  )

}


