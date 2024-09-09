
import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userATom } from '../atoms/user';

const Blog = () => {
  let [blogs,setBlogs] = useState(null);
  let redir = useNavigate();
  let user = useRecoilValue(userATom);

  // fetch blogs date from backend or api
  useEffect(()=> {
    axios.get('http://localhost:8000/Blogs')
    .then(resp=> {
      console.log(resp.data);
      setBlogs(resp.data);
    })
    .catch(err=> {
      console.log(err)
    })
  },[])

  useEffect(()=> {
    if(!user.isLoggedIn) {
      redir('/login')
    }
  },[])
  return (
    <div id='Blog' >

      <h1 className='font-poppines font-bold text-3xl mb-5 ' >Latest Blogs</h1>

      <div className=" w-[70%] mx-auto shadow flex flex-col items-center justify-center gap-4 py-3 px-4 ">
        {
          blogs && blogs.map((blog,i)=> (
            <div onClick={()=> redir('/blog/'+blog.id)  } key={i} className='odd:bg-gray shadow-md py-4 px-3 even:bg-transparent text-black hover:bg-purple-400 ' >
                <h3 className='text-center' > {blog.title} </h3>
               </div>
          ))
        }
      </div>
      
    </div>
  )
}

export default Blog