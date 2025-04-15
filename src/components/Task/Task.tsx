import { useState } from "react";
import { ITask } from "../../app/types";
import s from "./Task.module.scss";
interface TaskProps extends ITask {
    onUpdate: (task: ITask) => void;
    onDelete: (id: string) => void;
}

export let Task = ({ id, description, done, onUpdate, onDelete }: TaskProps) => {
    let [isEditing, setIsEditing] = useState(false);
    let [editedDescription, setEditedDescription] = useState(description);

    let handleToggleDone = () => {
        onUpdate({ id, description, done: !done });
    };

    let handleEdit = () => {
        setIsEditing(true);
    };

    let handleSave = () => {
        onUpdate({ id, description: editedDescription, done });
        setIsEditing(false);
    };

    let handleDelete = () => {
        onDelete(id);
    };

    return (
        <li className={s.task}>
            <input 
                type="checkbox" 
                checked={done} 
                onChange={handleToggleDone} 
            />
            {isEditing ? (
                <input 
                    type="text" 
                    value={editedDescription} 
                    onChange={(e) => setEditedDescription(e.target.value)} 
                />
            ) : (
                <span>{description}</span>
            )}
            <div className={s.actions}>
                {isEditing ? (
                    <button onClick={handleSave}>Save</button>
                ) : (
                    <button onClick={handleEdit}>Edit</button>
                )}
                <button onClick={handleDelete}>Delete</button>
            </div>
        </li>
    );
};