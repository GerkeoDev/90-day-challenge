export const generateTransactions = () => {
    const types = ["income", "expense"]

    const randomAmount = () => Math.floor(Math.random() * 1000) + 50;

    const randomType = () => types[Math.floor(Math.random() * types.length)];

    const randomCategory = () => {
        const categories = ["food", "salary", "rent", "transport", "freelance"];
        return categories[Math.floor(Math.random() * categories.length)];
    };

    return Array.from({ length: 5}).map(() => ({
        type: randomType(),
        amount: randomAmount(),
        category: randomCategory(),
    }));
};