import { AppShell } from "@mantine/core";
import { ReactNode } from "react";
import AppHeader from "@/widgets/header/AppHeader";
import AppFooter from "@/widgets/footer/AppFooter";

interface Props {
  children: ReactNode;
}

export default function AppLayout({ children }: Props) {
  return (
    <AppShell header={{ height: 78 }} padding={0}>
      <AppShell.Header>
        <AppHeader />
      </AppShell.Header>

      <AppShell.Main>
        {children}
        <AppFooter />
      </AppShell.Main>
    </AppShell>
  );
}