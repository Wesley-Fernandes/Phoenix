"use client"

import { imgbb } from '@module/utils/imgbb';
import React, { FormEvent, useRef } from 'react'
import style from './page.module.css'
import {RiSendPlaneFill} from 'react-icons/ri'
import {MdOutlineAttachFile} from 'react-icons/md'

export default function CreatePost() {
    const inputRef = useRef<HTMLInputElement>(null)

    function sender(e:FormEvent){
        e.preventDefault();


        if(!inputRef.current){
            console.log("Selecione uma imagem!");
            return
        }else if(inputRef.current.files===null){
            console.log("Selecione uma imagem!");
            return
        }


        const file = inputRef.current.files[0];
        const form_data = new FormData();
        form_data.append('image', file);
        form_data.append('name', 'Teste image');

       imgbb(form_data); //call api of imgbb with headers
    }

  return (
    <main className={style.main}>
        <form className={style.form} onSubmit={sender}>
            <h2 className={style.form__action}>Criar postagem</h2>
            <div className={style.form__box}>
                <input
                    name='title'
                    type="text"
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
                        ref={inputRef}
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
