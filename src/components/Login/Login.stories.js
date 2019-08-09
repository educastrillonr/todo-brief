import React from "react";
import { storiesOf } from "@storybook/react";
import Login from "./Login";

storiesOf("Login", module).add("initial", () => <Login text={"test text"} />);
