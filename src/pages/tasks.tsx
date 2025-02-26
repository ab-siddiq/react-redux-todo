import { selectFilter, selectTasks } from "../redux/features/task/taskSlice"
import { useAppSelector } from "../redux/hooks"

export function Tasks(){
    const tasks = useAppSelector(selectTasks)
    console.log(tasks)
    const filter = useAppSelector(selectFilter)
    console.log(filter)
    return(
        <div>
            
        </div>
    )
}