import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { GrUpdate } from 'react-icons/gr';
import { IoArrowBack } from 'react-icons/io5';
import { MdDeleteForever } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom'
// toast step 1
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AlertMui from '../mui/AlertMui';
import { useRecoilValue } from 'recoil';
import { userATom } from '../atoms/user';
import UpdateDiagMui from '../update/Update';

const Details = () => {
    let {id} = useParams();
    let [blog,setBlog] = useState(null);
    let redir = useNavigate();
    const [open, setOpen] = React.useState(false)
    let user = useRecoilValue(userATom);
// toast step 3
    const notify = () => toast.success('Blog Delete Successfully!!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });

    useEffect(()=> {
       axios.get('http://localhost:8000/Blogs/'+id)
       .then(reps=> {
         console.log(reps.data);
         setBlog(reps.data);
       })
       .catch(err=> {
        console.log(err)
       })
    },[])
    // handleDelete function
    function handleDelete(id) {
      // let askUser = confirm('Do you want to Delete this Blog post FOREVER?')
   
        axios.delete('http://localhost:8000/Blogs/'+id)
       .then(reps=> {
         console.log(reps);
          notify()
          setTimeout(() => {
            redir(-1)
            
          }, 3000);
       })
       .catch(err=> {
        console.log(err)
       })
    
    }
  return (
    <div className='flex items-center justify-center flex-col gap-4' >
     
        {
          blog && <>
             <h3 className='font-poppines mt-5 font-bold text-3xl text-blue mb-5' > {blog.title} </h3>
             <p className='font-poppines font-normal py-3 px-5 shadow-md  text-[1rem] text-black mb-5'> {blog.body} </p>
          </>
        }
                   
        <div className="flex items-center justify-center gap-4 flex-row mt-5 shadow-lg ">
          {/* back */}
          <button title='Go Back' onClick={()=> redir(-1) } className="outline outline-gray-300 py-2 px-4 hover:outline-none text-2xl  rounded-sm"><IoArrowBack /></button>
          {
            user.data.role === 'Admin' && <>
             {/* delete */}
          <button title='Delete this Blog' onClick={()=> setOpen(true) } className="outline outline-gray-300 py-2 px-4 hover:bg-red-600 hover:text-white rounded-sm text-2xl "><MdDeleteForever /></button>
          {/* update */}
          <button onClick={()=> redir('/update/'+id)} title='Update this Blog' className="outline outline-gray-300 py-2 px-4 hover:bg-green hover:text-white text-2xl rounded-sm"><GrUpdate /></button>
            </>
          }
        </div>
        {/* toast step 2 */}
        <ToastContainer />
        <AlertMui open={open} setOpen={setOpen} action={handleDelete} id={id} />
        {/* <UpdateDiagMui /> */}
    </div>
  )
}

export default Details