import { ColorModeProvider, CSSReset, theme, ThemeProvider } from "@chakra-ui/core";
import { css, Global } from '@emotion/core';
import { MDXProvider } from '@mdx-js/react';
import { navigate } from "gatsby";
import Highlight, { defaultProps } from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';
import React from 'react';
import { AuthProvider } from "react-use-auth";

const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus    via the mouse,
    but it will still show up on keyboard focus.
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
     outline: none;
     box-shadow: none;
   }
`;

// dark themes: vsDark, dracula, duotoneDark (default), nightOwl, oceanicNext
/* eslint-disable */
const component = {
  pre: props => {
    const className = props.children.props.className || '';
    const matches = className.match(/language-(?<lang>.*)/);
    return (
      <Highlight
        {...defaultProps}
        theme={vsDark}
        code={props.children.props.children}
        language={
          matches && matches.groups && matches.groups.lang
            ? matches.groups.lang
            : ''
        }
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    );
  },
};
export const wrapRootElement = ({ element }) => {
 
  if (typeof window !== 'undefined') {
    localStorage.setItem('darkMode', 'false');
  }

return (
  <AuthProvider
    navigate={navigate}
    auth0_domain="dev-i61q270i.auth0.com"
    auth0_client_id="Gj8QSVdFBAQl3mFMapU5nH48qoybCygK"
    >
    <ThemeProvider theme={theme}>
    <CSSReset />
    <Global style={GlobalStyles} />
    <ColorModeProvider>
    <MDXProvider components={component}>
      {element}
    </MDXProvider>
    </ColorModeProvider>
    </ThemeProvider>
  </AuthProvider>
  )
}