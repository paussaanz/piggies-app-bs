import { useEffect, useState } from 'react';
import { getDoneTasks } from '../services/TaskService';
import TaskBar from "./TaskBar";

const DoneTasks = () => {

    return (
        <div>
            <h1>Done</h1>
            <div className="d-flex flex-column row-gap-3">
                {/* {forms.map((form, index) => (
                    <TaskBar
                        formId={form._id}
                        accepted={form.accepted}
                        type="checkbox"
                        value="Marketing"
                        name="service"
                        id="service" />
                ))} */}

            </div>
        </div>
    );
};

export default DoneTasks;



