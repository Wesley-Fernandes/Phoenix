"use client"
import React, { useState } from 'react'
import style from './navbar.module.scss'
import {RxHamburgerMenu} from 'react-icons/rx'
import {TfiClose} from 'react-icons/tfi'
import { useRouter } from 'next/navigation'


export default function Navbar() {
    const [toogle, setToogle] = useState<boolean>(false);
    const {push} = useRouter();

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


  return (
    <>
        <nav className={style.navbar} onMouseOut={()=>setToogle(false)}>
            
            <h1>PHOENIX</h1>

            <button className={style.menu__button} onClick={toogle_menu}>
                {toogle?(<TfiClose/>):(<RxHamburgerMenu/>)}
            </button>
        </nav>

        {toogle ===true &&(
            <ul className={style.menu__pages} onMouseOut={()=>setToogle(false)}>
                <li onClick={()=>{push('/Dashboard')}}>Dashboard</li>
                <li onClick={()=>{push('/CreatePost')}}>Criar postagem</li>
                <li onClick={()=>{push('/Friends')}}>Amigos</li>
                <li onClick={()=>{push('/Chats')}}>Chats</li>
                <hr />
                <li onClick={()=>{push('/Private_chats')}}>Chats privados</li>
                <li onClick={()=>{push('/Portfolio')}}>Meu perfil</li>
                <li onClick={()=>{push('/Configurations')}}>Configurações</li>
            </ul>
        )}
        
    </>
  )
}
