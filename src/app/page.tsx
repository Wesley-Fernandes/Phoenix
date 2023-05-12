"use client"

import Image from 'next/image'
import styles from './page.module.css'

import { supabase } from '../supabase/supabase'
import { useEffect, useState } from 'react'
import { IMenuItem } from '@styles/types/Menu'
import { useRouter } from 'next/navigation'


export default function Home() {
  const [links, setLinks] = useState<IMenuItem[]|any>([]);
  const {push} = useRouter();


  async function get_links(value:string){
    console.log(value)
    let { data, error } = await supabase.from("links").select("*").filter("tag", "eq", value);

      if(error){
        throw new Error(`Somethin wrong has happend: ${error}`);
      }

      if(data == null){
        throw new Error(`Somethin wrong has happend: ${error}`);
      }

      setLinks(data)
      return

  }


  useEffect(()=>{
    get_links("plataforms");
  }, [])
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.header_title}>PHOENIX</h1>
        <select name="content" className={styles.header_select} onChange={(e)=>{get_links(e.target.value)}}>
          <option value="novice">Para novos usuarios</option>
          <option value="tutorial">Pergaminhos de conhecimento</option>
          <option value="system">Sistemas da comunidade</option>
          <option value="plataforms">Plataformas da comunidade</option>
        </select>
        <small className={styles.header_text}>Esse é o manual da comunidade, clique em selecionar modulo abaixo e encontre conteudos relacionado com o que procuras.</small>
      </header>

      <div className={styles.content}>
        {links?.map(({link, title, id}:IMenuItem)=>{
          return(
          <button
            onClick={()=>{push(link)}}
            className={styles.linker}
            key={id}>
              {title}
            </button>)
        })}

      </div>
    </main>
  )
}
