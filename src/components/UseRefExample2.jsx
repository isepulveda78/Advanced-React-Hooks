import React from 'react'
import { useState, useEffect, useRef } from 'react'

export default function UseRefExample2(){
  const prevName = useRef('')
  const [name, setName] = useState('')
  const renders = useRef(1)

  useEffect(() => {
    renders.current = renders.current + 1
    prevName.current = name
  }, [name])
  return (
    <div>
      <h1>Renders: {renders.current}</h1>
      <h2>Prev Name State: {prevName.current}</h2>
      <input 
        tpye="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        className="form-control mb3" />
    </div>
  )
}