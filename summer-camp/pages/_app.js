import "../styles/globals.css";
import "../styles/main.scss";

import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous"
      />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
