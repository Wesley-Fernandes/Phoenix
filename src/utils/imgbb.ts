import { IImgbb } from "@module/types/Imgbb";
import axios from "axios";


async function imgbb(new_image:any){

    axios.post(encodeURI(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API}`), new_image).then((result)=>{
        const data:IImgbb = result.data;
        console.log(`SUCESS: ${data.data.url}`);
    }).catch((err)=>{
        console.log(`FAIL: ${err}`);
    })
}


export {imgbb}