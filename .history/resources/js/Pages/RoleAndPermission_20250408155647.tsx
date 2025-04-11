import { useState } from "react";
import UserSideBar from "@/Components/MyComponents/UserSideBar";
import Footer from "@/Components/MyComponents/Footer";
import { Head } from "@inertiajs/react";
import axios from "axios";


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

    axios.post(route("create.name"), newRoleObj).then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    })
  };

  // Function to toggle individual permissions
  const handleTogglePermission = (roleId: any, permission: any) => {
    console.log(permission)
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
                    <div className="mb-2  bg-white shadow-lg p-3 rounded-lg">
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




      <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="mb-4">
                {/* <FileUpload onFileUpload={handleImageUpload} /> */}
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                  <Ruler size={16} />
                  Reference Height ({unit})
                </label>
                <div className="flex items-center gap-4">
                  <Slider 
                    value={[referenceHeight]} 
                    min={120} 
                    max={220}
                    step={1}
                    onValueChange={handleReferenceChange}
                    className="flex-1"
                  />
                  <span className="w-16 text-center">
                    {unit === 'cm' ? referenceHeight : Math.round(referenceHeight / 2.54)}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Set this to a value close to your expected height for better accuracy
                </p>
              </div>
              
              <div className="flex flex-col space-y-4">
                <Button 
                  onClick={analyzeImage} 
                  disabled={!image || loading}
                  className="w-full bg-gradient-app hover:bg-blue-700"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    'Analyze Image'
                  )}
                </Button>
                
                <Button 
                  onClick={toggleUnit} 
                  variant="outline"
                  className="w-full"
                >
                  Switch to {unit === 'cm' ? 'Feet/Inches' : 'Centimeters'}
                </Button>
              </div>
              
              {height && (
                <div className="mt-6 p-4 bg-gradient-app text-white rounded-lg text-center">
                  <h3 className="text-xl font-bold">Estimated Height</h3>
                  <p className="text-3xl font-bold mt-2">{formatHeight(height, unit)}</p>
                  <p className="text-sm mt-2 opacity-80">
                    This is an estimate based on the image analysis
                  </p>
                </div>
              )}
            </div>
            
            <div className="flex-1 relative min-h-[300px] border rounded-lg overflow-hidden bg-gray-50">
              {image ? (
                <div className="canvas-container h-full">
                  <img
                    ref={imageRef}
                    src={image}
                    alt="Uploaded"
                    className="w-full h-full object-contain"
                    style={{ opacity: 1 }}
                  />
                  <canvas
                    ref={canvasRef}
                    className="absolute top-0 left-0 w-full h-full"
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center h-full p-6 text-center text-gray-500">
                  <p>Upload an image to analyze</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      
    </>
  );
}
