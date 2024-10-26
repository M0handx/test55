// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function MenuIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 56 56"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7 42v-4.667h42V42H7zm0-11.667v-4.666h42v4.666H7zm0-11.666V14h42v4.667H7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MenuIcon;
/* prettier-ignore-end */
