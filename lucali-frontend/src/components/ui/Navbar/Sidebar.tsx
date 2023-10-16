"use client";
import SidebarContent from "./SidebarContent";
import { RiMenu4Line } from "react-icons/ri";
const Sidebar = () => {
  return (
    <div>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button text-3xl text-[#bd9253]"
          >
            <RiMenu4Line />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <SidebarContent />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
