import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { PiEyeLight, PiEyeSlashThin } from 'react-icons/pi';
import axios from 'axios';

// toast step 1
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';

const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!'),
  body: Yup.string(),
  author: Yup.string(),
});

 const Create = () => {
     let [toggle,setToggle] = useState(false);
     let redir = useNavigate();
   
     // toast step 3
    const notify = () => toast.success('Blog Created Successfully!!', {
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
    <h1 className='font-bold text-purple-700 text-3xl' >Create</h1>
    {
        true && 
        <Formik
      initialValues={{
        title:  '',
        body:  '',
        author:  '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        // console.log(values);
       
        axios.post('http://localhost:8000/Blogs',values)
       .then(reps=> {
        //  console.log(reps.data);
          notify()
          setTimeout(() => {
            redir('/blog')
            
          }, 3000);
       })
       .catch(err=> {
        console.log(err)
       })
      }}
    >
      {({ errors, touched,values }) => (
        <Form className='flex items-center flex-col justify-center gap-2 ' >
      
               <fieldset className='flex flex-col items-start justify-start gap-2 ' >
            <label htmlFor="title">Title</label>
            <Field value={values.title} className='border-2 rounded py-2 px-4' id='title' name="title" placeholder='John Doe' />
          </fieldset>
          {errors.title && touched.title ? (
            <div className='text-red-600 text-[12px] '>{errors.title}</div>
          ) : null}
          <fieldset className='flex flex-col items-start justify-start gap-2 ' >
            <label htmlFor="author">Author</label>
    
            <Field value={values.author} className='border-2 rounded py-2 px-4' id='author' type='text' name="author"  />
           
  
          </fieldset>
          {errors.author && touched.author ? (
            <div className='text-red-600 text-[12px] '>{errors.author}</div>
          ) : null}
        <fieldset className='flex flex-col items-start justify-start gap-2 ' >
            <label htmlFor="body">Body</label>
            <Field as="textarea"  value={values.body} className='border-2 rounded min-h-[20vh] text-wrap break-all py-2 px-4' id="body" name="body" type="text" placeholder='example@gmail.com' />
        </fieldset>
          {errors.body && touched.body ? <div className='text-red-600 text-[12px] '>{errors.body}</div> : null}
        
          <button className='border-2 py-2 px-4 rounded hover:bg-green hover:text-white ' type="submit">Submit</button>
        </Form>
      )}
    </Formik>
    }
   
    {/* toast step 2 */}
    <ToastContainer />
  </div>
  )
 }
  


export default Create