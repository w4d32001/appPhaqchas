import React from "react";
import { ImageDeportProps } from "./ImageDeport.type";

export default function ImageDeport(props: ImageDeportProps) {
    const {image, title} = props
  return (
    <div className="hidden xl:block">
      <img
        src={image}
        alt={title}
        className="invert brightness-200 object-cover"
      />
    </div>
  );
}
