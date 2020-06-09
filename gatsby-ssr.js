/** @jsx jsx */
const React = require("react")
const { ColorModeProvider, CSSReset, ThemeProvider } = require("@chakra-ui/core");
const { css, Global, jsx } = require('@emotion/core');
const { MDXProvider } = require('@mdx-js/react');
require('focus-visible/dist/focus-visible');
const { navigate } = require("gatsby");
const { Highlight, defaultProps } = require('prism-react-renderer');
const { vsDark } = require('prism-react-renderer/themes/vsDark');
const { AuthProvider } = require("react-use-auth");
const { customTheme } = require("./src/components/gatsby-plugin-chakra-ui/theme");
require("typeface-asap");
require("typeface-roboto");

exports.onRenderBody = ({ setBodyAttributes }) => {
  setBodyAttributes({
      className: 'no-js'
    });
};

const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus    via the mouse,
    but it will still show up on keyboard focus.
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
     outline: none;
     box-shadow: none;
   }

   body {
     visibility: hidden;
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

exports.wrapRootElement = ({ element }) => {
 
  if (typeof window !== 'undefined') {
    localStorage.setItem('darkMode', 'false');
  }
  
return (
  <div style={{visibility: 'hidden'}}>
  <AuthProvider
    navigate={navigate}
    auth0_domain="dev-i61q270i.auth0.com"
    auth0_client_id="Gj8QSVdFBAQl3mFMapU5nH48qoybCygK"
    >
    <ThemeProvider theme={customTheme}>
    <CSSReset />
    <Global style={GlobalStyles} />
    <ColorModeProvider>
    <MDXProvider components={component}>
      {element}
    </MDXProvider>
    </ColorModeProvider>
    </ThemeProvider>
  </AuthProvider>
  </div>
  )
}

