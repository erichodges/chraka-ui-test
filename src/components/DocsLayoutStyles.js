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

   html {
    scroll-behavior: smooth;
  }

  @media screen and (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
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

    /*  to add a footer, use 1fr 30px(for the footer) etc in grid-template-rows  */
    grid-template-rows: 1fr;
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

    .sidebar li {
      margin-bottom: .5rem;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
    }

    .sidenav {
      list-style-type: none;
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



    pre {
      padding-top: .5rem;
      padding-left: .5rem;
      margin-bottom: 1rem;
      border-radius: 8px;
      overflow: auto;
    }

    @media (min-width: 360px) {
      pre {
        font-size: .8rem;
      }
    }

    @media (min-width: 500px) {
      pre {
        font-size: .9rem;
        color: #569CD6;
        background-color: #0E0E0E;
        padding: 4px;
        border-radius: 3px;
      }
    }

    @media (min-width: 768px) {
      pre {
        font-size: 1rem;
        color: #569CD6;
        background-color: #0E0E0E;
        padding: 4px;
        border-radius: 3px;
      }
    }

    @media (min-width: 360px) {
      code {
        font-size: .9rem;
        color: #569CD6;
        background-color: #0E0E0E;
        padding: 4px;
        border-radius: 3px;
      }
    }

    @media (min-width: 768px) {
      code {
        font-size: 1rem;
        color: #569CD6;
        background-color: #0E0E0E;
        padding: 4px;
        border-radius: 3px;
      }
    }

    @media (min-width: 1024px) {
      code {
        font-size: 1.1rem;
        color: #569CD6;
        background-color: #0E0E0E;
        padding: 4px;
        border-radius: 3px;
      }
    }






    
`;

