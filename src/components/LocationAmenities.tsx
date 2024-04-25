import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./LocationAmenities.module.css";

const LocationAmenities: FunctionComponent = () => {
  return (
    <div className={styles.locationAmenities}>
      <div className={styles.amenitiesParent}>
        <h3 className={styles.amenities}>Amenities</h3>
        <div className={styles.frameParent}>
          <div className={styles.amenitiessection1Parent}>
            <div className={styles.amenitiessection1}>
              <div className={styles.mdilakeParent}>
                <img
                  className={styles.mdilakeIcon}
                  loading="lazy"
                  alt=""
                  src="/mdilake.svg"
                />
                <div className={styles.lakeside}>Lakeside</div>
              </div>
              <div className={styles.tablertoolsKitchen2Parent}>
                <img
                  className={styles.tablertoolsKitchen2Icon}
                  loading="lazy"
                  alt=""
                  src="/tablertoolskitchen2.svg"
                />
                <div className={styles.kitchen}>Kitchen</div>
              </div>
              <div className={styles.materialSymbolsnestCamIqOParent}>
                <img
                  className={styles.materialSymbolsnestCamIqOIcon}
                  loading="lazy"
                  alt=""
                  src="/materialsymbolsnestcamiqoutdooroutline.svg"
                />
                <div className={styles.securityCamerasOn}>
                  Security cameras on property
                </div>
              </div>
              <div className={styles.ionwifiParent}>
                <img
                  className={styles.ionwifiIcon}
                  loading="lazy"
                  alt=""
                  src="/ionwifi.svg"
                />
                <div className={styles.wifi}>Wifi</div>
              </div>
            </div>
            <div className={styles.amenitiessection2}>
              <div className={styles.phcarParent}>
                <img
                  className={styles.phcarIcon}
                  loading="lazy"
                  alt=""
                  src="/phcar.svg"
                />
                <div className={styles.freeParking}>Free parking</div>
              </div>
              <div className={styles.cilshowerParent}>
                <img
                  className={styles.cilshowerIcon}
                  loading="lazy"
                  alt=""
                  src="/cilshower.svg"
                />
                <div className={styles.outdoorShower}>Outdoor shower</div>
              </div>
              <div className={styles.materialSymbolswaterVocOutParent}>
                <img
                  className={styles.materialSymbolswaterVocOutIcon}
                  loading="lazy"
                  alt=""
                  src="/materialsymbolswatervocoutlinerounded.svg"
                />
                <div className={styles.hotWater}>Hot water</div>
              </div>
              <div className={styles.covidpersonalHygieneHandLiParent}>
                <img
                  className={styles.covidpersonalHygieneHandLiIcon}
                  loading="lazy"
                  alt=""
                  src="/covidpersonalhygienehandliquidsoap.svg"
                />
                <div className={styles.shampoo}>Shampoo</div>
              </div>
            </div>
            <div className={styles.amenitiessection3}>
              <div className={styles.phfireExtinguisherParent}>
                <img
                  className={styles.phfireExtinguisherIcon}
                  loading="lazy"
                  alt=""
                  src="/phfireextinguisher.svg"
                />
                <div className={styles.fireExtinguisher}>Fire Extinguisher</div>
              </div>
              <div className={styles.streamlinefoodKitchenwareReParent}>
                <img
                  className={styles.streamlinefoodKitchenwareReIcon}
                  alt=""
                  src="/streamlinefoodkitchenwarerefrigeratorfridgecookappliancescookingnutritionfreezerappliancefood.svg"
                />
                <div className={styles.freezer}>Freezer</div>
              </div>
              <div className={styles.materialSymbolscoffeeMakerParent}>
                <img
                  className={styles.materialSymbolscoffeeMakerIcon}
                  loading="lazy"
                  alt=""
                  src="/materialsymbolscoffeemakeroutline.svg"
                />
                <div className={styles.coffeeMaker}>Coffee Maker</div>
              </div>
              <div className={styles.mdistoveParent}>
                <img
                  className={styles.mdistoveIcon}
                  loading="lazy"
                  alt=""
                  src="/mdistove.svg"
                />
                <div className={styles.glassStove}>Glass stove</div>
              </div>
            </div>
          </div>
          <Button
            className={styles.searchFlightsButton}
            disableElevation={true}
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#171e1d",
              fontSize: "16",
              borderColor: "#171e1d",
              borderRadius: "6px",
              "&:hover": { borderColor: "#171e1d" },
              width: 185,
              height: 48,
            }}
          >
            Show all amenities
          </Button>
        </div>
      </div>
      <div className={styles.locationAmenitiesInner}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.whereYoullBeParent}>
              <h3 className={styles.whereYoullBe}>Where you’ll be</h3>
              <div className={styles.vectorParent}>
                <img className={styles.vectorIcon} alt="" src="/vector-3.svg" />
                <div className={styles.theBridlePath}>The Bridle Path</div>
              </div>
            </div>
            <div className={styles.weatherInfoParent}>
              <div className={styles.weatherInfo}>
                <img
                  className={styles.suncloudIcon}
                  loading="lazy"
                  alt=""
                  src="/suncloud.svg"
                />
                <div className={styles.weatherInfo1}>
                  <div className={styles.temperature}>20°C</div>
                  <div className={styles.weatherDetail}>Broken clouds</div>
                </div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.sunParent}>
                  <img className={styles.sunIcon} alt="" src="/sun.svg" />
                  <div className={styles.cWrapper}>
                    <b className={styles.c}>23°C</b>
                  </div>
                </div>
                <div className={styles.sunGroup}>
                  <div className={styles.sun}>Sun</div>
                  <div className={styles.aug}>27 Aug</div>
                </div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.suncloudParent}>
                  <img
                    className={styles.suncloudIcon1}
                    alt=""
                    src="/suncloud-1.svg"
                  />
                  <div className={styles.cContainer}>
                    <b className={styles.c1}>22°C</b>
                  </div>
                </div>
                <div className={styles.monParent}>
                  <div className={styles.mon}>Mon</div>
                  <div className={styles.aug1}>28 Aug</div>
                </div>
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.sunContainer}>
                  <img className={styles.sunIcon1} alt="" src="/sun.svg" />
                  <div className={styles.cFrame}>
                    <b className={styles.c2}>23°C</b>
                  </div>
                </div>
                <div className={styles.tueParent}>
                  <div className={styles.tue}>Tue</div>
                  <div className={styles.aug2}>29 Aug</div>
                </div>
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.suncloudGroup}>
                  <img
                    className={styles.suncloudIcon2}
                    alt=""
                    src="/suncloud-1.svg"
                  />
                  <div className={styles.cWrapper1}>
                    <b className={styles.c3}>20°C</b>
                  </div>
                </div>
                <div className={styles.wedParent}>
                  <div className={styles.wed}>Wed</div>
                  <div className={styles.aug3}>30 Aug</div>
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.suncloudContainer}>
                  <img
                    className={styles.suncloudIcon3}
                    alt=""
                    src="/suncloud-1.svg"
                  />
                  <div className={styles.cWrapper2}>
                    <b className={styles.c4}>19°C</b>
                  </div>
                </div>
                <div className={styles.thuParent}>
                  <div className={styles.thu}>Thu</div>
                  <div className={styles.aug4}>31 Aug</div>
                </div>
              </div>
              <div className={styles.frameParent5}>
                <div className={styles.sunParent1}>
                  <img className={styles.sunIcon2} alt="" src="/sun.svg" />
                  <div className={styles.cWrapper3}>
                    <b className={styles.c5}>24°C</b>
                  </div>
                </div>
                <div className={styles.friParent}>
                  <div className={styles.fri}>Fri</div>
                  <div className={styles.sep}>1 Sep</div>
                </div>
              </div>
            </div>
          </div>
          <img className={styles.frameChild} alt="" src="/rectangle-1@2x.png" />
          <img
            className={styles.symbolStackerIcon}
            loading="lazy"
            alt=""
            src="/frame-92.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default LocationAmenities;
