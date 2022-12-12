import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'

function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white" 
    }

   function diceIcons() {
    if(props.value === 1) {
      return  <FontAwesomeIcon icon={faDiceOne} />
    }
    else if(props.value === 2){
      return <FontAwesomeIcon icon={faDiceTwo}/>
    }
    else if(props.value === 3){
      return <FontAwesomeIcon icon={faDiceThree}/>
    }
    else if(props.value === 4){
      return <FontAwesomeIcon icon={faDiceFour}/>
    }
    else if(props.value === 5){
      return <FontAwesomeIcon icon={faDiceFive}/>
    }
    else if(props.value === 6){
      return <FontAwesomeIcon icon={faDiceSix}/>
    }
    else {
      ""
    }
   }
  
   const diceNumbers = diceIcons()

  return (
    <div className="die-face" style={styles} onClick={props.holdDice}> 
      {/* <h2 className="die-num" >{props.value}</h2>
      <FontAwesomeIcon icon={faDiceOne} /> */}

      {diceNumbers}
    </div>
  )
}

export default Die
