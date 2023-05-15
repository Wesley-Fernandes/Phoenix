"use client"

import Image from 'next/image'
import styles from './page.module.css'

import { supabase } from '../supabase/supabase'
import { useEffect, useState } from 'react'
import { IMenuItem } from '@module/types/Menu'
import { useRouter } from 'next/navigation'


export default function Home() {
  const [links, setLinks] = useState<IMenuItem[]|any>([]);
  const [tag, setTag] = useState<string>('novice');
  const {push} = useRouter();


  async function get_all_links(){
    let { data:links_recovers, error } = await supabase.from("links").select("*");

    if(error){
      throw new Error(`Somethin wrong has happend: ${error}`);
    }

    if(links_recovers == null){
      throw new Error(`Somethin wrong has happend: ${error}`);
    }

    const novice = links_recovers.filter((item)=>{
      if(item.tag==="novice"){
        return item;
      }
    })

    const tutorial = links_recovers.filter((item)=>{
      if(item.tag==="tutorial"){
        return item;
      }
    })


    const system = links_recovers.filter((item)=>{
      if(item.tag==="system"){
        return item;
      }
    })

    const plataforms = links_recovers.filter((item)=>{
      if(item.tag==="plataforms"){
        return item;
      }
    });


    const all_links = {novice, plataforms, system, tutorial};
    setLinks(all_links);

    console.log(links);

  }




  useEffect(()=>{
    get_all_links()
  }, [])
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.header_title}>PHOENIX</h1>
        <select name="content" className={styles.header_select} onChange={(e)=>{setTag(e.target.value)}}>
          <option value="novice">Para novos usuarios</option>
          <option value="tutorial">Pergaminhos de conhecimento</option>
          <option value="system">Sistemas da comunidade</option>
          <option value="plataforms">Plataformas da comunidade</option>
        </select>
        <small className={styles.header_text}>Esse é o manual da comunidade, clique em selecionar modulo abaixo e encontre conteudos relacionado com o que procuras.</small>
      </header>

      <div className={styles.content}>


        {tag === "tutorial" &&(
          links?.tutorial?.map(({link, title, id}:IMenuItem)=>{
            return (
            <button onClick={()=>{push(link)}} key={id} className={styles.linker}>
              {title}
            </button>)
          })
        )}

        {tag === "novice" &&(
          links?.novice?.map(({link, title, id}:IMenuItem)=>{
            return (
            <button onClick={()=>{push(link)}} key={id} className={styles.linker}>
              {title}
            </button>)
          })
        )}

        {tag === "system" &&(
          links?.system?.map(({link, title, id}:IMenuItem)=>{
            return (
            <button onClick={()=>{push(link)}} key={id} className={styles.linker}>
              {title}
            </button>)
          })
        )}

        {tag === "plataforms" &&(
          links?.plataforms?.map(({link, title, id}:IMenuItem)=>{
            return (
            <button onClick={()=>{push(link)}} key={id} className={styles.linker}>
              {title}
            </button>)
          })
        )}

      </div>
    </main>
  )
}
