import React from "react"

import style from "./content.module.css"

const Content = ({ from, to, message }) => {
  return (
    <dl className={style.container}>
      <dt className="visually-hidden">To</dt>
      <dd className={style.to}>Dag {to}</dd>
      <dt className="visually-hidden">Message</dt>
      <dd className={style.message}>De volgende keer word je getrakteerd op {message}</dd>
      <dt className="visually-hidden">From</dt>
      <dd className={style.to}>Liefs {from}</dd>
    </dl>
  )
}

export default Content
