import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { isAuthenticated } from "./auth";

export function withAuth<P extends object>(Component: React.ComponentType<P>) {
  return function ProtectedPage(props: P) {
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated()) {
        router.replace("/login");
      }
    }, [router]);

    return <Component {...props} />;
  };
}
