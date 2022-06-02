import React from "react";

import { useQuery } from "@apollo/client";

import { QUERY_USERS } from "../../../utils/queries";

import UserList from "./UserList";

const TestPage = () => {
  const { loading, data } = useQuery(QUERY_USERS);

  const users = data?.users || [];

  return (
    <div className="text-light flex-row justify-center">
      <div className="col-12 col-md-10 my-3">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <UserList users={users} title="Roster of users" />
        )}
      </div>
    </div>
  );
};

export default TestPage;
