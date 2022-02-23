import React from 'react'
import { useState } from 'react'
import Todo from './Todo'

export default function UseRefExample3(){
  const [showTodo, setShowTodo] = useState(true)
  return (
    <div className="mt-5">
      {showTodo && <Todo />}
      <button className="btn btn-primary" onClick={() => setShowTodo(!showTodo)}>Toggle Todo</button>
    </div>
  )
}