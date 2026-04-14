import {getUsers} from "./api.js"
import { attachTransactions } from "./transactions.js";
import { analyzeUser } from "./analyzer.js";
import { renderUsers } from "./ui.js";

const button = document.querySelector("button")
const output = document.querySelector("div")

button.addEventListener("click", async()=>{
    const users = await getUsers();

    const usersWithTransactions = attachTransactions(users);

    const analyzed = usersWithTransactions.map(analyzeUser)

    renderUsers(analyzed, output);
})