import React from "react";
import { storiesOf } from "@storybook/react";
import Lists from "./Lists";

storiesOf("Lists", module).add("initial", () => <Lists text={"test text"} />);
