import React from "react";

function ChangePassIcon(props) {
  return (
    <svg
      className={`admin_menu_icon ${props.class.admin_menu_icon_active}`}
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
  );
}

export default ChangePassIcon;
