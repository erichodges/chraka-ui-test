import Highlight, { defaultProps } from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';
import React from 'react';
 
export default ({ children, className }) => {
  // Pull the className
//   const language = className.replace(/language-/, '') || ""
  
  
  return (
    <Highlight {...defaultProps}
      code={children}
      theme={vsDark}

    //   language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style }}>
          {tokens.map((line, index) => {
            const lineProps = getLineProps({ line, key: index })
            return (
              <div key={index} {...lineProps}>
                {line.map((token, key) => (
                  <span key={key}{...getTokenProps({ token, key })} />
                ))}
              </div>
            )
          }
          )}
        </pre>
      )}
    </Highlight>
  )
}