import {generateId} from "./services/idGenerator"
import {createUser} from "./data/createUser"
import app from "./app"

console.log(generateId())
app.post("/user/signup", createUser)