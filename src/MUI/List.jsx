import * as React from "react";
import Box from "@mui/material/Box";
import { List, Button } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import AcUnit from "@mui/icons-material/AcUnit";
import Edit from "@mui/icons-material/Edit";
export default function BasicList() {
  const arr = [
    {
      name: "Inbox",
      icon: <InboxIcon />,
    },
    {
      name: "Drafts",
      icon: <DraftsIcon />,
    },
    {
      name: "Sent",
      icon: <AcUnit />,
    },
    {
      name: "Update",
      icon: <Edit />,
    },
  ];
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <nav aria-label="main mailbox folders">
        <List>
          {arr.map((value, index) => (
            <div>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>{value.icon}</ListItemIcon>
                  <ListItemText primary={value.name} />
                </ListItemButton>
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </nav>
      <Button variant="contained">Contained</Button>
    </Box>
  );
}
