import React from 'react'
import reactDom from 'react-dom'
import Todo from './components/Todo'
let App=()=>{
  return(
    <React.Fragment> 
    <Todo/>
    </React.Fragment>)
}
reactDom.render(<App/>,document.getElementById('root'));