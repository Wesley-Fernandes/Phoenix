'use client'

import React, {useState, useEffect} from 'react'
import style from './page.module.css';
import { supabase } from '@module/supabase/supabase';
import ModalImage from 'react-modal-image'
import { IPost } from '@module/types/Post';

import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'

function Portfolio() {
    const [posts, setPosts] = useState<any[]>([])
    async function getUserPosts(user_id:string){
        let {data, error } = await supabase
          .from('posts')
          .select("*")
            .eq('user_id', user_id);
            
        if(error || !data){
            throw new Error(`One error has ocorred: ${error}`);
        }
        
        
        setPosts(data);
    
    
    }

    useEffect(()=>{
        getUserPosts('wesley_identification')
    }, [])
  return (
    <div className={style.page}>


        <header className={style.header}>
            
            <div className={style.header_username_box}>
                <h1 className={style.header_username}>
                    Darkside Editions
                </h1>
            </div>



            <div className={style.footer}>
                <div className={style.header_information}>
                    <h3 className={style.header_information_number}>{posts.length}</h3>
                    <span className={style.header_information_title}>
                        IMAGENS
                    </span>
                </div>
                <img
                    className={style.icon}
                    src="https://i.pinimg.com/474x/42/3a/34/423a3476d63f2fa5dbfb203822677159.jpg"
                    alt="Icon do usuario" />

                <div className={style.header_information}>
                    <h3 className={style.header_information_number}>4.9/5.0</h3>
                    <span className={style.header_information_title}>
                        NOTA
                    </span>
                </div>
            </div>
            <img
                className={style.background}
                src="https://cdn.pensador.com/img/authors/na/ru/naruto-l.jpg"/>
        </header>

        <main className={style.main}>

            {
                posts.map((post:IPost)=>{
                    return (
                        <div className={style.post}>
                            <ModalImage
                                small={post.thumbnail}
                                large={post.image}
                                alt="imagem da postagem" />
                            <footer className={style.post__footer}>
                             <AiFillHeart/> 0
                            </footer>
                        </div>
                    )
                })
            }

            
        </main>
    </div>
  )
}

export default Portfolio;