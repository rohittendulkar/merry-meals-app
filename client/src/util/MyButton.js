import React from "react";

import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

export default ({ children, onClick, tip, btnClassName, tipClassName }) => (
  <Tooltip title={tip} className={tipClassName} placement="bottom">
    <IconButton onClick={onClick} className={btnClassName} size="large">
      {children}
    </IconButton>
  </Tooltip>
);
