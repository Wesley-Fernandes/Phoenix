'use client'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Navbar from '../Navbar';

interface Isecurity{
    children: any;
}



export default function Security({children}:Isecurity) {
    const url_list = ['/Admin_Darklist', '/CreatePost', '/NewUser', '/Admin_Dashboard'];
    const router = useRouter();

    const [loading, setLoading] = useState<boolean>(true);
    const [auth, setAuth] = useState<boolean>(false);

    async function get_local_user(){
        const user_local  =  localStorage.getItem('user_logged_phoenix');


        if(user_local){
            const user_object  =  await JSON.parse(user_local);
            setAuth(true);
            setLoading(false);
        }else{
            setAuth(false)
            setLoading(false)
        }
    }


    useEffect(()=>{
        get_local_user();
    }, []);


    if(url_list.includes(usePathname())){
        if(loading==true && auth===false){
            console.log("loading...")
            return (<></>);
    
        }else if(loading==false && auth===false){
            console.log("Sem autorização.")
            router.push('/Login')
            
    
        }else if(loading==false && auth===true){
            console.log("Autenticado.")
            return (<><Navbar/>{children}</>);
        }

    }else{
        return children
    }
}
