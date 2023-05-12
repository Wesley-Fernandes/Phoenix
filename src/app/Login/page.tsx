import styles from "./page.module.css"


export default function Login(){


    return(
        <main className={styles.main}>
            <form action="" className={styles.form}>
                <h1 className={styles.title}>PHOENIX</h1>
                <input type="text" className={styles.input} placeholder="Meu email..."/>
                <input type="text" className={styles.input} placeholder="Minha senha..."/>
                <button className={styles.action}>LOGIN</button>

                <div className={styles.divider}>
                    <hr className={styles.divider_hr}/>
                    <span className={styles.divider_text}> ou </span>
                    <hr className={styles.divider_hr}/>
                </div>

                <div className={styles.options}>
                    <button className={styles.options_action}>Criar conta</button>
                    <button className={styles.options_action}>Recuperar</button>
                </div>
                <small>Versão 0.5.0</small>
            </form>
        </main>
    )
}