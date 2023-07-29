import React from "react";
import { render, screen } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

describe("Navigation Bar is functional", () => {
  it("gets value from parent", () => {
    render(<SearchBar formHandler={jest.fn()} username={"khanchenkov"} setUsername={jest.fn()} />);
    const input = screen.getByTestId("search-bar");
    expect(input).toBeInTheDocument();
    expect(input.value).toBe("khanchenkov");
  });
});
