import React from "react";
import { render } from "@testing-library/react";

import Page from "Pages/About/Components/Page";

describe("About", () => {
  it("renders header text", () => {
    const { getByText } = render(<Page />);
    expect(getByText("About")).not.toBe(null);
  });
});
