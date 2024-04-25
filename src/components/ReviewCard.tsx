import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ReviewCard.module.css";

export type ReviewCardType = {
  ellipse12?: string;
  johnnyCash?: string;
  june2023?: string;
  prop?: string;
  michellesPlaceWasSoGreatA?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const ReviewCard: FunctionComponent<ReviewCardType> = ({
  ellipse12,
  johnnyCash,
  june2023,
  prop,
  michellesPlaceWasSoGreatA,
  propMinWidth,
  propMinWidth1,
}) => {
  const johnnyCashStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const june2023Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={styles.reviewcard}>
      <div className={styles.colorCombinerParent}>
        <div className={styles.colorCombiner}>
          <img
            className={styles.colorCombinerChild}
            loading="lazy"
            alt=""
            src={ellipse12}
          />
          <div className={styles.rotationRotator}>
            <div className={styles.johnnyCash} style={johnnyCashStyle}>
              {johnnyCash}
            </div>
            <div className={styles.june2023} style={june2023Style}>
              {june2023}
            </div>
          </div>
        </div>
        <div className={styles.layerLaunder}>
          <div className={styles.anchoringAnchor}>{prop}</div>
          <img
            className={styles.contrastControllerIcon}
            alt=""
            src="/vector-1.svg"
          />
        </div>
      </div>
      <div className={styles.michellesPlaceWas}>
        {michellesPlaceWasSoGreatA}
      </div>
    </div>
  );
};

export default ReviewCard;
