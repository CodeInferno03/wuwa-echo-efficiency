import { useEffect } from "react";
// import * as React from "react";

const Redirect = (url) => {
  useEffect(() => {
    window.location.href = url;
  }, [url]);
};

export default Redirect;
