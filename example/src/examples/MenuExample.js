import React, {useState} from "react";
import { Icon, Menu, MenuButton } from "@basistechnology/crux";
import "./MenuExample.css";

const FakeLogo = (
  <div style={{ fontSize: 38, display: "flex", alignItems: "center" }}>
    L<Icon name="refresh" />GO
  </div>
);

export default function MenuExample() {
  const [activeButton, setActiveButton] = useState("upload");

  return (
    <Menu logo={FakeLogo}>
      <div onClick={() => setActiveButton("upload")}>
        <MenuButton
          icon={<Icon name="upload" />}
          active={activeButton === "upload"}
        >
          Upload Index
        </MenuButton>
      </div>

      <div onClick={() => setActiveButton("search")}>
        <MenuButton
          icon={<Icon name="search" />}
          active={activeButton === "search"}
        >
          Search
        </MenuButton>
      </div>

      <div onClick={() => setActiveButton("compare")}>
        <MenuButton
          icon={<Icon name="compare" />}
          active={activeButton === "compare"}
        >
          Compare
        </MenuButton>
      </div>

      <div>
        <MenuButton
          icon={<Icon name="evaluate" />}
          active={activeButton === "evaluate"}
          disabled
        >
          Evaluate
        </MenuButton>
      </div>

      <div onClick={() => setActiveButton("settings")}>
        <MenuButton
          icon={<Icon name="settings" />}
          active={activeButton === "settings"}
        >
          Configure
        </MenuButton>
      </div>

      <div onClick={() => setActiveButton("help")}>
        <MenuButton
          icon={<Icon name="help" />}
          active={activeButton === "help"}
        >
          Help
        </MenuButton>
      </div>
    </Menu>
  );
}
