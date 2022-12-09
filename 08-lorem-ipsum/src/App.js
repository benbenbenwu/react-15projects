import React, { useState } from 'react';
import data from './data';
function App() {

  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleSumbit = (e) => {
    e.preventDefault()
    let amount = count <= 0 ? 1 : count > 8 ? 8 : parseInt(count)
    setText(data.slice(0, amount))
  }

  return (
    <section className='section-center'>
      <h3>tired of boring ;orem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSumbit}>
        <label htmlFor='amout'>
          paragraphs:
        </label>
        <input type='number' name="amout" id="amout" value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='sumbit' className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => <p key={index}>{item}</p>)}
      </article>
    </section>
  )
}

export default App;
