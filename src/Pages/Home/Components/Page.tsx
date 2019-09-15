import React, { FC } from "react";

export interface Props {
  counter: Number;
  subtract: Function;
  add: Function;
}

const Page: FC<Props> = ({ counter, subtract, add }) => (
  <div>
    <div>Home</div>
    <div>{counter}</div>
    <span onClick={() => subtract(1)}>-</span>
    <span onClick={() => add(1)}>+</span>
  </div>
);

export default Page;
