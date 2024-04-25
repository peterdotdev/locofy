import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/frame-9@2x.png"
        />
        <div className={styles.decisionMakerParent}>
          <img
            className={styles.decisionMakerIcon}
            loading="lazy"
            alt=""
            src="/frame-46@2x.png"
          />
          <img
            className={styles.decisionMakerIcon1}
            loading="lazy"
            alt=""
            src="/frame-47@2x.png"
          />
          <img
            className={styles.decisionMakerIcon2}
            loading="lazy"
            alt=""
            src="/frame-48@2x.png"
          />
          <img
            className={styles.decisionMakerIcon3}
            loading="lazy"
            alt=""
            src="/frame-49@2x.png"
          />
          <div className={styles.decisionMaker}>
            <img
              className={styles.variableStorageIcon}
              alt=""
              src="/variable-storage@2x.png"
            />
            <img
              className={styles.errorHandlerIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent1}>
            <div className={styles.frameParent2}>
              <div className={styles.brightwoodsCabinParent}>
                <h2 className={styles.brightwoodsCabin}>Brightwoods Cabin</h2>
                <div className={styles.bridlepathOntarioCanada}>
                  Bridlepath, Ontario, Canada
                </div>
              </div>
              <img
                className={styles.heartIcon}
                loading="lazy"
                alt=""
                src="/hearticon.svg"
              />
            </div>
            <div className={styles.frameParent3}>
              <div className={styles.parent}>
                <div className={styles.div}>5.0</div>
                <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
              </div>
              <div className={styles.reviewsWrapper}>
                <div className={styles.reviews}>200 Reviews</div>
              </div>
            </div>
          </div>
          <div
            className={styles.welcomeToOur}
          >{`Welcome to our cozy cabin retreat nestled in the heart of Bridlepath, Ontario! Surrounded by lush landscapes and tranquil trails, this charming getaway offers the perfect blend of rustic elegance and modern comfort. `}</div>
        </div>
        <div className={styles.frameParent4}>
          <div className={styles.frameParent5}>
            <div className={styles.group}>
              <b className={styles.b}>$658</b>
              <div className={styles.nightWrapper}>
                <div className={styles.night}>/night</div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.icontrendParent}>
                <div className={styles.icontrend}>
                  <div className={styles.iconParent}>
                    <img className={styles.icon} alt="" src="/icon.svg" />
                    <div className={styles.frameItem} />
                  </div>
                </div>
                <div className={styles.bestTimeToBookWrapper}>
                  <div className={styles.bestTimeTo}>Best time to Book</div>
                </div>
              </div>
            </div>
          </div>
          <Button
            className={styles.searchFlightsButton}
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#00c29f",
              borderRadius: "6px",
              "&:hover": { background: "#00c29f" },
              height: 58,
            }}
          >
            Book this home
          </Button>
        </div>
        <div className={styles.hostedByParent}>
          <div className={styles.hostedBy}>Hosted by:</div>
          <div className={styles.dataAggregatorParent}>
            <img
              className={styles.dataAggregatorIcon}
              loading="lazy"
              alt=""
              src="/ellipse-2@2x.png"
            />
            <div className={styles.michelleWardParent}>
              <div className={styles.michelleWard}>Michelle Ward</div>
              <div className={styles.joinedInMay}>Joined in May 2021</div>
            </div>
            <button className={styles.logicGate}>
              <img className={styles.vectorIcon1} alt="" src="/vector-2.svg" />
              <div className={styles.superhost}>Superhost</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
