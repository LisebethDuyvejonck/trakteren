import React from "react"

import style from "./form.module.css"

const Form = () => {
  return (
    <form method="POST" action="/post" className={style.form}>
      <label htmlFor="from" className={style.wrapper}>
        <span className={style.label}>Van: </span>
        <input
          type="text"
          id="from"
          name="from"
          placeholder="Een traktatie van ..."
          className={style.text}
        />
      </label>
      <label htmlFor="message" className={style.wrapper}>
        <span className={style.label}>De volgende keer trakteer ik je op:</span>
        <textarea
          rows="5"
          id="message"
          name="message"
          className={style.area}
          
        ></textarea>
      </label>
      <label htmlFor="to" className={style.wrapper}>
        <span className={style.label}>Aan: </span>
        <input
          type="text"
          id="to"
          name="to"
          className={style.text}
          placeholder="Deze traktatie is voor..."
        />
      </label>
      <input
        type="submit"
        value="Maak een link voor deze traktatie"
        className={style.button}
      />
    </form>
  )
}

export default Form
