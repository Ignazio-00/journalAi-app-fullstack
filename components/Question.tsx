'use client'

import { useState } from 'react'

const Question = () => {
  const [value, setValue] = useState('')
  const onChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={onChange}
          value={value}
          type="text"
          placeholder="Ask me a Question"
          className="border border-black/10 rounded-md px-4 py-2 text-lg"
        />
        <button
          type="submit"
          className="bg-sky-500 text-white px-2 py-2 rounded-lg text-lg"
        >
          Ask
        </button>
      </form>
    </div>
  )
}

export default Question
