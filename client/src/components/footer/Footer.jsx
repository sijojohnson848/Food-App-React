import React from "react"
import classes from "./footer.module.css"
import { AiFillInstagram, AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai"


function Footer() {
  return (
    <section id="faq" className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2 className={classes.title}>Working days</h2>
          <ul className={classes.list}>
            <li>Monday - Friday</li>
            <li className={classes.workingTime}>08:00 - 22:00</li>
            <li>Saturday</li>
            <li className={classes.workingTime}>08:00 - 20:00</li>
          </ul>
        </div>
        <div className={classes.col}>
          <h2 className={classes.title}>Newsletter</h2>
          <ul className={classes.list}>
            <li>Subscribe to our newsletter</li>
            <li>Receive the latest meals</li>
            <li>Get the menu with promos</li>
            <li>Everything weekly!</li>
          </ul>
        </div>
        <div className={classes.col}>
          <h2 className={classes.title}>Social Media</h2>
          <ul className={classes.iconList}>
            <li><AiFillInstagram /></li>
            <li><AiFillFacebook /></li>
            <li><AiFillTwitterCircle /></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Footer