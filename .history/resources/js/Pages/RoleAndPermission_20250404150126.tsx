import { useState } from "react";
import UserSideBar from "@/Components/MyComponents/UserSideBar";
import Footer from "@/Components/MyComponents/Footer";
import { Head } from "@inertiajs/react";


export default function RolesPermissions() {
  // Demo roles
  const demoRoles = [
    { id: 1, name: "Admin", permissions: [] },
    { id: 2, name: "Editor", permissions: [] },
    { id: 3, name: "User", permissions: [] },
  ];

  // Demo permissions (20+ permissions for testing)
  const demoPermissions = Array.from(
    { length: 25 },
    (_, i) => `Permission ${i + 1}`
  );

  // State
  const [roles, setRoles] = useState(demoRoles);
  const [newRole, setNewRole] = useState("");
  const [openRole, setOpenRole] = useState(false);
  const [roleId, setRoleId] = useState(null);

  // Function to add a new role
  const handleAddRole = () => {
    if (!newRole.trim()) return;
    const newRoleObj = {
      id: roles.length + 1,
      name: newRole,
      permissions: [],
    };
    setRoles([...roles, newRoleObj]);
    setNewRole("");
  };

  // Function to toggle individual permissions
  const handleTogglePermission = (roleId: any, permission: any) => {
    setRoles(
      roles.map((role: any) =>
        role.id === roleId
          ? {
            ...role,
            permissions: role.permissions.includes(permission)
              ? role.permissions.filter((p: any) => p !== permission) // Remove permission
              : [...role.permissions, permission], // Add permission
          }
          : role
      )
    );
  };

  // Function to toggle "Select All" permissions
  const handleToggleAllPermissions = (roleId: any) => {
    setRoles(
      roles.map((role: any) =>
        role.id === roleId
          ? {
            ...role,
            permissions:
              role.permissions.length === demoPermissions.length
                ? []
                : [...demoPermissions], // Select/Deselect all
          }
          : role
      )
    );
  };

  const openPermissions = (id: any) => {
    if (openRole == false) {
      setOpenRole(true)
      setRoleId(id)
    }
    else {
      setOpenRole(false)
      setRoleId(null)
    }
  }

  return (
    <>
      <Head title="Chat / Messages" />
      {/* start main body content */}
      <section>
        <div className="2xl:w-10/12 relative xl:w-10/12 md:w-full sm:w-100  px-7 max-xl:p-0 ml-auto">
          <UserSideBar />
          <div className="p-6 bg-gray-100 min-h-screen">
            <div className="max-w-3xl mx-auto bg-white p-6 shadow rounded-lg">
              <h2 className="text-xl font-bold mb-4">
                Roles & Permissions
              </h2>

              {/* Add Role */}
              <div className="flex mb-4">
                <input
                  type="text"
                  placeholder="Enter role name"
                  className="border p-2 flex-grow rounded-l"
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value)}
                />
                <button
                  onClick={handleAddRole}
                  className="bg-green-500 text-white px-4 py-2 rounded-r hover:bg-green-600"
                >
                  Add Role
                </button>
              </div>

              {/* Roles List */}
              {roles.map((role: any) => (
                <div
                  key={role.id}
                  onClick={() => { openPermissions(role.id) }}
                  className="mb-4 p-4 border rounded-lg bg-gray-50 cursor-pointer"
                >
                  <div className="justify-between flex items-center">
                    <h3 className="font-semibold text-lg mb-2">
                      {role.name}
                    </h3>
                    <div className="text-gray-500">

                      {openRole && roleId == role.id ? <i className="fa fa-angle-down"></i> : <i className="fa fa-angle-up"></i>}
                    </div>
                  </div>




                  {/* Scrollable Permissions List */}
                  <div className={`${(openRole && roleId == role.id) ? 'border p-3 h-auto' : 'border-0 p-0 h-0'}  overflow-hidden rounded bg-white shadow-sm`}>
                    {/* Select All Checkbox */}
                    <div className="mb-2  bg-green-500 shadow-lg p-3 rounded-lg">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={
                            role.permissions.length ===
                            demoPermissions.length
                          }
                          onChange={() =>
                            handleToggleAllPermissions(role.id)
                          }
                          className="peer hidden"
                        />
                        <div className="w-5 h-5 border-2 border-gray-400 rounded-md flex items-center justify-center 
       peer-checked:border-green-500 peer-checked:bg-green-500 text-white">
                          ✓
                        </div>
                        <span>Select All</span>
                      </label>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {demoPermissions.map((perm): any => (
                        <label className="flex items-center space-x-2 cursor-pointer text-nowrap bg-white  shadow-lg p-3 rounded-lg">
                          <input
                            type="checkbox"
                            checked={role.permissions.includes(perm)}
                            onChange={() => handleTogglePermission(role.id, perm)}
                            className="peer hidden"
                          />
                          <div className="w-5 h-5 border-2 border-gray-400 rounded-md flex items-center justify-center 
                             peer-checked:border-green-500 peer-checked:bg-green-500 text-white">
                            ✓
                          </div>
                          <span className="text-gray-800">{perm}</span>
                        </label>


                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" relative max-xl:text-center max-xl:justify-center">
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
}
