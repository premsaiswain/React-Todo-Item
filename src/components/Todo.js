import React from 'react'
import '../../src/style.css';
import Nav from './Nav';


const getlocaldata=()=>{
    const list=localStorage.getItem('myList');
    if(list){
        return JSON.parse(list);
    }
    else{
        return [{}];
    }
}
const Todo = () => {
    const [items,setItems] = React.useState("");
    const [list,setList] = React.useState(getlocaldata());
    const [edtl,setEdlt] = React.useState('');
    const [btn ,setbtn] = React.useState(false);
    React.useEffect(()=>{
        localStorage.setItem("myList",JSON.stringify(list));
    },[items]);
    const change=(e)=>{
        setItems(e.target.value)
    }
    //function that adds input items to the list
     const chg=()=>{
         if(items.length > 18 || items === ""){
           alert("Item is to big to be in the list/ nothing to add")
         }
        else if(btn){
             setList(
             list.map((curr)=>{
               if(curr.id === edtl){
                   return {...curr, name:items};
               }
               else{
                  return curr;
               }
             })
         )
         setbtn(false);  
         setItems('');
         }
         else{
         const newarr=[...list,{
             id:new Date().getTime().toString(),
             name:items
         }];
         setList(newarr);
         setItems('');}
     }
     //function that deletes the item from the list
     const delet=(id)=>{
        const newobj = list.filter((its)=>{
            return its.id !== id
        })
      setList(newobj)
       localStorage.setItem("myList",JSON.stringify(newobj));
    }
    //function that edits the list item
    const edt=(id)=>{
        const dt= list.filter((data)=>{
           return data.id === id; 
        })
         console.log(dt[0].name);
         setItems(dt[0].name);
         setEdlt(id);
         setbtn(true); 
    }
    //final return to index.js
        return (
        <>
         <Nav/>
         <div class="total">
         <div className="ip">
          <input value={items} onChange={(e)=>change(e)} placeholder="Enter a item"></input>
          <i className="fa fa-plus" style={btn?{color:'green'}:{color:'darkblue'}} onClick={()=>chg()}></i>
           </div>  
         
           {
               list.map((todos)=>{
                  if(todos.id !== 1){ 
                  return (<div className="listitem" key={todos.id}>
                  <h4>{todos.name}</h4>
                   <i className="fas fa-trash-alt" onClick={()=>delet(todos.id)}></i>
                    <i className="far fa-edit" onClick={()=>edt(todos.id)}></i>
                   </div>)}
                   else{
                       return null;
                   }
               })
              
           } </div>
        </>
    )
}

export default Todo
