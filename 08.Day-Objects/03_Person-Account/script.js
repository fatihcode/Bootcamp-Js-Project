const personAccount = {
    firstName: 'Walter',
    lastName: 'Walt',
    incomes: [200, 100, 300, 550, 1000],
    expenses: [400, 150, 200, 30, 60],
    totalIncome() {
        return this.incomes.reduce((a, b) => a + b, 0)
    },
    totalExpense() {
        return this.expenses.reduce((a, b) => a + b, 0)
    },
    addIncome(val) {
        this.incomes.push(val)

    },
    addExpenses(val) {
        this.expenses.push(val)
    },
    accountInfo() {
        let total = this.totalIncome() - this.totalExpense()
        return `Toplam Net Gelir ${total}$`
    },
}



console.log(personAccount.accountInfo())

personAccount.addIncome(600)

personAccount.addExpenses(200)

console.log(personAccount.accountInfo())