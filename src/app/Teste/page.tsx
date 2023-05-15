"use client"

import {imgbb} from '@module/utils/imgbb';
import React, { FormEvent, useRef} from 'react'

export default function Teste() {
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
    <div>
        <form onSubmit={sender}>
            <input type="file" name='image' ref={inputRef}/>
            <hr />
            <button>submit</button>
        </form>
    </div>
  )
}
