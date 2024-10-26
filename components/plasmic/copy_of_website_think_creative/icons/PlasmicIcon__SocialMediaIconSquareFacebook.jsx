// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SocialMediaIconSquareFacebookIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.313 18.395v-8.21h2.895l.434-3.2H7.313V4.942c0-.927.27-1.558 1.666-1.558l1.78-.001V.521A25.004 25.004 0 008.165.395c-2.566 0-4.322 1.491-4.322 4.23v2.36H.94v3.2h2.903v8.21h3.47z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SocialMediaIconSquareFacebookIcon;
/* prettier-ignore-end */
