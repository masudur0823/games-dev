import logo from "../../assets/images/logo.svg";
import DashboardIcon from "./DashboardIcon";
import img from '../../assets/images/admin-sidebar-bottom.png'

function AdminSidebar() {
  return (
    <>
      <img src={logo} className="admin_logo" alt="" />
      <ul className="admin_Sidebar list-unstyled">
        <li>
          <a href="#!" className="admin_active_nav">
            <DashboardIcon/>
            Dashboard
          </a>
        </li>
        <li>
          <a href="#!">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
                stroke="#8F8F8F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.0399 3.02001L8.15988 10.9C7.85988 11.2 7.55988 11.79 7.49988 12.22L7.06988 15.23C6.90988 16.32 7.67988 17.08 8.76988 16.93L11.7799 16.5C12.1999 16.44 12.7899 16.14 13.0999 15.84L20.9799 7.96001C22.3399 6.60001 22.9799 5.02001 20.9799 3.02001C18.9799 1.02001 17.3999 1.66001 16.0399 3.02001Z"
                stroke="#8F8F8F"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.9099 4.15002C15.5799 6.54002 17.4499 8.41002 19.8499 9.09002"
                stroke="#8F8F8F"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Add Blogs
          </a>
        </li>
        <li>
          <a href="#!">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                stroke="#8F8F8F"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 12.8801V11.1201C2 10.0801 2.85 9.22006 3.9 9.22006C5.71 9.22006 6.45 7.94006 5.54 6.37006C5.02 5.47006 5.33 4.30006 6.24 3.78006L7.97 2.79006C8.76 2.32006 9.78 2.60006 10.25 3.39006L10.36 3.58006C11.26 5.15006 12.74 5.15006 13.65 3.58006L13.76 3.39006C14.23 2.60006 15.25 2.32006 16.04 2.79006L17.77 3.78006C18.68 4.30006 18.99 5.47006 18.47 6.37006C17.56 7.94006 18.3 9.22006 20.11 9.22006C21.15 9.22006 22.01 10.0701 22.01 11.1201V12.8801C22.01 13.9201 21.16 14.7801 20.11 14.7801C18.3 14.7801 17.56 16.0601 18.47 17.6301C18.99 18.5401 18.68 19.7001 17.77 20.2201L16.04 21.2101C15.25 21.6801 14.23 21.4001 13.76 20.6101L13.65 20.4201C12.75 18.8501 11.27 18.8501 10.36 20.4201L10.25 20.6101C9.78 21.4001 8.76 21.6801 7.97 21.2101L6.24 20.2201C5.33 19.7001 5.02 18.5301 5.54 17.6301C6.45 16.0601 5.71 14.7801 3.9 14.7801C2.85 14.7801 2 13.9201 2 12.8801Z"
                stroke="#8F8F8F"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Account Setting
          </a>
        </li>
        <li>
          <a href="#!">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.7899 14.9299C17.7299 16.9799 14.7799 17.6099 12.1899 16.7999L7.4799 21.4999C7.1399 21.8499 6.4699 22.0599 5.9899 21.9899L3.8099 21.6899C3.0899 21.5899 2.4199 20.9099 2.3099 20.1899L2.0099 18.0099C1.9399 17.5299 2.1699 16.8599 2.4999 16.5199L7.1999 11.8199C6.3999 9.21995 7.0199 6.26995 9.0799 4.21995C12.0299 1.26995 16.8199 1.26995 19.7799 4.21995C22.7399 7.16995 22.7399 11.9799 19.7899 14.9299Z"
                stroke="#8F8F8F"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.88989 17.49L9.18989 19.79"
                stroke="#8F8F8F"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.5 11C15.3284 11 16 10.3284 16 9.5C16 8.67157 15.3284 8 14.5 8C13.6716 8 13 8.67157 13 9.5C13 10.3284 13.6716 11 14.5 11Z"
                stroke="#8F8F8F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Change Password
          </a>
        </li>
        <li>
          <a href="#!">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.4399 14.62L19.9999 12.06L17.4399 9.5"
                stroke="#8F8F8F"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.76001 12.0601H19.93"
                stroke="#8F8F8F"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.76 20C7.34001 20 3.76001 17 3.76001 12C3.76001 7 7.34001 4 11.76 4"
                stroke="#8F8F8F"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Logout
          </a>
        </li>
      </ul>

      <div className="mt-3 mt-md-5 mb-4">
        <img src={img} className='w-100' alt="" />
      </div>
    </>
  );
}

export default AdminSidebar;
