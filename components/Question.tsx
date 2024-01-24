'use client'

import { askQuestion } from '@/utils/api'
import { useState } from 'react'
import { set } from 'zod'

const Question = () => {
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState()

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const answer = await askQuestion(value)
    setResponse(answer)
    setValue('')
    setLoading(false)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          disabled={loading}
          onChange={onChange}
          value={value}
          type="text"
          placeholder="Ask me a Question"
          className="border border-black/10 rounded-md px-4 py-2 text-lg"
        />
        <button
          disabled={loading}
          type="submit"
          className="bg-sky-500 text-white px-2 py-2 rounded-lg text-lg"
        >
          Ask
        </button>
      </form>
      {loading && <div className="text-lg">Loading...</div>}
      {response && (
        <div className="mt-4">
          <div className="text-xl font-bold">Answer</div>
          <div className="text-lg">{response}</div>
        </div>
      )}
    </div>
  )
}

export default Question
