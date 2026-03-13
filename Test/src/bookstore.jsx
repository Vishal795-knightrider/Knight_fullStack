import {useState} from "react";

export default function Book(){

    const [item,setItem]=useState("");
    const [items,setItems]=useState([]);

    function handleSubmit(e){
        e.preventDefault();

        const value=item.trim();

        if(value===""){
            alert("Book Name can not be empty");
            return;
        }

        const exists=items.some(
            (i)=>i.name.toLowerCase()===value.toLowerCase()
        );

        if(exists){
            alert("Book already exists");
            return;
        }

        setItems((prev)=>[
            ...prev,
            {name:value,completed:false}
        ]);

        setItem("");
    }

    function status(index){
        setItems((prev)=>
            prev.map((i,idx)=>
                idx===index
                ? {...i,completed:!i.completed}
                : i
            )
        );
    }

    function handleDelete(index){
        setItems((prev)=>
            prev.filter((_,i)=>i!==index)
        );
    }

    return(
        <>
        <h1>BOOK READING TRACKER</h1>

        <form onSubmit={handleSubmit}>

            <input
            type="text"
            placeholder="Enter Your Book name"
            value={item}
            onChange={(e)=>setItem(e.target.value)}
            />

            <button type="submit">
                ADD BOOK
            </button>

        </form>

        <ul>
            {items.map((i,idx)=>(
                <li key={idx}>

                    <span>
                        {i.name} -
                        {i.completed ? "Completed":"Reading"}
                    </span>

                    <button onClick={()=>status(idx)}>
                        {i.completed
                        ? "Mark Reading"
                        : "Mark Completed"}
                    </button>

                    <button
                     onClick={()=>handleDelete(idx)}
                    >
                        DELETE
                    </button>

                </li>
            ))}
        </ul>

        </>
    );
}