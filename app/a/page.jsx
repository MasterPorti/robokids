import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Page() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return null;
}

export default Page;
