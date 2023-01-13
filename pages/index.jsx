import Head from "next/head";
import Image from "next/image";
import styles from "./index.module.css";
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>;

export default function Home() {
  var a;
  var b;
  var c;

  const onSendMail = () => {
    a = document.getElementsByName("email")[0];
    b = document.getElementsByName("messageForUs")[0];
    alert(`${a.value} ${b.value}`);
  };

  return (
    <div className={styles.Ariha}>
      {/* Section 1 navbar start */}
      {/* <div className={`${styles.navBar}${styles.navBar}`}> */}
      <div className={styles.navBar}>
        <div className={styles.logo}>
          <img className={styles.logoStyles} src="/Arihaa-Logo.svg"></img>
        </div>
        <div className={styles.navBarOptions}>
          <div className={styles.navBarOptionIconText}>
            <div className={styles.navBarIcon}>
              <img
                className={styles.navBarIconStyles}
                src="/CallIcon.svg"
              ></img>
            </div>
            <h3 className={styles.h3}>(+91)8978767894</h3>
          </div>
          <div className={styles.navBarOptionIconText}>
            <div className={styles.navBarIcon}>
              <img
                className={styles.navBarIconStyles}
                src="/locationIcon.svg"
              ></img>
            </div>
            <h3 className={styles.h3}>Mumbai, Maharastra</h3>
          </div>
          <div className={styles.navBarOptionIconText}>
            <div className={styles.navBarIcon}>
              <img
                className={styles.navBarIconStyles}
                src="/mailIcon.svg"
              ></img>
            </div>
            <h3 className={styles.h3}>yakshkothari5@gmail.com</h3>
          </div>
        </div>
      </div>
      {/* Section 1 navbar end */}

      {/* Section 2 start */}
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
                id="eMail"
                name="email"
                placeholder="Email"
              ></input>
            </div>
            <div>
              <textarea
                className={styles.messageForUs}
                id="textArea"
                name="messageForUs"
                placeholder="Message"
              ></textarea>
            </div>
            <div>
              <button
                className={styles.submitButton}
                id="submitButton"
                name="submitButton"
                onClick={onSendMail}
              >
                Send mail
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Section 2 end */}

      {/* Section 3 Our Process start */}
      <div className={styles.sectionThree}>
        <div className={styles.ourProcess}>
          <div className={styles.ourProcessHeader}>
            <h2>Our Process</h2>
          </div>
          <div className={styles.ourProcessSubHeader}>
            <p>
              We follow agile process with concrete deliverable guaranteed at
              each step
            </p>
          </div>
        </div>
        <div className={styles.takeRequirementRefineFurther}>
          <div className={styles.takeRequirement}>
            <img className={styles.imgClass} src="/Take Requirements.png" alt="Take Requirements"></img>
            <h4 className={styles.commonHeader}> Take requirement</h4>
            <p className={styles.commonSubHeader}>
              Gather raw requirements about your idea
            </p>
          </div>
          <div className={styles.refineFurther}>
            <img className={styles.imgClass} src="/Refine.png" alt="Refine it further"></img>
            <h4 className={styles.commonHeader}> Refine it further</h4>
            <p className={styles.commonSubHeader}>
              Refine requirements by removing noise and make them precise and
              crisp
            </p>
          </div>
        </div>
        <div className={styles.designConfirmDevelope}>
          <div className={styles.takeRequirement}>
            <img className={styles.imgClass} src="/Design&Confirm.png" alt="Design and confirm"></img>
            <h4 className={styles.commonHeader}> Design and confirm</h4>
            <p className={styles.commonSubHeader}>
              Provide you with a design prototype of how the solution will look
              and function
            </p>
          </div>
          <div className={styles.refineFurther}>
            <img className={styles.imgClass} src="/Develope(desktop).png" alt="Develop"></img>
            <h4 className={styles.commonHeader}> Develop </h4>
            <p className={styles.commonSubHeader}>
              Once confirmed, we start development in agile fashion
            </p>
          </div>
        </div>
        <div className={styles.testDeliver}>
          <div className={styles.borderRightForTest}>
            <img className={styles.imgClass} src="/Test.png" alt="Test"></img>
            <h4 className={styles.commonHeader}> Test </h4>
            <p className={styles.commonSubHeader}>
              Provide you the solution for acceptance test and assure we deliver
              what you asked for
            </p>
          </div>
          <div className={styles.noBorderForDevelope}>
            <img className={styles.imgClass} src="/Deliver.png" alt="Deliver"></img>
            <h4 className={styles.commonHeader}> Deliver </h4>
            <p className={styles.commonSubHeader}>Deliver the product</p>
          </div>
        </div>
      </div>
      {/* Section 3 our process end */}

      {/* Section 4 Our Services Start */}
      <div className={styles.sectionFour}>
        <div className={styles.ourServices}>
          <div className={styles.ourServicesHeader}>
            <h2>Our Services</h2>
          </div>
          <div className={styles.ourServicesSubHeader}>
            <p>
              We work on all kinds of IT services and are always growing our
              skill sets
            </p>
          </div>
        </div>
        <div className={styles.webDevMobDev}>
          <div className={styles.webDevelopement}>
            <img
              className={styles.imgClass}
              src="/Web Development.svg"
              alt="Web Development"
            ></img>
            <h4 className={styles.sectionFourCommonHeader}>Web Development</h4>
            <p className={styles.sectionFourCommonSubHeader}>
              Website design and development
            </p>
          </div>
          <div className={styles.mobileDevelopement}>
            <img
              className={styles.imgClass}
              src="/Mobile Development.svg"
              alt="Mobile Development"
            ></img>
            <h4 className={styles.sectionFourCommonHeader}>
              Mobile Devlopment
            </h4>
            <p className={styles.sectionFourCommonSubHeader}>
              Mobile development for native, hybrid and progressive web
              applications
            </p>
          </div>
        </div>
        <div className={styles.webDevMobDev}>
          <div className={styles.borderRightForWebDev}>
            <img
              className={styles.imgClass}
              src="/Consultation Services.svg"
              alt="Consultation Services"
            ></img>
            <h4 className={styles.sectionFourCommonHeader}>
              Consultation Services
            </h4>
            <p className={styles.sectionFourCommonSubHeader}>
              Provide consultation for all IT services
            </p>
          </div>
          <div className={styles.noBorderForMobDev}>
            <img
              className={styles.imgClass}
              src="/Enterprise Solution.svg"
              alt="Enterprise Solution"
            ></img>
            <h4 className={styles.sectionFourCommonHeader}>
              Enterprise Solutions
            </h4>
            <p className={styles.sectionFourCommonSubHeader}>
              Provide end to end solutions for your business
            </p>
          </div>
        </div>
      </div>
      {/* Section 4 Our Services End */}

      {/* Section Five Start */}
      <div className={styles.sectionFive}>
        <div className={styles.sectionFiveTop}>
          <div className={styles.sectionWorkingDays}>
            <h4 className={styles.sectionFiveCommonHeader}>Working Days</h4>
            <p className={styles.sectionFiveCommonSubHeader}>Monday-Saturday</p>
          </div>
          <div className={styles.sectionContactInfo}>
            <h4 className={styles.sectionFiveCommonHeader}>Contact Info</h4>
            <p className={styles.sectionFiveCommonSubHeader}>(+91)9769682483</p>
            <p className={styles.sectionFiveCommonSubHeader}>
              yakshkothari5@gmail.com
            </p>
            <p className={styles.sectionFiveCommonSubHeader}>
              Lalbaug, Mumbai – 400022
            </p>
          </div>
          <div className={styles.sectionGetStartedNow}>
            <h4 className={styles.sectionFiveCommonHeader}>Get started now</h4>
            <div className={styles.sectionFiveQueryForm}>
              <div>
                <input
                  className={styles.sectionFiveEmailID}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                ></input>
              </div>
              <div>
                <textarea
                  className={styles.sectionFiveMessageForUs}
                  id="textArea"
                  name="textArea"
                  placeholder="Message"
                ></textarea>
              </div>
              <div>
                <button
                  className={styles.sectionFiveSubmitButton}
                  id="submitButton"
                  name="submitButton"
                >
                  Send mail
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionFiveBottom}>
          <div className={styles.sectionFooter}>
            <p className={styles.copyright}>
              &copy; COPYRIGHT 2020 ARIHA TECHNOLOGIES. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
      {/* Section Five End */}
    </div>
  );
}
