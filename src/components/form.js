import React from "react"

import style from "./form.module.css"

const Form = () => {
  return (
    <form method="POST" action="/post" className={style.form}>
      <label htmlFor="to" className={style.wrapper}>
        <span className={style.label}>Van: </span>
        <input
          type="text"
          id="to"
          name="to"
          placeholder="Een traktatie van ..."
          className={style.text}
        />
      </label>
      <label htmlFor="message" className={style.wrapper}>
        <span className={style.label}>De volgende keer trakteer ik je op een:</span>
        <textarea
          rows="5"
          id="message"
          name="message"
          className={style.area}
          
        ></textarea>
      </label>
      <label htmlFor="from" className={style.wrapper}>
        <span className={style.label}>Voor: </span>
        <input
          type="text"
          id="from"
          name="from"
          className={style.text}
          placeholder="Deze traktatie is voor..."
        />
      </label>
      <input
        type="submit"
        value="Maak een link voor dit vuistje"
        className={style.button}
      />
    </form>
  )
}

export default Form
