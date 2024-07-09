import { useEffect, useState } from "react";

const ProtectRouteHock = () => {
  const [userDate, setUserData] = useState(
    JSON.parse(localStorage.getItem("AdminData"))
  );
  const [isUser, setIsuser] = useState();
  const [isAdmin, setIsAdmin] = useState();

  useEffect(() => {
    if (userDate != null) {
      if (userDate.email === "Admin@gmail.com") {
        setIsAdmin(true);
        setIsuser(false);
      }
    } else {
      setIsAdmin(false);
      setIsuser(false);
    }
  }, []);

  return [isUser, isAdmin, userDate];
};

export default ProtectRouteHock;
