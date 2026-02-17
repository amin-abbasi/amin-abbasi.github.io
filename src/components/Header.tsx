import React from "react";
import "../App.css";

interface HeaderProps {
  title: string;
}

function Header(props: HeaderProps) {
  const { title } = props;
  return <div className="header">{title}</div>;
}

export default Header;
