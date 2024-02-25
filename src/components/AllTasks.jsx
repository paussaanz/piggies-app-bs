import TaskBar from "./TaskBar";

const AllTasks = () => {
    return (
        <div>
            <h1>All tasks</h1>
            <TaskBar
            number="03"
            title="Marketing"
            value="Marketing"
            name="service"
            id="service"
            type="checkbox"/>
        </div>
    );
};

export default AllTasks;