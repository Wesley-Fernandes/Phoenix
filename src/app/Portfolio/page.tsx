import React from 'react'
import style from './page.module.css';

function Portfolio() {
  return (
    <div className={style.page}>


        <header className={style.header}>
            
            <div className={style.header_username_box}>
                <h1 className={style.header_username}>
                    Darkside Editions
                </h1>
            </div>



            <div className={style.footer}>
                <div className={style.header_information}>
                    <h3 className={style.header_information_number}>220</h3>
                    <span className={style.header_information_title}>
                        IMAGENS
                    </span>
                </div>
                <img
                    className={style.icon}
                    src="https://i.pinimg.com/474x/42/3a/34/423a3476d63f2fa5dbfb203822677159.jpg"
                    alt="Icon do usuario" />

                <div className={style.header_information}>
                    <h3 className={style.header_information_number}>4.9/5.0</h3>
                    <span className={style.header_information_title}>
                        NOTA
                    </span>
                </div>
            </div>
            <img
                className={style.background}
                src="https://cdn.pensador.com/img/authors/na/ru/naruto-l.jpg"/>
        </header>

        <main className={style.main}>

            <div className={style.post}>
                    <div className={style.post_title_box}>
                        <span className={style.post_title}>
                            Depois que adquiri o modo sábio...
                        </span>
                    </div>
                <img
                    className={style.post_image}
                    src="https://sm.ign.com/ign_br/screenshot/default/naruto-shippuden_zy11.jpg"
                    alt="imagem da postagem" />
            </div>


            <div className={style.post}>
                    <div className={style.post_title_box}>
                        <span className={style.post_title}>
                            Depois que adquiri o modo sábio...
                        </span>
                    </div>
                <img
                    className={style.post_image}
                    src="https://sm.ign.com/ign_br/screenshot/default/naruto-shippuden_zy11.jpg"
                    alt="imagem da postagem" />
            </div>


            <div className={style.post}>
                    <div className={style.post_title_box}>
                        <span className={style.post_title}>
                            Depois que adquiri o modo sábio...
                        </span>
                    </div>
                <img
                    className={style.post_image}
                    src="https://sm.ign.com/ign_br/screenshot/default/naruto-shippuden_zy11.jpg"
                    alt="imagem da postagem" />
            </div>
            
        </main>
    </div>
  )
}

export default Portfolio;