import React from "react"
import './App.css';

import Etapa1 from "./components/Etapa1"
import Etapa2 from "./components/Etapa2"
import Etapa3 from "./components/Etapa3"
import Etapa4 from "./components/Etapa4"

export default class App extends React.Component {
    state = {
        page: 1
    }

    screenRender = () => {
        switch (this.state.page) {
            case 1:
                return <Etapa1/>
            case 2:
                return <Etapa2/>
            case 3:
                return <Etapa3/>
            case 4:
                return <Etapa4/>
            default:
                break;
        }
    }

    nextPage = () => {
        this.setState({page: this.state.page + 1})
    }

    render() {
        return (
            <div className="App">
                {this.screenRender()}
                {this.state.page <= 3 && <button onClick={this.nextPage}> Proxima etapa </button>}
            </div>
        )
    }

}
