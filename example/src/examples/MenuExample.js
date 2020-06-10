import React from "react";
import {Icon, Menu, MenuButton} from "@basistechnology/crux";
import "./MenuExample.css";

export default function MenuExample() {
  return (
    <Menu>
      <MenuButton icon={<Icon name="dashboard"/>}>Dashboard</MenuButton>
      <MenuButton icon={<Icon name="search"/>}>Search</MenuButton>
      <MenuButton icon={<Icon name="settings"/>}>Settings</MenuButton>
    </Menu>
  );
}
