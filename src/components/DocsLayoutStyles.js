import { css } from '@emotion/core';

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

    @media (min-width: 360px) {
      .sidebar {
        display: none;
      }
    }
  

    .footer {
        border-top: 1px solid lightgrey;
    }

    .content {
    overflow-y: scroll;
    }

    .sidenav {
      list-style-type: none;
    }



    pre {
      padding-top: .5rem;
      padding-left: .5rem;
      margin-bottom: 1rem;
      border-radius: 8px;
      overflow: auto;
    }

    @media (min-width: 360px) {
      pre {
        font-size: .75rem;
      }
    }

    @media (min-width: 768px) {
      pre {
        font-size: 1rem;
      }
    }
    
    
`;

