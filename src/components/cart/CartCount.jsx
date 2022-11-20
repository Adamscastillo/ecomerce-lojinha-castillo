import React from 'react'
import { TrashIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';

const CartCount = ({ onCartToggle, totalQTY, onClearCartItems }) => {
  return (
   <>
      <div className='bg-white h-11 flex items-center justify-between px-3 sticky top-0 left-0 right-0 w-full'>
        <div className='flex items-center gap-1'>
            <div className='flex items-center cursor-pointer text-slate-900 hover:text-orange-500 stroke-[2]' onClick={onCartToggle}>
                <ShoppingCartIcon className='w-5 h-5 ' />
           
                <h1 className='text-base font-medium' onClick={onCartToggle}>Voltar Site</h1>
            </div>
            <div className='grid items-center '>
                <span className='bg-theme-cart rounded px-1 py-0.5 text-slate-100 font-normal text-sm'>
                    ({totalQTY} Items no carrinho)
                </span>
                
            </div>
        </div>
        <div className='flex items-center'>
            <h1 className='text-base font-medium text-slate-900 pr-1'>Limpe seu Carrinho</h1>
            <button type='button' onClick={onClearCartItems} className='rounded bg-theme-cart active:scale-90 p-0.5'>
                <TrashIcon className='w-5 h-5 text-white stroke-[2]' />
            </button>
        </div>
      </div>
   </>
  )
}

export default CartCount