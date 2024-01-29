import React from "react";
import Image from "next/image";
import { urlForImage } from "@sanity/lib/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@components/ui/tooltip";

const ImagePortableComponent = ({
  value,
  imageHeight = 700,
  imageWidth = 700,
}) => {
  if (!value?.asset?._ref) {
    return value;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Image
            loading="lazy"
            src={urlForImage(value)}
            alt="alt"
            height={imageHeight}
            width={imageWidth}
            style={{ objectFit: "contain" }}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>{value.alt}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ImagePortableComponent;
