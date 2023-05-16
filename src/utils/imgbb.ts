import { IImgbb } from "@module/types/Imgbb";
import { supabase } from "@module/supabase/supabase";
import axios from "axios";
import { IPost } from "@module/types/Post";

interface IimgbbNeed{
    new_image: any;
    title: string;
    user_name: 'Darkside'
}

async function imgbb({new_image, title, user_name}:IimgbbNeed){

    axios.post(encodeURI(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API}`), new_image).then(async(result)=>{
        const data:IImgbb = result.data;
        const { data:postage, error } = await supabase
        .from('posts')
        .insert<IPost>([
            {
                image: data.data.image.url,
                likes: 0,
                thumbnail: data.data.thumb.url,
                title: title,
                user_icon: 'https://i.pinimg.com/474x/42/3a/34/423a3476d63f2fa5dbfb203822677159.jpg',
                user_id: 'wesley_identification',
                user_link: 'link.com',
                user_name
            },
        ]);



        if(error){
            throw new Error(`Houve um erro ao criar postagem: ${error.message}`)
        }


        console.log("Postagem criada com sucesso!");
        return



    }).catch((err)=>{
        console.log(`FAIL: ${err}`);
    })
}


export {imgbb}