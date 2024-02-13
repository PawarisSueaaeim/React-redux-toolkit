import { CardContainer } from "@/common/card";
import Image from "next/image";
import React from "react";

type Props = {};

export default function AboutUs({}: Props) {
  return (
    <div className="pt-40 pb-10 px-10">
      <CardContainer>
        <div className="relative h-80">
          <Image
            src="/image/map.png"
            alt="map"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="p-10">
          <span className="text-wrap">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium similique perspiciatis, error magnam aperiam incidunt
            tempore quibusdam nemo esse minus! Aut vero veritatis accusantium
            praesentium itaque eum, omnis dignissimos animi?
          </span>
        </div>
        <div className="p-10">
          <span className="text-wrap">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            commodi iste, quo blanditiis perferendis nesciunt, veniam qui hic
            numquam modi rem itaque, fugit quisquam sit pariatur dolores
            necessitatibus alias omnis!
          </span>
        </div>
        <div className="relative h-80">
          <Image
            src="/image/map.png"
            alt="map"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </CardContainer>
    </div>
  );
}
