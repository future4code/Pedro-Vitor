import app from "./app";
import signup from "./endpoints/signup";
import login from "./endpoints/login";
import profile from "./endpoints/profile";
import createRecipe from "./endpoints/createRecipe";
import getProfile from "./endpoints/getProfile";
import getRecipe from "./endpoints/getRecipe";

app.post("/users/signup", signup)
app.post("/users/login", login)
app.get("/users/profile", profile)
app.get("/users/:id/profile", getProfile)
app.post("/recipe", createRecipe)
app.get("/recipe/:id", getRecipe)