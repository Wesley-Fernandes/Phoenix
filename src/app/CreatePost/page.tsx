"use client"

import { imgbb } from '@module/utils/imgbb';
import React, { FormEvent, useRef } from 'react'
import style from './page.module.css'
import {RiSendPlaneFill} from 'react-icons/ri'
import {MdOutlineAttachFile} from 'react-icons/md'
import { supabase } from '@module/supabase/supabase';
import { IPost } from '@module/types/Post';

interface IResult{
    thumb: string;
    image_fullsize: string;
}


export default function CreatePost() {
    const fileRef = useRef<HTMLInputElement>(null);
    const inputRef = useRef<HTMLInputElement>(null)

    function sender(e:FormEvent){
        e.preventDefault();


        const title = inputRef.current?.value;

        if(!title){
            console.log("Escolha um titulo");
            return
        }
        
        if(!fileRef.current){
            console.log("Selecione uma imagem!");
            return
        }else if(fileRef.current.files===null){
            console.log("Selecione uma imagem!");
            return
        }


        const file = fileRef.current.files[0];
        const form_data = new FormData();
        form_data.append('image', file);
        form_data.append('name', 'Teste image');



       imgbb({
            new_image: form_data,
            title,
            user_name:'Darkside'}
        );
       

        
       }

  return (
    <main className={style.main}>
        <form className={style.form} onSubmit={sender}>
            <h2 className={style.form__action}>Criar postagem</h2>
            <div className={style.form__box}>
                <input
                    name='title'
                    type="text"
                    ref={inputRef}
                    placeholder='Titulo da imagem'
                    className={style.form__title}/>

                    <label
                        htmlFor="file"
                        className={style.form__fileLabel}>
                            <MdOutlineAttachFile/>
                            Imagem
                    </label>
                    <input
                        name='file'
                        id='file'
                        type="file"
                        ref={fileRef}
                        className={style.form__fileInput}/>
            </div>

            <button className={style.form__button} onClick={sender}>
                <RiSendPlaneFill className={style.form__svg}/>
                Enviar
            </button>
        </form>
    </main>
  )
}
