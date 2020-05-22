import PropTypes from "prop-types"
import React from "react"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script
          dangerouslySetInnerHTML={{
            __html: `
                
              // Insert this script in your index.html right after the <body> tag.
              // This will help to prevent a flash if dark mode is the default.

              (function() {
                // Change these if you use something different in your hook.
                var storageKey = 'darkMode';
                var classNameDark = 'dark-mode';
                var classNameLight = 'light-mode';

                function setClassOnDocumentBody(darkMode) {
                  document.body.classList.add(darkMode ? classNameDark : classNameLight);
                  document.body.classList.remove(darkMode ? classNameLight : classNameDark);
                }
                
                var preferDarkQuery = '(prefers-color-scheme: dark)';
                var mql = window.matchMedia(preferDarkQuery);
                var supportsColorSchemeQuery = mql.media === preferDarkQuery;
                var localStorageTheme = null;
                try {
                  localStorageTheme = localStorage.getItem(storageKey);
                } catch (err) {}
                var localStorageExists = localStorageTheme !== null;
                if (localStorageExists) {
                  localStorageTheme = JSON.parse(localStorageTheme);
                }

                // Determine the source of truth
                if (localStorageExists) {
                  // source of truth from localStorage
                  setClassOnDocumentBody(localStorageTheme);
                } else if (supportsColorSchemeQuery) {
                  // source of truth from system
                  setClassOnDocumentBody(mql.matches);
                  localStorage.setItem(storageKey, mql.matches);
                } else {
                  // source of truth from document.body
                  var isDarkMode = document.body.classList.contains(classNameDark);
                  localStorage.setItem(storageKey, JSON.stringify(isDarkMode));
                }
              })();
              `,
            }}
/>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}