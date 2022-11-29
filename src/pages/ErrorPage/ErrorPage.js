import React from "react";
import "./ErrorPage.scss";

function ErrorPage() {
  return (
    <div className="container">
      <div className="error-page">
        <p className="error-code">404</p>
        <p className="error-msg">Axtardığınız səhifə tapılmadı</p>
      </div>
    </div>
  );
}

export default ErrorPage;
