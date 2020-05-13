import { MDXProvider } from '@mdx-js/react';
import { navigate } from "gatsby";
import Highlight, { defaultProps } from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';
import React from 'react';
import { AuthProvider } from "react-use-auth";

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
export const wrapRootElement = ({ element }) => (
  <AuthProvider
    navigate={navigate}
    auth0_domain="dev-i61q270i.auth0.com"
    auth0_client_id="Gj8QSVdFBAQl3mFMapU5nH48qoybCygK"
    >
    <MDXProvider components={component}>
    {element}
    </MDXProvider>
  </AuthProvider>
  )