import './App.css'
import {useState} from "react";
import BezdarInfo from "./db/data.json"
import cls from "./components/search.module.scss"

function App() {


    const [result , setResult] = useState('')

    const [input, setInput] = useState('')

    const [sosal , setSosal] = useState('СОСАЛ?')

    const [photo , setPhoto ] = useState(false)



    const Searchcity = (input) => {
        const normolized = input.trim()

        if (!normolized) {
            setResult('')
        }
        if(BezdarInfo[normolized]) {
            setResult(BezdarInfo[normolized])
        } else {
            setResult('город не найден')
        }
    }

    const Inputchange = (e) =>  {
        setInput(e.target.value)
        Searchcity(e.target.value)
    }

    return (
        <div className='search'>
            <input type="text" value={input} onChange={Inputchange} style={{padding:'10px 20px' , borderRadius:'10px'}}/>

            {result && typeof result === 'object' && (
                <div className={cls.container}>
                    <span>{`NAME: ${input}`}</span>
                    <span>{`AGE: ${result.age}`}</span>
                    <p>{`ABOUT: ${result.about}`}</p>
                    <span>{`STRENGTH: ${result.strength}`}</span>
                    <span>{`TEAM: ${result.team}`}</span>
                    <div>
                        <button
                            style={{margin: "20px 10px"}}
                            onClick={() => setSosal('да!') + setTimeout(() => {
                                alert('увидил!')
                            },1000)}
                        >{sosal}</button>
                        <button onClick={() => setPhoto(prev => !prev)}>{photo ? 'showPhoto' : 'hidePhoto'}</button>

                        {photo && result.photo && (
                            <div className={cls.img}>
                                <a href="https://www.youtube.com/shorts/EcsU-9OpNMY">
                                    <img
                                        src={result.photo}
                                        alt={input}
                                        style={{  width: '450px', height: '350px'}}
                                    />
                                </a>

                            </div>

                        )}
                    </div>
                </div>
            )} {result && typeof result === 'string' && (
                <p>Бездарь  не найден.....</p>
        )}
        </div>
    )
}

export default App
