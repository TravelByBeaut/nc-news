import { useEffect, useState } from "react";
import { fetchUsers } from "../api";

export default function User() {
  const [user, setUser] = useState("tickle122");

  useEffect(() => {
    fetchUsers().then(({ data }) => {
      setUser(data[0]);
    });
  }, []);
  return (
    <section>
      <img src={user.avatar_url} className="user-avatar" alt={user.name} />
      <h1>Username: {user.username}</h1>
      <h2>Name: {user.name}</h2>
    </section>
  );
}
