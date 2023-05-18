import { supabase } from "@module/supabase/supabase";
import { useRouter } from "next/router";


async function signInWithEmail({email, password}:ISignWithEmail) {
  const { data, error } = await supabase.auth.signInWithPassword({email,password})

  if(error){
    throw new Error(`Houve um erro: ${error}`);
  }

  console.log("Usuario logado com sucesso!");
  localStorage.setItem('user_logged_phoenix', JSON.stringify(data.user));
  return
}

async function createAccount({email, password, background, icon, years , username}:ICreateUser){
    const { data:User, error:Error_Create } = await supabase.auth.signInWithPassword({email, password});

    if(Error_Create){
      throw new Error(`Houve um erro: ${Error_Create.message}`);
    }


    const { data:FriendList, error:Error_friends } = await supabase
      .from('friends')
      .insert([
        { user_id: User.user?.id, list: []},
      ]);


    if(Error_friends){
      throw new Error(`Houve um erro: ${Error_friends.message}`);
    }


    const { data:UserUpdated, error:UpdateError } = await supabase.auth.updateUser({email,password,
      data: {
        username, 
        background,
        years,
        icon
      }
    })


    if(UpdateError){
      throw new Error(`Houve um erro ao atualizar: ${UpdateError.message}`)
    }


}




  export {signInWithEmail, createAccount}