import React from "react";
import { useSelector } from "react-redux";

export default function withAuth(AccessComponent, UnavailableComponent) {
  return () => {
    const auth = useSelector((state) => state.toggle.auth);

    if (auth) {
      return <AccessComponent />;
    } else {
      return <UnavailableComponent />;
    }
  };
}
