import  {useState} from "react";

// Creating a list of tasks
function Tasks() {

    const [tasks, setTasks] = useState([
        // Task 1
        {
            id: 1,
            text: "Doctor's Appointment",
            day: "05/02/2021",
            time: "12:00",
            remainder: true
        },

        // Task 2
        {
            id: 2,
            text: "Meeting at School",
            day: "06/02/2021",
            time: "9:00",
            remainder: true
        },

        // Task 3
        {
            id: 3,
            text: "Food Shopping",
            date: "05/02/2021",
            time: "14:30",
            remainder: false
        }
    ])

    return (
        <>
            {tasks.map((task) => <h3 key={task.id}>{task.text}</h3>)}
        </>
    )
}

export default Tasks;