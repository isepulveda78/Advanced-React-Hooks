import React from 'react'
import {useState, useEffect, useRef } from 'react'

export default function Todo(){

  const [loading, setLoading] = useState(true)
  const [todo, setTodo] = useState({})

  //to fix the memory leak
  const isMounted = useRef(true)
  
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => res.json())
    .then((data) => {
      setTimeout(() => {
        if(isMounted.current){
            setTodo(data)
            setLoading(false)
        }
      }, 3000)
    })
    //Runs when the component is unmounted
    return () => {
      isMounted.current = false
    }
  }, [isMounted])
  return loading ? <h3>Loading...</h3> : <h1>{todo.title}</h1>
}