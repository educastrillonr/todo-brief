import React from "react";
import { mount } from "enzyme";
import Task from "./Task";

describe("Task Tests", () => {
  let component;
  let testFunction;
  // let event = {};

  beforeEach(() => {
    /* 
        we can create and spy on 'mock' functions using 
        jest.fn() in order to see how and when they're called
        */
    testFunction = jest.fn();
    component = mount(<Task handleClick={testFunction} />);
  });

  //   it("should render an input field", () => {
  //     expect(component.find("input").length).toEqual(1);
  //   });
});
