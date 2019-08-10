import React from "react";
import { mount } from "enzyme";
import Lists from "./Lists";

describe("Lists Tests", () => {
  let component;
  let testFunction;
  // let event = {};

  beforeEach(() => {
    /* 
        we can create and spy on 'mock' functions using 
        jest.fn() in order to see how and when they're called
        */
    testFunction = jest.fn();
    component = mount(<Lists />);
  });

  //   it("should render an input field", () => {
  //     expect(component.find("input").length).toEqual(1);
  //   });
});
