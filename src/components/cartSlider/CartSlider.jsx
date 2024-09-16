import classNames from 'classnames'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CartSlider = ({show,setShow}) => {
    let redir = useNavigate()
   let  handleClose=(e)=> {
    e.stopPropagation();
    setShow(prev=> !prev)
   }

  return (
    <div onClick={handleClose} className={classNames('w-full h-[3107px] bg-[#00000033] fixed top-0 left-0 ',{
        'hidden': !show
    })} >
        <div onClick={(e)=> e.stopPropagation()} className="w-[417px] min-h-[746px] bg-white text-black fixed right-0 top-0 ">
            <h4>CartSlider Menu</h4>
            <button onClick={(e)=> handleClose(e)} className='outline outline-slate-300 p-2 rounded mr-3'>Close</button>
            <button onClick={(e)=>{handleClose(e); redir('/car')}} className='outline outline-slate-300 p-2 rounded mr-3'>Cart</button>
        </div>
    </div>
  )
}

export default CartSlider