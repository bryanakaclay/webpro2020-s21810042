let account = {
    name: 'Ryan',
    expense: [],
    addExpenses(description, amount){
        account.expense.push({
            description: description,
            amount: amount
        });
    },
    getAccountSummary(){
        let totalExpense = 0;
        account.expense.forEach((totalbiaya)=>{
            totalExpense = totalExpense + totalbiaya.amount;
        });
        return totalExpense;
    }
};
account.addExpenses("Beli Tandon", 300000);
account.addExpenses("Beli Nasi Padang", 50000);
console.log("Total pengeluaran " + account.name + " adalah Rp." + account.getAccountSummary());