import Head from "next/head";
import Image from "next/image";
import styles from "./index.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.navBar}>
        <div className={styles.logo}>
          <h3 className={styles.h3}>Logo</h3>
        </div>
        <div className={styles.navBarOptions}>
          <h3 className={styles.h3}>(+91)8978767894</h3>
          <h3 className={styles.h3}>Mumbai, Maharastra</h3>
          <h3 className={styles.h3}>yakshkothari5@gmail.com</h3>
        </div>
      </div>
      <div className={styles.sectionTwo}>
        <div className={styles.growBusiness}>
          <div className={styles.growBusinessHeader}>
            <h2>You can grow business with us</h2>
          </div>
          <div className={styles.growBusinessSubHeader}>
            <p>
              Power your business with the latest and advanced technology
              solutions tailored for your custom requirements
            </p>
          </div>
          <div className={styles.queryForm}>
            <div>
              <input
                className={styles.emailID}
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              ></input>
            </div>
            <div>
              <textarea
                className={styles.messageForUs}
                id="textArea"
                name="textArea"
                placeholder="Message"
              ></textarea>
            </div>
            <div>
              <button
                className={styles.submitButton}
                id="submitButton"
                name="submitButton">
                Send mail
              </button>
            </div>
          </div>
        </div>
        <div className={styles.displayImage}>
          <p>
            Image will come here Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
}
