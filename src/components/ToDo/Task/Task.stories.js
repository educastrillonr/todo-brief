import React from "react";
import { storiesOf } from "@storybook/react";
import Task from "./Task";

storiesOf("Task", module).add("initial", () => <Task text={"test text"} />);
