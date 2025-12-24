import { useState } from "react";
import Card from "./componants/card"
const App = () => {
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [task , setTask] = useState([]);
  function h_Sub(e){
      e.preventDefault();
      let copy=[...task];
      copy.push({title,notes});
      setTask(copy);
      console.log(copy);

    }

  return (
    <div className="main">
      <div className="sec-1">
          <form onSubmit={h_Sub}>
              <input required className="inp" type="text" placeholder="Title"  onChange={
                (e)=>{setTitle(e.target.value)
                }
              }></input>
              <textarea required className="inp" placeholder="Notes" onChange={
                (e)=>{setNotes(e.target.value)
                  
                }
              }></textarea>
              <input className="inp sub" type="submit"></input>
          </form>
      </div>
      <div className="sec-2">
        <h1 style={{color: "white"}}>Notes</h1>
        <div className="c-container">
         {task.map(function (ele){
             return <Card title={ele.title} notes={ele.notes}/>;
          })}
            

        </div>
        </div>
    </div>
  )
}

export default App