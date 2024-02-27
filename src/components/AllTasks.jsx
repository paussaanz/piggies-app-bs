import TaskBar from "./TaskBar";

const AllTasks = () => {
    return (
        <div>
            <h1>All tasks</h1>
            <div className="d-flex flex-column row-gap-3">

                <TaskBar
                    number="03"
                    title="Marketing"
                    value="Marketing"
                    name="service"
                    id="service"
                    type="checkbox" />
                <TaskBar
                    number="03"
                    title="Marketing"
                    value="Marketing"
                    name="service"
                    id="service"
                    type="checkbox" />
                <TaskBar
                    number="03"
                    title="Marketing"
                    value="Marketing"
                    name="service"
                    id="service"
                    type="checkbox" />

            </div>
        </div>
    );
};

export default AllTasks;