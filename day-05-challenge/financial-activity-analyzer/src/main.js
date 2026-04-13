import {getUsers} from "./api.js"
import { attachTransactions } from "./transactions.js";

const button = document.querySelector("button")

button.addEventListener("click", async()=>{
    const users = await getUsers();

    const usersWithData = attachTransactions(users);

    console.log(usersWithData?.length ? usersWithData : "No hay datos");
})