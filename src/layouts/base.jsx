import { SidebarProvider } from "@/components/ui/sidebar";
import { MainSidebar } from "@/components/common/MainSidebar";
import PropTypes from "prop-types";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

function Base({ children }) {
  return (
    <SidebarProvider>
      <MainSidebar />
      <div className="flex flex-col items-center justify-center h-screen w-full">
        <Header />
        {children}
        <Footer />
      </div>
    </SidebarProvider>
  );
}

export default Base;

Base.propTypes = {
  children: PropTypes.node.isRequired,
};
