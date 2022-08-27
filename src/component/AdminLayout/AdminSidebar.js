import logo from "../../assets/images/logo.svg";
import DashboardIcon from "./DashboardIcon";
import img from "../../assets/images/admin-sidebar-bottom.png";
import AddBlogsIcon from "./AddBlogsIcon";
import SettingsIcon from "./SettingsIcon";
import ChangePassIcon from "./ChangePassIcon";
import LogoutIcon from "./LogoutIcon";

function AdminSidebar(props) {
  console.log(props.handleClose)
  return (
    <>
      <img src={logo} className="admin_logo" alt="" />
      <ul className="admin_Sidebar list-unstyled">
        <li>
          <a href="#!" className="admin_active_nav" onClick={props.handleClose}>
            <DashboardIcon />
            Dashboard
          </a>
        </li>
        <li>
          <a href="#!" onClick={props.handleClose}>
            <AddBlogsIcon />
            Add Blogs
          </a>
        </li>
        <li>
          <a href="#!" onClick={props.handleClose}>
            <SettingsIcon />
            Account Setting
          </a>
        </li>
        <li>
          <a href="#!" onClick={props.handleClose}>
            <ChangePassIcon />
            Change Password
          </a>
        </li>
        <li>
          <a href="#!" onClick={props.handleClose}>
            <LogoutIcon />
            Logout
          </a>
        </li>
      </ul>

      <div className="mt-3 mt-md-5 mb-4">
        <img src={img} className="w-100" alt="" />
      </div>
    </>
  );
}

export default AdminSidebar;
