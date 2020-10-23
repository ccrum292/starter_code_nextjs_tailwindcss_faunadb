import TokenStore from "./TokenStore";
import { server } from "../config";


const handleLogoutAPI = async () => {
  const token = TokenStore.getToken();
  if (!token) return
  const res = await fetch(`${server}/api/users/logout`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      token: token
    }
  })
  const data = await res.json();
  TokenStore.clearToken();
  return data
}

export default handleLogoutAPI;