"use client"

import classes from "@page/main/Main.module.scss";
import {Card} from "@page/main/Card/Card";
import {Form} from "@page/main/Form/Form";

export default function Home() {
  return (
    <div className={classes.Wrapper}>
      <Card/>
      <Form/>
    </div>
  )
}
