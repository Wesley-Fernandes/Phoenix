"use client"
import React, { useState } from 'react'
import style from './navbar.module.scss'
import Link from 'next/link'




import { supabase } from '@module/supabase/supabase';
import {RxHamburgerMenu} from 'react-icons/rx';
import {TfiClose} from 'react-icons/tfi';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';


export default function Navbar() {
    const [toogle, setToogle] = useState<boolean>(false);
    const {push} = useRouter();
    const path = usePathname();

    function toogle_menu(){
        switch (toogle){
            case false:
                setToogle(true);
                break;
            case true:
                setToogle(false);
                break;
        }
    }


    async function signOut() {
        const { error } = await supabase.auth.signOut();
      
        if(error){
          throw new Error(`Houve um erro: ${error.message}`);
        }
        
        localStorage.removeItem('user_logged_phoenix');
        push('/');
      }



  return (
    <>
    {path==="/" || path==="/DarkList" ?(<></>):(
        <>
        <nav className={style.navbar} onMouseOut={()=>setToogle(false)}>
                
                <h1>PHOENIX</h1>
    
                <button className={style.menu__button} onClick={toogle_menu}>
                    {toogle?(<TfiClose/>):(<RxHamburgerMenu/>)}
                </button>
            </nav>
    
            {toogle ===true &&(
                <ul className={style.menu__pages} onMouseOut={()=>setToogle(false)}>
                    <li onClick={()=>{push('/Dashboard')}}>
                        Dashboard
                    </li>
                    <li onClick={()=>{push('/Admin_Darklist')}}>
                        Darklist
                    </li>
                    <hr />
                    <li onClick={()=>{push('/Portfolio')}}>
                        Meu perfil
                    </li>
                    <li onClick={()=>{signOut()}}>
                        Deslogar
                    </li>
                </ul>
            )}
            
        </>
        )}
    </>
    )
}
