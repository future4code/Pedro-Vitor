import { AddressInfo } from "net";
import express, {Express} from "express"
import cors from "cors"

const app: Express = express();

app.use(express.json());
app.use(cors());

app.put("/user", (req , res) => {
    try {

    } catch (error) {
        res
            .status(400)
            .send({message: error.message})
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});