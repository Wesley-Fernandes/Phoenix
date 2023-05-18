"use client"


import React, { FormEvent } from 'react'
import style from './page.module.css'
import { IDarklistItem } from '@module/utils/Database'
import { supabase } from '@module/supabase/supabase'
export default function Admin_Darklist() {


  async function createItem(e:FormEvent){
    e.preventDefault();
    const target = e.target as typeof e.target &({
      username:     {value: string},
      benevolency:  {value: number},
      reason:       {value: string},
      link:         {value: string},
      about:        {value: string}
    });

    const user_data = localStorage.getItem('user_logged_phoenix');
    if(!user_data){
      console.log('Not user fouded!');
      return
    }
    const user_obj = await JSON.parse(user_data);


    const about         = target.about.value;
    const admin         = "Conde";
    const admin_link    = 'https://aminoapps.com/c/rpg/page/user/king-bowser/RMQp_aLiJf4wbbEvLZPWNqEnkZJn7PJ78';
    const benevolency   = target.benevolency.value;
    const link          = target.link.value;
    const reason        = target.reason.value;
    const username      = target.username.value;

    const { data, error } = await supabase.from('Darklist')
    .insert<IDarklistItem>([{about, admin, admin_link, benevolency, link, reason, username}]);


    if(error){
      throw new Error(`Houve um erro: ${error.message}`);      
    }

    alert("Registrado com sucesso!");
    return
  }





  return (
    <div className={style.Page}>
      <form className={style.Form} onSubmit={(e)=>{createItem(e)}}>
        <h1 className={style.Title}>DARKLIST</h1>
        <input
          placeholder='Digite o nome do usuario'
          name='username'
          required
          className={style.inputText}
          type="text" />

        <input
          placeholder='Link do usuario'
          name='link'
          required
          className={style.inputText}
          type="text" />
        

        <input
          placeholder='Pontos perdidos'
          name='benevolency'
          required
          min={1}
          max={3}
          className={style.inputText}
          type="number" />

        

        <select
          className={style.inputSelect}
          name="reason">
          <option value="flood">Flood</option>
          <option value="goore">Goore</option>
          <option value="racismo">Racism</option>
          <option value="assedio">Assedio</option>
          <option value="doxxing">Doxxing</option>
          <option value="pornografia">Pornografia</option>
        </select>

        <textarea
          name="about"
          cols={30}
          rows={10}
          className={style.inputArea} 
          placeholder='Digite sobre o caso...'/>

        <button className={style.submitButton}>
          REGISTRAR
        </button>
      </form>
    </div>
  )
}
