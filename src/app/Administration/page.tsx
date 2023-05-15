"use client"

import React, { useState } from 'react'
import style from './page.module.css'
import Jumper from './Jumper'
export default function Administration() {
    const [selector, setSelector] = useState<string>('')
  return (
    <main className={style.main}>
        <div className={style.header}>
            <select name="teste" className={style.selector} onChange={(e)=>{setSelector(e.target.value)}}>
                <option value="Jumper">Criar novo jumper</option>
                <option value="tutorial">Pergaminhos de conhecimento</option>
                <option value="system">Sistemas da comunidade</option>
                <option value="plataforms">Plataformas da comunidade</option>
            </select>
        </div>
        <div className={style.component}>
            {selector ==="Jumper" && <Jumper/>}
        </div>
    </main>
  )
}
