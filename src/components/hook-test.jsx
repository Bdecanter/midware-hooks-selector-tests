import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export const HookTest = () => {
    const [age, setAge] = useState(10)
    const [name, setName] = useState("Ben")

    useEffect(() => {
        if(age < 18){
            document.title = 'Mineurrrr'
        } else {
            document.title = 'Majeur'
        }
    })

    useEffect(() => {
        switch(age) {
            case 18:
                alert("Vous etes Majeurs ! Bravo !")
                break
            case 30:
                alert("L'age de raison ? non ?")
                break
            case 40:
                alert("La crise de la quarantaine !")
                break
            default:

        }
    })

    return (
        <div>
            <p>
                Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>

            </p>
            <button onClick={(e) => setAge(age !== 80 ? age + 1 : age)}>+</button>
            <button onClick={(e) => setAge(age !== 0 ? age - 1 : age)}>-</button>
            Name : {name} , Age : {age}
        </div>
    )
}

HookTest.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}
