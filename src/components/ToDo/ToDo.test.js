import React from "react";
import { mount } from "enzyme";
import ToDo from "./ToDo";

describe("ToDo Tests", () => {
  let component;
  let testFunction;

  beforeEach(() => {
    testFunction = jest.fn();
    component = mount(<ToDo handleClick={testFunction} />);
  });

  it("should render an input field", () => {
    expect(component.find("input").length).toEqual(1);
  });
});
