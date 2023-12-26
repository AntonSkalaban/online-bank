import React, { useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { mapModules, mapState, placemarks, ymapQurey } from "./const";
import "./style.css";

export const YMap = () => {
  const { watch } = useFormContext();
  const selectedCategoryes = watch("mapObjects") as string[];

  const mapRef = useRef<ymaps.Map | null>(null);

  useEffect(() => {
    return () => {
      const map = mapRef.current;
      map?.geoObjects.removeAll();
    };
  }, []);

  return (
    <YMaps query={ymapQurey}>
      <Map
        className="ymap"
        defaultState={mapState}
        modules={mapModules}
        instanceRef={(ref) => (mapRef.current = ref)}
      >
        {selectedCategoryes.map((cat) => {
          const { coords, props, options } = placemarks[cat];

          return coords.map((coords) => {
            return (
              <Placemark
                key={coords.join()}
                geometry={coords}
                properties={props}
                options={options}
              />
            );
          });
        })}
      </Map>
    </YMaps>
  );
};
