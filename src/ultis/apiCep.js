
import { useForm } from "react-hook-form";

import React from 'react'

const apiCep = () => {

    const apiCepB = (e) =>{

        const cep = e.target.value. replace(/\D/g, '');
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res=>res.json()).then(data=>{
            console.log(data);
            setValue('address', data.logradouro)
            setValue('district', data.bairro)
            setValue('city', data.localidade)
            setValue('UF', data.uf)
            setFocus('number')
            
        });
      
    
      const { register, handleSubmit, setValue, setFocus } = useForm();
    
      const onSubmit = (e) => {
        console.log(e);
        }
      
       
    }
       
        
      
    
    
}

export default apiCep