import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import LoginPage from "../pages/Login/LoginPage";
import FeedPage from "../pages/Feed/FeedPage";
import PostPage from "../pages/Post/PostPage";
import SignUpPage from "../pages/SignUp/SignUpPage";
import ErrorPage from "../pages/Error/ErrorPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <LoginPage/>
                </Route>

                <Route exact path="/register">
                    <SignUpPage/>
                </Route>

                <Route exact path="/feed">
                    <FeedPage/>
                </Route>

                <Route exact path="/feed/post">
                    <PostPage/>
                </Route>

                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
