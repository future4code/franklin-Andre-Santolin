import express, {Request, Response} from 'express';
import cors from 'cors';
import { users, User } from './users'
import { error } from 'console';

const app = express();

app.use(express.json());
app.use(cors());


app.get("/users", (req: Request, res: Response): void =>{
    
    try{
        res.status(200).send(users);
    }catch(error){
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});


app.get("/users/query", (req: Request, res: Response) => {

    let errorCode: number = 400
    const name = req.query.name
    const cpf = req.query.cpf

    try{

        const user = users.find((u) => u.name === name && u.cpf === cpf) 

        if (!user) {
            errorCode = 401
            throw new Error()
        }

        res.status(200).send(`Seu saldo é no valor de ${user.balance}`);
        
    }catch(error){
        res.status(400).send({
            message: `Error searching for balance ${errorCode}`

        });
    }
})


app.get("/users/:cpf", (req: Request, res: Response) => {

    let errorCode: number = 400
    const cpf = req.params.cpf

    try{

        const user = users.find((u) => u.cpf === cpf) 

        if (!user) {
            errorCode = 401
            throw new Error()
        }

        res.status(200).send(`Seu saldo é no valor de ${user.balance}`);
        
    }catch(error){
        res.status(400).send({
            message: `Error searching for balance ${errorCode}`

        });
    }
})


app.post("/users", (req: Request, res: Response): void=>{
    let errorCode: number = 400

    try{
        const {id, name, cpf, dateOfBirth, balance, valuePayments, date, description} = req.body;

        const myDate: Date = new Date()

        const [day, month, year] = dateOfBirth.split("/")

        const dateBirth: Date = new Date(`${year}-${month}-${day}`)

        const ageInMilisseconds: number = myDate.getTime() - dateBirth.getTime()

        let ageInYears: number | any  = ageInMilisseconds / 1000 / 60 / 60 / 24 / 365  
        
        if (ageInYears.toFixed(2) < 18 ) {
            errorCode = 401
            throw new Error("idade minima 18 anos")
        }
        
        const user: User = {
            id,
            name,
            cpf,
            dateOfBirth,
            balance,
            extract: [
                {
                    valuePayments,
                    date,
                    description
                }
            ]
        }
        const findCpf: User[] | undefined | any = users.find((u) => u.cpf !== cpf )
        if (findCpf === user.cpf) {

            users.push(user);
            res.status(200).send({message: "User created successfully"});
    
        } else {
            errorCode = 402
            throw new Error()
        }
        
    }catch(error){
        res.status(400).send({
            message: `Error inserting for users ${errorCode}`
        });
    }
})


// app.put("/users/:id/add-balance", (req: Request, res: Response): void=>{
//     let errorCode: number = 400

//     try{

//         if(!req.headers.authorization){
//             errorCode = 401
//             throw new Error("Authorization invalid")
//         }

//         const {name, cpf, valuePayments, description, date} = req.body;

//         const userIndex: number = users.findIndex(
//             (u) => u.id === Number(req.params.id)
//         )

//         const saldo = users[userIndex].balance

//         // const dateNow: Date = new Date()

//         if(userIndex === -1) {
//             throw new Error()
//         }

//         if(users[userIndex].name !== name || users[userIndex].cpf !== cpf) {
//             errorCode = 404
//             throw new Error()
//         }
        
//         users[userIndex].name = name
//         users[userIndex].cpf = cpf
//         users[userIndex].balance += valuePayments
//         users[userIndex].extract.push(
//             {
//                 valuePayments,
//                 date,
//                 description
//             }

//         )


//         res.status(200).send({message: "Dinheiro adicionado com sucesso"});
//     }catch(error){
//         res.status(400).send({
//             message: `Valores de CPF ou nome diferentes do cadastro ${errorCode}`
//         });
//     }
// })

app.put("/users/:id/add-balance", (req: Request, res: Response): void=>{

    let errorCode: number = 400

    try{

        if(!req.headers.authorization){
            errorCode = 401
            throw new Error("Authorization invalid")
        }

        const { date, valuePayments, description } = req.body;

        const userIndex: number = users.findIndex(
            (u) => u.id === Number(req.params.id)
        )

        const saldo = users[userIndex].balance

        const dateNow: Date = new Date()

        if(userIndex === -1) {
            errorCode = 404
            throw new Error("id não encontrado")
        }
       
        if(date < dateNow){
            errorCode = 403
            throw new Error()
        }
        if( description !== "Deposito em dinheiro") {
            throw new Error()
        }
            users[userIndex].balance += valuePayments
            users[userIndex].extract.push(
            {
                valuePayments,
                date: dateNow,
                description
            }
        )
        console.log(valuePayments, saldo)
        res.status(200).send({message: "Dinheiro depositado com sucesso"});
        
    }catch(error){
        res.status(400).send({
            message: `request invalide ${errorCode}`
        })
    }
})


app.put("/users/:id/pay", (req: Request, res: Response): void=>{

    let errorCode: number = 400

    try{

        if(!req.headers.authorization){
            errorCode = 401
            throw new Error("Authorization invalid")
        }

        const { date, valuePayments, description } = req.body;

        const userIndex: number = users.findIndex(
            (u) => u.id === Number(req.params.id)
        )

        const saldo = users[userIndex].balance

        const dateNow: Date = new Date()

        if(userIndex === -1) {
            errorCode = 404
            throw new Error("id não encontrado")
        }
       
        if(date < dateNow){

        }
        if (saldo >= valuePayments) {

            users[userIndex].balance -= valuePayments
            users[userIndex].extract.push(
            {
                valuePayments,
                date: dateNow,
                description
            }
            )
        console.log(valuePayments, saldo)
        res.status(200).send({message: "pagamento realizado com sucesso"});

        }else {
            errorCode = 402
            throw new Error("saldo insuficiente")
        }
        
    }catch(error){
        res.status(400).send({
            message: `request invalide ${errorCode}`
        })
    }
})


app.listen(3003, () => {
    console.log("servidor pronto")
})