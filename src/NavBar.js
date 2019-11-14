import React, { useState } from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";
import Colors from "./Colors";
const NavBar = () => {
  const [padding] = useState(15);
  return (
    <header
      css={css`
        background-color: ${Colors.secondary};
        padding: ${padding}px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        css={css`
          font-size: 60px;
          display: inline-block;
          &:hover {
            text-decoration: underline;
          }
        `}
        role="img"
        aria-label="logo"
      >
        🐎
      </span>
    </header>
  );
};

export default NavBar;
