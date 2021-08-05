import './utill.css'

interface taskInfo {
    val: string,
    done: boolean,
    id: number,
    onDel?: any,
    onDone?: any,
}

function Task({val, done, id, onDel, onDone}: taskInfo) {
    let text_st = 'text-2xl'

    if (done === true) {
        text_st += ' line-through'       
    }

    return (
        <div className="flex justify-between h-8 items-center py-6 border-b visibler">
            <span className={text_st}>{val}</span>
                {done === false ? 
                <div className="flex space-x-1 items-center" >
                    <button className="bg-green-400 w-24 text-2xl" onClick={() => onDone(id)}>Done</button>
                    <button className="bg-red-400 w-24 text-2xl" onClick={() => onDel(id)}>Delete</button>
                </div>
                : <div className="flex space-x-1 items-center" />
                }

        </div>
    );
}

export default Task;
