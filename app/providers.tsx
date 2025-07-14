"use client";

import * as React from "react";
import { FlexiUIProvider } from "@flexi-ui/system";
import { useRouter } from "next/navigation";

export interface ProvidersProps {
  children: React.ReactNode;
}

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export function Providers({ children }: ProvidersProps) {
  const router = useRouter();

  return <FlexiUIProvider navigate={router.push}>{children}</FlexiUIProvider>;
}
