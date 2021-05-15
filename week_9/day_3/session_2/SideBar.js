import React from "react";
import Sidebar from "./SidebarTemplate";
import SidebarItem from "./SidebarItem";

export default function SideBar() {
  return (
    <div>
      <Sidebar>
        <SidebarItem label="label1" />
      </Sidebar>
      <Sidebar>
        <SidebarItem label="label2" />
      </Sidebar>
      <Sidebar>
        <SidebarItem label="label3" />
      </Sidebar>
      <Sidebar>
        <SidebarItem label="label4" />
      </Sidebar>
      <Sidebar>
        <SidebarItem label="label5" />
      </Sidebar>
    </div>
  );
}
