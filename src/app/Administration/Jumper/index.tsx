import React, { FormEvent, useRef } from 'react'
import style from './component.module.css'
import { supabase } from '../../../supabase/supabase'
export default function Jumper() {
  const formRef = useRef<HTMLFormElement>(null)
  async function create_jumper(e:FormEvent) {
      e.preventDefault();

      const target = e.target as typeof e.target &{
        title:  {value: string},
        tag:    {value: string},
        link:   {value: string}
      };


      const title = target.title.value;
      const tag   = target.tag.value;
      const link  = target.link.value;


      if(!title || !tag || !link){
        alert("Preencha todos os campos!");
        return
      }



    const { data, error } = await supabase
      .from('links')
      .insert([{title, tag, link}]);


    if(error){
      throw new Error(`Houve um erro: ${error.message}`);
    }


    alert("Jumper criado com sucesso!");
    formRef.current?.reset();
    return
  }



  return (
    <form  className={style.form} onSubmit={create_jumper} ref={formRef}>
        <h1 className={style.title}>Criar um jumper</h1>
        <small className={style.about}>Jumper são criados e integrados ao menu da comunidade.</small>
        <input name='title' type="text" className={style.input} placeholder='Exemplo: Plataforma de destaque'/>
        <select name="tag" className={style.selector}>
            <option value="novice">Novatos</option>
            <option value="tutorial">Tutoriais</option>
            <option value="system">Sistemas</option>
            <option value="plataforms">Plataformas</option>
        </select>
        <input name='link' type="text" className={style.input} placeholder='Exemplo: http://www.amino.com/p/destaques'/>
        <button className={style.action}>Criar novo</button>
    </form>
  )
}
