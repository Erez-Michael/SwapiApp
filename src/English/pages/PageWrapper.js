import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Makes sure page starts at top on navigate

const PageWrapper = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    console.log("new location");
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};



export default PageWrapper;
