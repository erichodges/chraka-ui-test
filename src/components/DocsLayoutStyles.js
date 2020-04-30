import { css } from '@emotion/core';
// import styled from '@emotion/styled';

export const DocsStyles = css`
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
        padding: 0;
        margin: 0;
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
        margin-top: 1rem;
    }

    @media (max-width: 767px) {
      .body {
          grid-template-columns: 1fr;
      }
    }

    .body p {
        padding-bottom: 1.25rem;
    }

    .sidebar {
    border-right: 1px solid lightgrey;
    }

    .footer {
        border-top: 1px solid lightgrey;
    }

    .content {
    overflow-y: scroll;

    }

    .content h1 {
      font-size: 18px;
      font-weight: bold; 
      padding-bottom: 1rem;
    }

    .sidenav {
      list-style-type: none;
    }
`;

