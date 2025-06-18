import { useState } from "react"

const Create = () => {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [rating, setRating] = useState('')
  const [fromError, setFormError] = useState(null)
  
  return (
    <div className="page create">
      <h2>Create</h2>
    </div>
  )
}

export default Create