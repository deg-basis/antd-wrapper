import React, {useState, useCallback} from "react";
import { Icon, Menu, MenuButton } from "antd-wrapper";
import "./MenuExample.css";
import { IconWithLabel } from 'antd-wrapper';

const FakeLogo = (
  <div className="fake-logo">
    L<Icon name="refresh" />GO
  </div>
);

export default function MenuExample() {
  const [activeButton, setActiveButton] = useState("upload");

  const handleClick = useCallback((event) => setActiveButton(event.key), []);

  return (
    <Menu
      logo={FakeLogo}
      defaultActiveKey="upload"
      onClick={handleClick}
      selectedKeys={[activeButton]}
    >
      <MenuButton key="upload">
        <IconWithLabel name="upload" label="Upload Index"/>
      </MenuButton>

      <MenuButton key="search">
        <IconWithLabel name="search" label="Search"/>
      </MenuButton>

      <MenuButton key="compare">
        <IconWithLabel name="compare" label="Compare"/>
      </MenuButton>

      <MenuButton key="evaluate" disabled>
        <IconWithLabel name="evaluate" label="Evaluate"/>
      </MenuButton>

      <MenuButton key="settings">
        <IconWithLabel name="settings" label="Configure"/>
      </MenuButton>

      <MenuButton key="help">
        <IconWithLabel name="help" label="Help"/>
      </MenuButton>
    </Menu>
  );
}
