"use client"

import styles from "./page.module.css"
import {FcGoogle} from 'react-icons/fc'
import {BsPlusCircleFill} from 'react-icons/bs'
import { supabase } from "@module/supabase/supabase"
import { signInWithEmail } from "@module/utils/Auth"

export default function NewUser(){

    async function MakeLogin(event: React.FormEvent){
        event.preventDefault();

        const target = event.target as typeof event.target &{
            email: {value: string},
            password: {value: string};
        };

        const email = target.email.value;
        const password = target.password.value;

        if(!email || !password){
            throw new Error("Insira o e-mail e senha para continuar.");
        }

        signInWithEmail({email, password});
    }

    return(
        <main className={styles.main}>
            <form className={styles.BoxLogin} onSubmit={(e)=>{MakeLogin(e)}}>
                <h1 className={styles.BoxTitle}>PHOENIX</h1>
                <small className={styles.BoxAbout}>
                    Faça login para acessar a aplicação
                </small>

                <input type="file" id="image" />

                <input
                    name="username"
                    type="text"
                    required
                    placeholder="Apelido"
                    className={styles.BoxInput}/>

                <input
                    name="email"
                    type="email"
                    required
                    placeholder="Email@email.com"
                    className={styles.BoxInput}/>
                    
                <input
                    name="password"
                    type="password"
                    min={6}
                    required
                    placeholder="*********"
                    className={styles.BoxInput}/>

                <button type="submit" className={styles.BoxButton}>
                    Fazer login
                </button>

                <div  className={styles.BoxDivider}>
                    <hr  className={styles.BoxHr}/>
                    <span  className={styles.BoxSpan}>OU</span>
                    <hr  className={styles.BoxHr}/>
                </div>

                <button className={styles.BoxButton}>
                    Criar conta
                </button>
            </form>
        </main>
    )
}