import logo from "../../assets/images/logo.svg";
import DashboardIcon from "./DashboardIcon";
import img from "../../assets/images/admin-sidebar-bottom.png";
import AddBlogsIcon from "./AddBlogsIcon";
import SettingsIcon from "./SettingsIcon";
import ChangePassIcon from "./ChangePassIcon";
import LogoutIcon from "./LogoutIcon";
import { NavLink } from "react-router-dom";
import activeClass from "../../assets/css/adminNav.module.css";

function AdminSidebar(props) {
  console.log(props.handleClose);
  return (
    <div>
      <NavLink to="/">
        <img src={logo} className="admin_logo" alt="" />
      </NavLink>
      <ul className="admin_Sidebar list-unstyled">
        <li>
          <NavLink
            to="/dashboard"
            onClick={props.handleClose}
            className={(navInfo) =>
              navInfo.isActive ? activeClass.admin_active_nav : ""
            }
          >
            <DashboardIcon class={activeClass} />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            onClick={props.handleClose}
            className={(navInfo) =>
              navInfo.isActive ? activeClass.admin_active_nav : ""
            }
          >
            <AddBlogsIcon class={activeClass} />
            Add Blogs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            onClick={props.handleClose}
            className={(navInfo) =>
              navInfo.isActive ? activeClass.admin_active_nav : ""
            }
          >
            <SettingsIcon class={activeClass} />
            Account Setting
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/changepassword"
            onClick={props.handleClose}
            className={(navInfo) =>
              navInfo.isActive ? activeClass.admin_active_nav : ""
            }
          >
            <ChangePassIcon class={activeClass} />
            Change Password
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            onClick={props.handleClose}
            className={(navInfo) =>
              navInfo.isActive ? activeClass.admin_active_nav : ""
            }
          >
            <LogoutIcon class={activeClass} />
            Logout
          </NavLink>
        </li>
      </ul>

      <div className="mt-3 mt-md-5 mb-4">
        <img src={img} className="w-100" alt="" />
      </div>
    </div>
  );
}

export default AdminSidebar;
