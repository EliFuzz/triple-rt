import React from "react";
import { render } from "@testing-library/react";

import Page from "Pages/Home/Components/Page";
import { Props } from "Pages/Home/Components/Page";

describe("About", () => {
  it("renders header text", () => {
    const props: Props = {
      counter: 0,
      add: () => {},
      subtract: () => {}
    };
    const { getByText } = render(<Page {...props} />);
    expect(getByText("Home")).not.toBe(null);
  });
});
