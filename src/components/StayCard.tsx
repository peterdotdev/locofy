import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StayCard.module.css";

export type StayCardType = {
  brightwoodsEstate?: string;
  bridlepathOntarioCanada?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propLineHeight?: CSSProperties["lineHeight"];
};

const StayCard: FunctionComponent<StayCardType> = ({
  brightwoodsEstate,
  bridlepathOntarioCanada,
  propBackgroundImage,
  propLineHeight,
}) => {
  const symbolSortingStationStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const bridlepathOntarioCanadaStyle: CSSProperties = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  return (
    <div className={styles.staycard}>
      <div
        className={styles.symbolSortingStation}
        style={symbolSortingStationStyle}
      >
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="/superhost-icon.svg" />
          <div className={styles.superhost}>Superhost</div>
        </div>
        <div className={styles.wrapperHeartIcon}>
          <img className={styles.heartIcon} alt="" src="/hearticon-1.svg" />
        </div>
      </div>
      <div className={styles.filterFilter}>
        <div className={styles.effectEnabler}>
          <div className={styles.layerLinker}>
            <div className={styles.brightwoodsEstate}>{brightwoodsEstate}</div>
            <div
              className={styles.bridlepathOntarioCanada}
              style={bridlepathOntarioCanadaStyle}
            >
              {bridlepathOntarioCanada}
            </div>
          </div>
          <div className={styles.transparencyTuner}>
            <div className={styles.rotateRoutiner}>4.8</div>
            <img className={styles.vectorIcon1} alt="" src="/star-icon.svg" />
          </div>
        </div>
        <div className={styles.labelLabeller}>
          <div className={styles.parent}>
            <div className={styles.div}>$502</div>
            <div className={styles.night}>/night</div>
          </div>
          <img
            className={styles.labelLabellerChild}
            loading="lazy"
            alt=""
            src="/vector-11.svg"
          />
          <div className={styles.userParent}>
            <img
              className={styles.userIcon}
              loading="lazy"
              alt=""
              src="/user.svg"
            />
            <div className={styles.guests}>2 guests</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayCard;
