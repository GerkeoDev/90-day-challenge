import { generateTransactions } from "./data.js";

export const attachTransactions = (users) => {
    return users.map((user) => ({
        ...user,
        transactions: generateTransactions(),
    }));
};