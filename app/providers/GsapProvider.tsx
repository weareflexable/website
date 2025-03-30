// app/providers/GsapProvider.tsx
"use client";

import { ReactNode, useEffect, useState } from "react";

interface GsapProviderProps {
  children: ReactNode;
}

export default function GsapProvider({ children }: GsapProviderProps) {
  const [isGsapLoaded, setIsGsapLoaded] = useState(false);

  useEffect(() => {
    // Ensures GSAP is fully loaded before rendering animations
    import("../utils/animations/gsap-config").then(() => {
      setIsGsapLoaded(true);
    });
  }, []);

  return <>{isGsapLoaded ? children : null}</>;
}