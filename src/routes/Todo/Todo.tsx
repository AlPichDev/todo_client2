import { useState } from "react";
import { useCreateTaskMutation, useDeleteTaskMutation, useGetTasksQuery, useUpdateTaskMutation } from "../../app/apiSlice";
import { ITask } from "../../app/types";
import { Task } from "../../components/Task/Task";

export const Todo = () => {
  let [value, serValue] = useState('')
  let { data = [], isLoading, isError } = useGetTasksQuery()
  let [createTask] = useCreateTaskMutation()
  let [updateTask] = useUpdateTaskMutation()
  let [deleteTask] = useDeleteTaskMutation()

  let handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await createTask({ description: value })
      serValue('')
    } catch (err) {
      console.log(err);
    }
  }

  let handleUpdateSubmit = async (task: ITask) => {
    try {
      await updateTask({ ...task }).unwrap()
    } catch (err) {
      console.log(err);
    }
  }

  let handleDeleteSubmit = async (id: string) => {
    try {
      await deleteTask(id).unwrap()
    } catch (err) {
      console.log(err);
    }
  }

  if (isLoading) return <h1>isLoading</h1>
  if (isError) return <h1>isError</h1>

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={e => serValue(e.target.value)} />
        <input type="submit" />
      </form>
      <ul>
        {data.map((el: ITask) => (
          <Task
            key={el.id}
            id={el.id}
            description={el.description}
            done={el.done}
            onUpdate={handleUpdateSubmit}
            onDelete={handleDeleteSubmit}
          />
        ))}
      </ul>
    </>
  )
};