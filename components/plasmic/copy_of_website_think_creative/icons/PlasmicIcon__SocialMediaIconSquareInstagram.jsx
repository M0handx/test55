// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SocialMediaIconSquareInstagramIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M.85 9.395c0-3.595 0-5.393.856-6.687a5.16 5.16 0 011.456-1.456C4.457.395 6.254.395 9.85.395c3.595 0 5.392 0 6.687.857a5.16 5.16 0 011.456 1.456c.857 1.294.857 3.092.857 6.687s0 5.393-.857 6.688a5.16 5.16 0 01-1.456 1.455c-1.295.857-3.092.857-6.687.857-3.596 0-5.393 0-6.688-.857a5.16 5.16 0 01-1.456-1.456C.85 14.788.85 12.99.85 9.395zm13.659 0a4.66 4.66 0 11-9.319 0 4.66 4.66 0 019.319 0zm-4.66 3.083a3.083 3.083 0 100-6.166 3.083 3.083 0 000 6.166zm4.844-6.881a1.095 1.095 0 100-2.19 1.095 1.095 0 000 2.19z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SocialMediaIconSquareInstagramIcon;
/* prettier-ignore-end */
