import ColoredBox from "../../../../components/ColoredBox/ColoredBox";
import Container from "../../../../components/Container/Container";
import { FaEnvelope, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import ContactForm from "../../../../components/ContactForm/ContactForm";
import styles from "./ContactSection.module.scss";

const ContactSection = () => {
  return (
    <div className={styles.wrapper} id="contact">
      <Container>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>CONTACT ME</h1>
          <div className={styles.content}>
            <ContactForm />
            <div className={styles.contacts}>
              <div className={styles.contact}>
                <ColoredBox color={"#fec447"}>
                  <FaPhoneAlt />
                </ColoredBox>
                <h4>+421 917 898 084</h4>
              </div>
              <div className={styles.contact}>
                <ColoredBox color={"#feccb5"}>
                  <FaEnvelope />
                </ColoredBox>
                <h4>szozulakova@gmail.com</h4>
              </div>
              <div className={styles.contact}>
                <ColoredBox color={"#7eb6d8"}>
                  <FaLinkedinIn />
                </ColoredBox>
                <h4>Simona Zozuľaková</h4>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactSection;
