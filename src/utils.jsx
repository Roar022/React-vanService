import { redirect } from "react-router-dom";
import { Outlet } from "react-router-dom";
export async function requireAuth() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    // problem of mirage js
    const response = redirect("/login?message=you must login first");
    response.body = true; // It's silly, but it works
    return response;
    // throw redirect(`/login`)
    // return <Navigate to="/login"/>
  }
  return null;
}
