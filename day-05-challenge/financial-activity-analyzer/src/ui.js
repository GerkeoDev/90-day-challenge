export const renderUsers = (users, container) => {
    container.innerHTML = users.map(user=>{
        return `
            <div class="card">
                <h2>${user.name}</h2>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Income:</strong> ${user.income}</p>
                <p><strong>Expenses:</strong> ${user.expenses}</p>
                <p><strong>Balance:</strong> ${user.balance}</p>

                <p><strong>Biggest Expense:</strong> 
                    ${user.biggestExpense.amount}
                    (${user.biggestExpense.category})
                </p>

                <p><strong>High Expense:</strong> 
                    ${user.hasHighExpense ? "⚠️ YES" : " ✅ NO"}
                </p>
            </div> 
        `;
    }).join("");
};

