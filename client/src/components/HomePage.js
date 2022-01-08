import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  let navigate = useNavigate();

  window.addEventListener("wheel", () => {
    navigate("/projects");
  });

  return (
    <div>
      <h1>HOMEPAGE</h1>
      <p>This is a mock test about the home page.</p>
      <p>Here should have an image as a logo or text for the portfolio.</p>
      <p>Also, the instructions to enter the portfolio (scrolling down)</p>

      <p>Scroll to know more</p>
    </div>
  );
}
