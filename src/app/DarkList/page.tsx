'use client'

import React, { useEffect, useState } from 'react'
import style from './page.module.css'
import {HiUser, HiBan} from 'react-icons/hi'
import {GiShieldDisabled} from 'react-icons/gi'
import {MdOutlineHourglassBottom, MdAdminPanelSettings} from 'react-icons/md'
import { supabase } from '@module/supabase/supabase'
import {format} from 'date-fns'
import { useRouter } from 'next/navigation'

export default function DarkList() {
    const [datas, setDatas] = useState<any[]|[]>([]);

    const {push} = useRouter();

    async function get_lasts(){
        let { data: Darklist, error } = await supabase
        .from('Darklist')
        .select('*')

        if(error){
            throw new Error(`Houve um erro: ${error.message}`);
        }

        if(!Darklist){
            throw new Error(`Dont't have any data.`);
        }


        setDatas(Darklist);
        return
    }
    



    useEffect(()=>{
        get_lasts();
    }, [])
  return (
    <div className={style.page}>
        <header className={style.header}>
            <h2 className={style.header__pageTitle}>Punições</h2>
            <div className={style.search__Box}>
                <input
                    type="text"
                    placeholder='Digite o nome para procurar...'
                    className={style.search__input}/>
                <button
                    className={style.search__button}>
                        search
                </button>
            </div>
        </header>
        <main className={style.main}>

            {datas.map((data)=>{
                const date_received = data.created_at;
                const date_formacted = format(new Date(date_received), 'dd/MM/yyyy');
                return(
                    <div className={style.Punish} key={data.id}>
                        <div className={style.Punish_user_info}>
                            <span className={style.Punish_user_tag} onClick={()=>{push(data.link)}}>
                                <HiUser className={style.svg}/>
                                {data.username}
                            </span>
                            <span className={style.Punish_user_tag}>
                                <MdOutlineHourglassBottom className={style.svg}/>
                                {date_formacted}
                            </span>
                            <span className={style.Punish_user_tag}>
                                <GiShieldDisabled className={style.svg}/>
                                {data.benevolency}/3
                            </span>
                            <span className={style.Punish_user_tag}>
                                <HiBan className={style.svg}/>
                                {data.reason}
                            </span>
                            <span
                                className={style.Punish_user_tag}
                                onClick={()=>{push(data.admin_link)}}>
                                    <MdAdminPanelSettings className={style.svg}/>
                                    {data.admin}
                            </span>
                        </div>
                        <p className={style.Punish_user_about}>
                            {data.about}
                        </p>
                    </div>
                )
            })}

            
        </main>
    </div>
  )
}
