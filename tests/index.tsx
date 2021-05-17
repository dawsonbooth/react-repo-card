import React from "react";
import RepoCard from "../src";

import { render, waitFor } from "@testing-library/react";

import fetch from "node-fetch";

global.fetch = fetch;

it("RepoCard", async () => {
  const { container } = render(
    <div>
      <RepoCard username="dawsonbooth" repository="ascii-art" />
    </div>
  );
  await waitFor(
    () => {
      expect(container.textContent).toContain("ascii-art");
      expect(container.textContent).toContain(
        "ASCII art generator with several parameters"
      );
      expect(container.textContent).toContain("Python");
    },
    {
      container
    }
  );
});
