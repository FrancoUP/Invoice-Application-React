import { useEffect } from "react";

export default function useLoadingPage(setState) {
  useEffect(() => {
    const handleLoad = () => {
      setState(false);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);
}
