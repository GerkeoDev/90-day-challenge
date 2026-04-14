export const analyzeUser = (user) => {
    const transactions = user.transactions;

    const income = transactions
        .filter(t => t.type === "income")
        .reduce((sum, t) => sum + t.amount, 0);

    const expenses = transactions
        .filter(t => t.type === "expense")
        .reduce((sum, t) => sum + t.amount, 0);

    const biggestExpense = transactions
        .filter(t => t.type === "expense")
        .reduce((max, t) => (t.amount > max.amount ? t : max), transactions[0]);

    const hasHighExpense = transactions.some(t => t.amount > 800);

    const allValid = transactions.every(t => t.amount > 0);

    const balance = income - expenses;

    return{
        name: user.name,
        email: user.email,
        income,
        expenses,
        balance,
        biggestExpense,
        hasHighExpense,
        allValid
    };
};