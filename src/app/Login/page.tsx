"use client"

import styles from "./page.module.css"
import {FcGoogle} from 'react-icons/fc'
import { supabase } from "@module/supabase/supabase"
import { signInWithEmail } from "@module/utils/Auth"
import { useRouter } from "next/navigation"
import {FaAngleLeft} from 'react-icons/fa'

export default function Login(){
    const {push} = useRouter();

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

       
        const { data, error } = await supabase.auth.signInWithPassword({email,password})
          
        if(error){
              throw new Error(`Houve um erro: ${error}`);
        }
          
        console.log("Usuario logado com sucesso!");
        localStorage.setItem('user_logged_phoenix', JSON.stringify(data.user));

        push('/Admin_Dashboard');
          
        

       
    }

    return(
        <main className={styles.main}>
            <div className={styles.header}>
                <button
                    onClick={()=>{push('/')}}
                    className={styles.header__buttonBack}>
                    <FaAngleLeft/>
                </button>
                <h3 className={styles.header__title}>Voltar</h3>
            </div>
            <form className={styles.BoxLogin} onSubmit={(e)=>{MakeLogin(e)}}>
                <h1 className={styles.BoxTitle}>PHOENIX</h1>
                <small className={styles.BoxAbout}>
                    Faça login para acessar a aplicação
                </small>

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
            </form>
        </main>
    )
}