import AdminSidebar from "../component/AdminSidebar/AdminSidebar";


function DashBoard() {
  return (
    <>
      <div className="admin_layout_bg">
        <div className="admin_container">
          <div className="admin_layout">
            <div className="admin_layout_child1">
              <AdminSidebar/>
            </div>
            <div>
              <div className="bg-success rounded-3 p-5"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
