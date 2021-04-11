import React, {useState} from "react"
import {MainPage} from "./pages/MainPage"
import {MatchPage} from "./pages/MatchPage";

const App = () => {
    const [page, setPage] = useState(true)

    const screenRender = () => {
        if (page === true) {
            return <MainPage/>
        } else {
            return <MatchPage/>
        }
    }

    const nextPage = () => {
        if (page === true) {
            setPage(false)
        } else {
            setPage(true)
        }
    }


    return (
        <div>
            {screenRender()}
            <button onClick={nextPage}> Change Page</button>
        </div>
    )
}

export default App