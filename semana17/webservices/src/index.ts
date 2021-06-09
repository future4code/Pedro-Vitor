import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from './endpoints/login'
import addAddress from "./endpoints/getAddress";

app.post('/user/signup', createUser)
app.post('/user/login', login)
app.put('/user/edit', editUser)
app.post("/user/address", addAddress)

