import { Button, Result } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotPermitted() {
  const navigate = useNavigate();
  return (
    <>
      <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={
          <Button type="primary" onClick={() => navigate("/")}>
            Back Home
          </Button>
        }
      />
    </>
  );
}
