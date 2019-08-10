import React from "react";
import { storiesOf } from "@storybook/react";
import ToDo from "./ToDo";

storiesOf("ToDo", module).add("initial", () => <ToDo text={"test text"} />);
