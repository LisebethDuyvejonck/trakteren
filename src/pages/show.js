import React, {useEffect, useState} from "react"


import Layout from "../components/layout"
import Content from "../components/content"

import style from "./show.module.css"
import Traktatie from "../components/traktatie"
import ShareUrl from "../components/shareUrl"
import SEO from "../components/seo"
import {useQueryParam, StringParam} from "use-query-params"

const ShowPage = ({location}) => {
  
  const [treat, setTreat] = useState(null)
  const [id] = useQueryParam("id", StringParam)

  const domain = location.origin ? location.origin : '';

  useEffect(() => {
    const getData = async () => {
      const r = await fetch(`/.netlify/functions/show?id=${id}`)
      const data = await r.json();
      setTreat(data);

    }
    getData();
  }, [id]); //alleen als de id verandert moet hij dit gaan uitvoeren

  return (
  <Layout>
    <SEO title="Home" />
    {treat ? (
      <>
    <Traktatie />
    <ShareUrl value ={`${domain}/traktatie/${id}`} />
    <Content {...treat} />
    </>
    ) : (<p className={style.show}> Je traktatie komt eraan ... </p>)}
  </Layout>
)
}

export default ShowPage
