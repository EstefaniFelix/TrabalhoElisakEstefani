import React, { useState } from 'react'
function Media() {
    const [nota1, setnota1] = useState('')
    const [nota2, setnota2] = useState('')
    const [nota3, setnota3] = useState('')
    const [media, setMedia] = useState(null);

    const calcularmedia = () => {
        const resultado = (Number(nota1) + Number(nota2) + Number(nota3)) / 3
        if (resultado < 4) {
            alert("Reprovado")
        } else if (resultado > 4 && resultado < 6) {
            alert("Recuperação")
        } else if (resultado > 6) {
            alert("Aprovado")
        }
        setMedia(resultado)
    }
    return (
        <div className='Media'>
            <input type='number' value={nota1} onChange={(e) => setnota1(e.target.value)} placeholder='Digite a primeira nota' /> 
            <input type='number' value={nota2} onChange={(e) => setnota2(e.target.value)} placeholder='Digite a segunda nota' />
            <input type='number' value={nota3} onChange={(e) => setnota3(e.target.value)} placeholder='Digite a terceira nota' />
            <button onClick={calcularmedia}> Calcular media</button>
            {media !== null && <p> Resultado: {media} </p>}
        </div>
    )
}
export default Media