import { Marker, Popup } from "react-leaflet";
//@ts-ignore
import { divIcon } from "leaflet";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomSlider from "./CustomSlider";

interface CustomMarkerProps {
  position: number[];
  imageUrls: string[];
}

const CustomMarker = ({ position, imageUrls }: CustomMarkerProps) => {
  const customIcon = divIcon({
    className: "custom-icon",
    html: `
        <div class="marker">
          <div class="marker-icon">
            <img
              src="${imageUrls[0]}" /
              alt="Custom Marker"
            />
          </div>
          <div class="marker-beak"></div>
        </div>
      `,
    iconSize: [50, 50],
    iconAnchor: [25, 50],
  });

  return (
    //@ts-ignore
    <Marker position={position} icon={customIcon}>
      <Popup
        //@ts-ignore
        className="request-popup"
        autoPanPadding={[-55, 10]}
        interactive
      >
        <CustomSlider imageUrls={imageUrls} />
        <div style={{ width: 500 }}></div>
      </Popup>
    </Marker>
  );
};

export default CustomMarker;
