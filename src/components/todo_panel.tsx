import Task from "./task";
import { useState } from "react";

function TodoPanel() {
    const [task_arr,  setTask] = useState<string[]>([])
    const [done_arr, setDone] = useState<string[]>([])
    const [input, setInput] = useState('')

    const addTask = () => {
        if (input.trim() === '') {
            alert('Task cannot be empty')
            return
        }
        setTask([input, ...task_arr])
        setInput('')
    }

    const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        /* check pressing enter key here */
        if (ev.key === 'Enter') {
            addTask()
        }
    };

    const onDel = (id: number) => {
        setTask(task_arr.filter((_, i) => i !== id))
    }

    const onDone = (id: number) => {
        setDone([task_arr[id], ...done_arr])
        setTask(task_arr.filter((_, i) => i !== id))
    }


    return (
        <div className="mx-auto max-w-4xl">
            <div className="flex space-x-1">
                <input
                    value = {input}
                    className="border border-gray-400 w-full text-2xl"
                    onKeyDown={onKeyDownCallback}
                    onChange={ev => setInput(ev.target.value)}
                ></input>
                <button 
                    onClick={addTask}
                    className="border border-gray-400 w-8 font-bold">
                    +
                </button>
            </div>

            {/* tasks section */}
            <div>
                {task_arr.map((val, i) => <Task key={i} val={val} id={i} done={false} onDel={onDel} onDone={onDone}/>)}
                {done_arr.map((val, i) => <Task key={i} val={val} id={i} done={true}/>)}
            </div>
        </div>
    );
}

export default TodoPanel;
