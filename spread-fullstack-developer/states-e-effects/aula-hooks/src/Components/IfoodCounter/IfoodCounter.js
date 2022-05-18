import React, {useState} from 'react'
import '../IfoodCounter/IfoodCounter.css'

export default function IfoodCounter() {

  const [value, setValue] = useState(1)
  const [buttonStyle, setButtonStyle] = useState("countex-button-minus-acitve")

  function down() {

     
      if(value <= 1){
        setButtonStyle("countex-button-minus-desacitve") // mudar cor do css
    }

      if(value > 0){
        setValue(value - 1)
    }

  }

  function up() {
      setValue(value + 1)
      setButtonStyle("countex-button-minus-acitve")
  }

  return (
    <div className='countex-wrapper'>
        <button
            className={buttonStyle}
            onClick={down}
            >
            -
        </button>
        <p>{value}</p>
        <button 
            className="countex-button-plus-acitve"
            onClick={up}
            >
            +
        </button>
    </div>
  )
}
