export default function EventToDo()
{   
    // function handleClick(name)
    // {
    //     alert(`You Pressed Button by ${name}`);
    // }
    function handleSubmit(e){
        e.preventDefault();              //page reload na ho  same page pr hi aap krte raho
        const input=e.target.value;     //jo bhi task box me hoga vo is var me jayega tap krne pr 
        //if(input.lenght==0) return;
        const inputValue=input.trim();
        if(inputValue===""){
            alert("Task can not be empty");
            return;
        }

        const li=document.createElement("li");       //to create li  tag
        li.innerHTML=<span>${inputValue}</span>      //

    }

    return(
        <div>

            <h1>Event Handling</h1>
            {/* <button onClick={handleClick}>Click here</button> */}
            <button onClick={()=>handleClick("KIET")}>Click Me</button>

            <form onSubmit={handleSubmit}>
                <input type="text" name="task" placeholder="Add your tash here"/>
                <input type="submit">Add Task</input>
            </form>
            <ul id="taskList" onClick={handleClickList}>

            </ul>

        </div>
    );
}