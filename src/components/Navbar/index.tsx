"use client"
import React, { useState } from 'react'
import style from './navbar.module.scss'
import {RxHamburgerMenu} from 'react-icons/rx'
import {TfiClose} from 'react-icons/tfi'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation';
import Link from 'next/link'


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

    //{pathname != "/" &&(<Navbar/>)}
  return (
    <>
    {path==="/" ?(<></>):(
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
                        <Link href={'/Dashboard'}>
                            Dashboard
                        </Link>
                    </li>
                    <li onClick={()=>{push('/CreatePost')}}>
                        <Link href={'/Criar postagem'}>
                            Dashboard
                        </Link>
                    </li>
                    <hr />
                    <li onClick={()=>{push('/Portfolio')}}>
                        <Link href={'/Portfolio'}>
                            Portfolio
                        </Link>
                    </li>
                </ul>
            )}
            
        </>
        )}
    </>
    )
}
