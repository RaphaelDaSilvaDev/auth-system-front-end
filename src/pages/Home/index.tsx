import { useEffect } from "react";
import { api } from "../../services/axios";

export function Home() {
  useEffect(() => {
    api.get("/user").then((response) => console.log(response));
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}
