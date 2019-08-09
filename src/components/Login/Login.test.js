import React from "react";
import { mount } from "enzyme";
import Login from "./Login";

describe("Login Tests", () => {
  let component;
  let testFunction;
  let event = {};

  beforeEach(() => {
    /* 
        we can create and spy on 'mock' functions using 
        jest.fn() in order to see how and when they're called
        */
    testFunction = jest.fn();
    component = mount(<Login />);
  });

  it("should call the function", () => {
    // expect(testFunction).toHaveBeenCalledTimes(0);
    component.find("button").simulate("click", event);
    // expect(testFunction).toHaveBeenCalledTimes(1);
  });
});
