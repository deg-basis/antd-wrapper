import React from "react";
import {Icon, Menu, MenuButton} from "@basistechnology/crux";
import "./MenuExample.css";

const FakeLogo = (
  <div style={{fontSize: 38, display: "flex", alignItems: "center"}}>
    L<Icon name="refresh"/>GO
  </div>
);

export default function MenuExample() {
  return (
    <Menu logo={FakeLogo}>
      <MenuButton icon={<Icon name="upload"/>}>Upload Index</MenuButton>
      <MenuButton icon={<Icon name="search"/>}>Search</MenuButton>
      <MenuButton icon={<Icon name="compare"/>}>Compare</MenuButton>
      <MenuButton icon={<Icon name="evaluate"/>}>Evaluate</MenuButton>
      <MenuButton icon={<Icon name="settings"/>}>Configure</MenuButton>
      <MenuButton icon={<Icon name="help"/>}>Help</MenuButton>
    </Menu>
  );
}
