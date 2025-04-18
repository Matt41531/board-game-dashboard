import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { useLocation } from "react-router";
import { useEffect, useState, Fragment } from "react";

function Header() {
  const path = useLocation().pathname;
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    setBreadcrumbs(path.split("/").filter((breadcrumb) => breadcrumb !== ""));
  }, [path]);

  return (
    <header className="flex items-center justify-start w-full h-16 bg-sidebar p-4">
      <SidebarTrigger />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          {breadcrumbs.map((breadcrumb) => {
            return (
              <Fragment key={breadcrumb}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href={"/" + breadcrumb}>
                    {breadcrumb.charAt(0).toUpperCase() + breadcrumb.slice(1)}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
}

export default Header;
