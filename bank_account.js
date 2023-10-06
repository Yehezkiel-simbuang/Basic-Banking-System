class BankAccount {
    constructor () {
        this.saldo = 0;
    }
    deposit(amount) {
        try {
            if (!(/^[0-9]+$/.test(amount))) throw new Error("INPUT INVALID");
            else {
                this.saldo += amount;
                return this.saldo;
            }
        } catch (error) {
            alert(error);
        }
    }
    withdraw(amount) {
        try {
            if (!(/^[0-9]+$/.test(amount))) throw new Error("INPUT INVALID");
            else {
                if (this.saldo < amount) throw new Error("INSUFFICIENT AMOUNT");
                else {
                    this.saldo -= amount;
                    return this.saldo;
                }
            }
        } catch (error) {
            console.error(error);
        }
    }
}


