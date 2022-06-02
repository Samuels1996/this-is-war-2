import React from "react";

const UserList = ({ users, name }) => {
  if (!users.length) {
    return <h3> no users kms</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">{name}</h3>
      <div className="flex-row justify-space-between my-4">
        {users &&
          users.map((user) => (
            <div key={user._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {user.username} <br />
                  {user.email} <br />
                  {user.password} <br />
                </h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserList;
