import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { MainSidebar } from "@/components/common/MainSidebar";
import PropTypes from "prop-types";

function Base({ children }) {
  return (
    <SidebarProvider>
      <MainSidebar />
      <SidebarTrigger />
      <div className="flex flex-col items-center justify-center h-screen w-full">
        {children}
      </div>
    </SidebarProvider>
  );
}

export default Base;

Base.propTypes = {
  children: PropTypes.node.isRequired,
};
