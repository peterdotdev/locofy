import { FunctionComponent } from "react";
import styles from "./SocialMediaLogin.module.css";

export type SocialMediaLoginType = {
  orSignUpWith?: string;
  image?: string;
  image1?: string;
  image2?: string;
};

const SocialMediaLogin: FunctionComponent<SocialMediaLoginType> = ({
  orSignUpWith,
  image,
  image1,
  image2,
}) => {
  return (
    <div className={styles.socialMediaLogin}>
      <div className={styles.orSignUp}>{orSignUpWith}</div>
      <div className={styles.socialLoginContainer}>
        <div className={styles.socialLogin}>
          <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
          <div className={styles.input}>Google</div>
        </div>
        <div className={styles.socialLogin1}>
          <img className={styles.imageIcon1} alt="" src={image1} />
          <div className={styles.text}>Facebook</div>
        </div>
        <div className={styles.socialLogin2}>
          <img className={styles.imageIcon2} alt="" src={image2} />
          <div className={styles.text1}>Apple</div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaLogin;
