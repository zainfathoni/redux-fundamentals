import React from "react";
import FilterLink from "../containers/filter-link";

const normal = { fontWeight: "normal" };

const Footer = () => (
  <p
    style={{
      color: "#521262",
      fontWeight: "bold"
    }}
  >
    <span style={normal}>Show:</span>
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    <span style={normal}>{" | "}</span>
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    <span style={normal}>{" | "}</span>
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
);

export default Footer;
