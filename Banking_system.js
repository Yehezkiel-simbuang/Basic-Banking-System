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
            alert(error);
        }
    }
}

let bankAccount = new BankAccount();

const DEPOSIT = () => {
    try {
        let inc = parseInt(window.prompt("Masukkan jumlah yang ingin ditambahkan"));
        const saldo = bankAccount.deposit(inc);
        if (typeof saldo !== "undefined") {
            setTimeout(() => {
                document.getElementById("saldo").textContent = saldo
            }, 1000);
        }
    } catch (error) {
        alert(error);
    }
}

const WITHDRAW = () => {
    try {
        let dec = parseInt(window.prompt("Masukkan jumlah yang ingin diambil"));
        const saldo = bankAccount.withdraw(dec);
        if (typeof saldo !== "undefined") {
            setTimeout(() => {
                document.getElementById("saldo").textContent = saldo
            }, 1000);
        }
    } catch (error) {
        alert(error);
    }
}