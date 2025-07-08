import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/modules/dashboard/ui/components/dashboard-sidebar";

interface Props {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main>{children}</main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
