// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function TaskAltIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 45 45"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M41.25 9.713L19.856 31.124l-7.95-7.95 2.644-2.644 5.306 5.306 18.75-18.75 2.644 2.626zm-4.144 9.45c.244 1.068.394 2.193.394 3.337 0 8.288-6.712 15-15 15-8.287 0-15-6.712-15-15 0-8.287 6.713-15 15-15 2.962 0 5.7.863 8.025 2.344l2.7-2.7A18.562 18.562 0 0022.5 3.75c-10.35 0-18.75 8.4-18.75 18.75s8.4 18.75 18.75 18.75 18.75-8.4 18.75-18.75c0-2.231-.413-4.369-1.125-6.356l-3.019 3.019z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TaskAltIcon;
/* prettier-ignore-end */
