import React from 'react'

const Nav = () => {
    const [ibtn,setIbtn]=React.useState(false);
    let dark=()=>{
     if(ibtn){
      setIbtn(false);
      return window.location.reload();
     }  
     else{
       setIbtn(true);
       return document.getElementById('hml').style.filter='hue-rotate(180deg) invert(1)';
     } 

}
    let light=()=>{
    }
    return (
        <>
         <nav className="navbar">
            <i  className={ibtn?"fas fa-sun":"fas fa-moon"} onClick={()=>dark()}></i>
         </nav> 
           <h1 style={{textAlign:'center'}}>Todo-List</h1> 
        </>
    )
}

export default Nav
