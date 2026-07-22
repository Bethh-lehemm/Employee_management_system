import { BcryptUtils } from "./common/utils/bcrypt.utilities";

async function main(){
    const password = "12345";
    const hashpassword = await BcryptUtils.hashPassword(password)
    console.log(hashpassword);
}

