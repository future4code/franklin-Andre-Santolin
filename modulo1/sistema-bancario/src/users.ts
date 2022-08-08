type Payments = {
    valuePayments: number,
    date: Date | string,
    description: string
}


export type User = {
    id: number,
    name: string,
    cpf: string,
    dateOfBirth: string | Date,
    balance: number,
    extract: Payments[]
}

 export let users: User[] = [
    {
        id: 1,
        name: "Alice",
        cpf: "125-256-456-12",
        dateOfBirth: "12/03/1997",
        balance: 100.00,
        extract: [
            {
                valuePayments: 0.00,
                date: "",
                description: ""
            }
        ]
    },
    {
        id: 2,
        name: "Ana",
        cpf: "125-256-456-13",
        dateOfBirth: "12/03/1980",
        balance: 0.00,
        extract: [
            {
                valuePayments: 50.00,
                date: "12/10/2019",
                description: "compras no supermercado"
            }
        ]
    },
]