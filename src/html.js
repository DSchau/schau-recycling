// @flow
import * as React from 'react';

interface Props {
  headComponents: any;
  body: any;
  postBodyComponents: any;
}

const Html = ({ headComponents, body, postBodyComponents }: Props) => (
  <html lang="en">
    <head>
      <meta name="referrer" content="origin" />
      <meta charSet="utf-8" />
      <meta name="description" content="Gatsby example site using Emotion" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Schau Recycling</title>
      {headComponents}
    </head>
    <body>
      <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
      {postBodyComponents}
    </body>
  </html>
)

export default Html;
