import React from "react";
import { Dialog as MuiDialog, Slide } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { TransitionProps } from "@mui/material/transitions";

type DialogProps = {
  title?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  open: boolean;
  onClose?: () => void;
  TransitionComponent?: React.ComponentType<TransitionProps>;
};

const Dialog: React.FC<DialogProps> = ({
  title,
  children,
  actions,
  open,
  onClose,
  TransitionComponent = Slide,
}) => {
  return (
    <MuiDialog
      open={open}
      onClose={onClose}
      TransitionComponent={TransitionComponent}
    >
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>{children}</DialogContent>
      {actions && <DialogActions>{actions}</DialogActions>}
    </MuiDialog>
  );
};

export default Dialog;
