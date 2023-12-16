import { PlacemarkData } from "type";
import Bank from "assets/svg/logo.svg";
import ATM from "assets/svg/atm.svg";

export const ymapQurey = {
  apikey: import.meta.env.VITE_API_MAP_KEY,
  lang: "en_RU" as const,
  load: "package.full",
};

export const mapState = {
  center: [53.9, 27.57],
  zoom: 9,
  controls: ["zoomControl", "fullscreenControl"],
};

export const mapModules = ["control.ZoomControl", "control.FullscreenControl"];

const defPlacemarkOptions = {
  iconLayout: "default#image",
  iconImageSize: [30, 42],
  iconImageOffset: [-5, -38],
};

export const placemarks: Record<string, PlacemarkData> = {
  banks: {
    coords: [
      [53.9, 27.57],
      [54.0, 27.0],
      [52.8, 27.52],
    ],
    props: {
      balloonContent: "<p>Bank</p><p>9:00-18:00</p>",
      hintContent: "Bank",
    },
    options: {
      ...defPlacemarkOptions,
      iconImageHref: Bank,
    },
  },
  atms: {
    coords: [
      [53.9, 27.56],
      [54.0, 27.1],
      [52.8, 27.53],
    ],
    props: {
      balloonContent: "<p>ATM</p><p>24/7</p>",
      hintContent: "ATM",
    },
    options: {
      ...defPlacemarkOptions,
      iconImageHref: ATM,
    },
  },
};
