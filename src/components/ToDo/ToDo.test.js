import React from "react";
import { mount } from "enzyme";
import ToDo from "./ToDo";

describe("ToDo Tests", () => {
  let component;
  let testFunction;
  // let event = {};

  beforeEach(() => {
    /* 
        we can create and spy on 'mock' functions using 
        jest.fn() in order to see how and when they're called
        */
    testFunction = jest.fn();
    component = mount(<ToDo handleClick={testFunction} />);
  });

  it("should render an input field", () => {
    expect(component.find("input").length).toEqual(1);
  });
});
