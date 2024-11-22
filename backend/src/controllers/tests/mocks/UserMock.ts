import { User } from "../../../models/User";
import { UserDTO } from "../../../models/UserDTO";

export const userMock: User = {
    name:"Nome",
    last_name:"Sobrenome",
    email:"user@gmail.com",
    password:"123"
}

export const userMockCryptoPass: User = {
    name:"Nome",
    last_name:"Sobrenome",
    email:"user@gmail.com",
    password:"cryptoPass"
}

export const userMockDTO: UserDTO = {
    name:"Nome",
    last_name:"Sobrenome",
    email:"user@gmail.com"
}