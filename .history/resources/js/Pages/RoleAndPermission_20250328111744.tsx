import { useState } from "react";

type Role = {
  id: number;
  name: string;
  permissions: string[];
};

export default function RolesPermissions() {
  const demoRoles: Role[] = [
    { id: 1, name: "Admin", permissions: [] },
    { id: 2, name: "Editor", permissions: [] },
    { id: 3, name: "User", permissions: [] },
  ];

  const demoPermissions: string[] = Array.from({ length: 25 }, (_, i) => `Permission ${i + 1}`);

  const [roles, setRoles] = useState<Role[]>(demoRoles);

  const handleTogglePermission = (roleId: number, permission: string) => {
    setRoles((prevRoles) =>
      prevRoles.map((role) =>
        role.id === roleId
          ? {
              ...role,
              permissions: role.permissions.includes(permission)
                ? role.permissions.filter((p) => p !== permission)
                : [...role.permissions, permission],
            }
          : role
      )
    );
  };

  return (
    <div>
      {roles.map((role) => (
        <div key={role.id}>
          <h3>{role.name}</h3>
          {demoPermissions.map((perm) => (
            <label key={perm}>
              <input
                type="checkbox"
                checked={role.permissions.includes(perm)}
                onChange={() => handleTogglePermission(role.id, perm)}
              />
              {perm}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
}
