import React from 'react'
import { TODO } from '../../model'
import Card from '../Card/card'
import './todoList.css'

interface Props {
  TODOS: TODO[],
  setTODOS: React.Dispatch<React.SetStateAction<TODO[]>>
}

const TodoList: React.FC<Props> = ({ TODOS, setTODOS }) => {

  
  return (
    <div className='todos'>
      {TODOS.map((todo) => (
        <Card key={todo.id} todo={todo} TODOS={TODOS} setTODOS={setTODOS}/>
      ))}
    </div>
  )
}

export default TodoList