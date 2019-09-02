import React from "react";
import { mount } from "enzyme";
import Login from "./Login";

describe("Login Tests", () => {
  let component;
  let testFunction;

  beforeEach(() => {
    testFunction = jest.fn();
    component = mount(<Login handleClick={testFunction} />);
  });

  it("should render a button", () => {
    expect(component.find("button").length).toEqual(1);
  });

  it("should call a function on button click", () => {
    expect(testFunction).toHaveBeenCalledTimes(0);
    component.simulate("click");
    expect(testFunction).toHaveBeenCalledTimes(1);
  });
});
