import { css } from '@emotion/core';
// import styled from '@emotion/styled';

export const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus via the mouse,
    but it will still show up on keyboard focus.
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
     outline: none;
     box-shadow: none;
   }

    body {
        overflow: hidden;
    }


    .container {
    height: 90vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 30px;
    }

    .body {
        display: grid;
        grid-template-columns: .75fr 3fr;
        overflow: hidden;
    }

    .sidebar {
    border-right: 1px solid lightgrey;
    }

    .footer {
        border-top: 1px solid lightgrey;
    }

    .content {
    overflow-y: scroll;
    padding: 20px;
    }

    p {
    max-width: 600px;
    padding-bottom: 2rem;
    }
`;

