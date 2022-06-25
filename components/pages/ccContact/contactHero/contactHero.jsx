
import { IoClose } from "react-icons/io5";
import Image from "next/image"
import {
  HERO_BG_ALT,
  STROKE_RED,
  WARNING,
  CRUISE_RED_LOGO,
  CONTACT_PAGE_BG,
} from "../../../../lib/constants";
import ContactForm from "../contactForm";
import styles from "./contactHero.module.scss";

const ContactHero = ({showThankYouScreen, setShowThankYouScreen}) => {

  return (
    <section className={styles.contactHeroContainer}>
      {showThankYouScreen ? (
        <div className={styles.thankYouWrapper}>
          <div
            role="button"
            tabIndex={0}
            onClick={() => setShowThankYouScreen(false)}
            onKeyPress={() => setShowThankYouScreen(false)}
            className={styles.thankYouCloseIconContainer}
          >
            <IoClose size={30} />
          </div>
          <div
            className={styles.thankYouWarningImageWrapper}
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <img
              src={WARNING}
              alt={HERO_BG_ALT}
              className={styles.thankYouWarningImage}
            />
          </div>

          <p className={styles.thankYouText}   data-aos="fade-up"
            data-aos-duration="800">Thank you </p>

          <div
            className={styles.thankYouLogoImageWrapper}
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <img
              src={CRUISE_RED_LOGO}
              alt={HERO_BG_ALT}
              className={styles.thankYouLogoImage}
            />
          </div>
        </div>
      ) : (
        <div className={styles.contactHeroWrapper}>
          <div
            className={styles.contactHeroImageWrapper}
            data-aos="fade-down-right"
            data-aos-duration="800"
          >
            <Image
              src={CONTACT_PAGE_BG}
              alt={HERO_BG_ALT}
              layout="fill"
              objectFit="contain"
              objectPosition="right center"
              quality={100}
              className={styles.contactHeroImage}
            />
          </div>
          <div
            className={styles.contactHeroImageWrapper2}
            data-aos="fade-down-left"
            data-aos-duration="1000"
          >
            <Image
              src={STROKE_RED}
              alt={HERO_BG_ALT}
              layout="fill"
              objectFit="contain"
              quality={100}
              className={styles.contactHeroImage2}
            />
          </div>
          <ContactForm setShowThankYouScreen={setShowThankYouScreen} />
        </div>
      )}
    </section>
  );
};

export default ContactHero;
