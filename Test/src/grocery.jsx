import {useState} from "react";

export default function Grocery(){
    const [item,setItem]=useState("");
    const [list,setList]=useState([]);

    function handleSubmit(e){
        e.preventDefault();

        const value=item.trim();
        if(value==="") {
            alert("Item cannot be empty");
            return;
        }

        const exists=list.some((i)=>i.name.toLowerCase()===value.toLowerCase());

        if(exists){
            alert("item alreeady exits");
            return;
        }

        setList((prev)=>[...prev,{name:value,purchased:false}]);

        setItem("");

    }

    function status(index){
        setList((prev)=>prev.map((i,idx)=>idx==index ? {...i,purchased :!i.purchased} : i
     ));
    }

    function handleDelete(index){
        setList((prev)=>prev.filter((_,i)=>i!==index)
    );
    }



    return(
        <>
        <h1>Grocery List</h1>

        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Enter item"
            value={item}
            onChange={(e)=>setItem(e.target.value)}
            />
            <button type="submit">ADD ITEM</button>
        </form>

        <ul>
            {
                list.map((i,idx)=>(
                    <li key={idx}> 

                        <span>
                            {i.name} - {i.purchased ? "purchased": "Not purchased"}
                        </span>

                        <button onClick={()=>status(idx)}>
                            {i.purchased ? "Mark Not Purchased" : "Mark Purchaed"}
                        </button>

                        <button onClick={()=>handleDelete(idx)}>Delete</button>

                    </li>
                ))
            }
        </ul>
        </>

    );
}