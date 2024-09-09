import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { PiEyeLight, PiEyeSlashThin } from 'react-icons/pi';
import axios from 'axios';

// toast step 1
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const SignupSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string().min(8, "Must Contain 8 Characters").required()
  .matches(
    /^(?=.*[a-z])/,
    " Must Contain One Lowercase Character"
  )
  .matches(
    /^(?=.*[A-Z])/,
    "  Must Contain One Uppercase Character"
  )
  .matches(
    /^(?=.*[0-9])/,
    "  Must Contain One Number Character"
  )
  .matches(
    /^(?=.*[!@#\$%\^&\*])/,
    "  Must Contain  One Special Case Character"
  ),
  email: Yup.string().email('Invalid email').required('Required'),
});

 const Signup = () => {
     let [toggle,setToggle] = useState(false);
     let redir = useNavigate();
     // toast step 3
    const notify = () => toast.success('Signed up Successfully!!', {
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
  return(
    <div className='items-center mx-auto rounded p-3 mt-4  flex flex-col justify-center gap-4 w-[50%] shadow-lg ' >
    <h1 className='font-bold text-purple-700 text-3xl' >Signup</h1>
    <Formik
      initialValues={{
        fullname: '',
        password: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        // console.log(values);
        let upd = {fullname: values.fullname,password: values.password,id:values.email,role: 'normal'}
        axios.post('http://localhost:8000/Users',upd)
       .then(reps=> {
         console.log(reps.data);
          notify()
          setTimeout(() => {
            redir('/login')
            
          }, 3000);
       })
       .catch(err=> {
        console.log(err)
       })
      }}
    >
      {({ errors, touched }) => (
        <Form className='flex items-center flex-col justify-center gap-2 ' >
          <fieldset className='flex flex-col items-start justify-start gap-2 ' >
            <label htmlFor="fullname">Full Name</label>
            <Field className='border-2 rounded py-2 px-4' id='fullname' name="fullname" placeholder='John Doe' />
          </fieldset>
          {errors.fullname && touched.fullname ? (
            <div className='text-red-600 text-[12px] '>{errors.fullname}</div>
          ) : null}
          <fieldset className='flex flex-col items-start justify-start gap-2 ' >
            <label htmlFor="passowrd">Password</label>
            <div className='flex items-center justify-start flex-row gap-2' >
            <Field className='border-2 rounded py-2 px-4' id='password' type={toggle?'text':'password'} name="password" placeholder='strong password' />
           
           
             {
                toggle? <PiEyeLight onClick={()=> setToggle(prev=> !prev)} />: <PiEyeSlashThin onClick={()=> setToggle(prev=> !prev)} />
             }
            </div>
          </fieldset>
          {errors.password && touched.password ? (
            <div className='text-red-600 text-[12px] '>{errors.password}</div>
          ) : null}
        <fieldset className='flex flex-col items-start justify-start gap-2 ' >
            <label htmlFor="email">Email</label>
            <Field className='border-2 rounded py-2 px-4' id="email" name="email" type="email" placeholder='example@gmail.com' />
        </fieldset>
          {errors.email && touched.email ? <div className='text-red-600 text-[12px] '>{errors.email}</div> : null}
          <button className='border-2 py-2 px-4 rounded hover:bg-green hover:text-white ' type="submit">Submit</button>
        </Form>
      )}
    </Formik>
    <p>Have an Account? <button className='font-bold text-2xl mt-3' onClick={()=> redir('/login') } >Login</button> </p>
    {/* toast step 2 */}
    <ToastContainer />
  </div>
  )
 }
  


export default Signup