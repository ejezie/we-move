import React from "react";
import { NavLink } from "react-router-dom";

interface SideBarItemProps {
  icon: React.ReactElement;
  title: string;
  link: string;
  subLinks?: { [key in string]: string | React.ReactElement }[];
}

const SideBarItem = ({ icon, title, link, subLinks }: SideBarItemProps) => {
  return (
    <div className="side_bar_item">
      <NavLink to={link} className={"between"}>
        <div>
          {/* <AiFillDashboard /> */}
          {icon}
        </div>
        <div>{title}</div>
      </NavLink>
      <div>
        {subLinks?.map((item, idx) => (
          <NavLink to={item.link as string} key={idx}>
            <div>{item.icon}</div>
            <div>{item.title}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SideBarItem;
