import React, {useState, useEffect} from "react"
import axios from "axios"

export function MatchPage () {
    const [matches, setMatches] = useState([])

    const getMatches = async () => {
        try{
            const res = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/pedro-vitor/matches")
            setMatches(res.data.matches)
        } catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        getMatches()
    }, [])

    return(
        <div>
            <img src={matches.photo}/>
            <p>{matches.name}</p>
        </div>
    )
}