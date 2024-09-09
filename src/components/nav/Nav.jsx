import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { cartATom } from '../atoms/cart'
import { userATom } from '../atoms/user'

/* 
  router step 3
  replace all a tag with Link tag and href with to
 */
const Nav = () => {
  let cart = useRecoilValue(cartATom);
  let [user,setUser] = useRecoilState(userATom);
  return (
    <nav className='bg-black py-2 px-3 '>
        <ol className='flex items-center justify-between '>
            <li className='text-white'>logo</li>
            <li className='flex items-center justify-between gap-4 '>
                <Link className='text-white' to="/bottle">Bottle</Link>
                <Link className='text-white' to="/car">Car</Link>
                <Link className='text-white' to="/blog">Blog</Link>
                {
                  user.data.role === 'Admin' &&  <Link className='text-white text-nowrap ' to="/create">Create Blog</Link>
                }
                {
                  !user.isLoggedIn && <>
                   <Link className='text-white' to="/login">Login</Link>
                   <Link className='text-white' to="/signup">Signup</Link>
                  </>
                }
                {
                  user.isLoggedIn && <Link onClick={()=> setUser({isLoggedIn: false, data:{}})  } className='text-white' to="#">Signout</Link>
                }
                <Link className='text-white' to="#">Cart [{cart}] </Link>
            </li>
        </ol>
    </nav>
  )
}

export default Nav