import { Meta, Title, Links, Main, Scripts } from 'ice';

export default function Document() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content="ice.js 3 lite scaffold" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="//alifd.alicdn.com/npm/@alifd/next/1.25.39/dist/next.var.min.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <script src="//g.alicdn.com/code/lib/??react/18.0.0/umd/react.production.min.js,react-dom/18.0.0/umd/react-dom.production.min.js,prop-types/15.8.1/prop-types.js,lodash.js/4.17.21/lodash.js"></script>
        <script src="//g.alicdn.com/code/lib/??react-router/5.2.1/react-router.min.js,react-router-dom/5.3.0/react-router-dom.min.js,moment.js/2.29.2/moment.min.js"></script>
        <script src="//alifd.alicdn.com/npm/@alifd/next/1.25.39/dist/next.min.js"></script>
        <Meta />
        <Title />
        <Links />
      </head>
      <body>
        <Main />
        <Scripts />
      </body>
    </html>
  );
}
