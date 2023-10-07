import React , { useState} from "react";
import CreateChapter from "./CreateChapter";
import "./Adminpanel.css";
import UpdateChapter from "./UpdateChapter";

function AdminpanelController({name}) {
 
  const [ onCreate , setOnCreate] = useState(false)
  const [ onUpdate  , setOnUpdate] = useState(false)

if(onCreate){
  return(
    <CreateChapter/> 
  )
}
if(onUpdate){
  return (
    <UpdateChapter/>
  )
}
else{
  return ( 

    <div className="bigbox">
    <div className="buttondiv">
      <h1>Hii {name} , 
      Welcome to Geeta Adminpanel</h1>
      <button onClick={()=>setOnCreate(true)}>Create</button>
      <button onClick={()=>setOnUpdate(true)}>Update</button>
    </div>
  </div>
  )
}
 
}

export default AdminpanelController;
