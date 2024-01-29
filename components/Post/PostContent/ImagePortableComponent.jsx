import React from "react";
import Image from "next/image";
import { urlForImage } from "@sanity/lib/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@components/ui/tooltip";

const ImagePortableComponent = ({ value }) => {
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
              height={value?.imageHeight || 700}
              width={value?.imageWidth || 700}
              style={{ objectFit: "contain" }}
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
