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
  borderRadius = 0,
}) => {
  if (!value?.asset?._ref) {
    return value;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <div className="flex flex-col items-center justify-center">
          <TooltipTrigger>
            <Image
              loading="lazy"
              src={urlForImage(value)}
              alt="alt"
              objectFit="contain"
              height={imageHeight}
              width={imageWidth}
              style={{
                // objectFit: "contain",
                objectFit: "fill",
                width: "auto",
                height: "auto",
                borderTopLeftRadius: borderRadius,
                borderTopRightRadius: borderRadius,
              }}
            />
          </TooltipTrigger>
        </div>
        <TooltipContent>
          <p>{value.alt}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ImagePortableComponent;
