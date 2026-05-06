"use client";

import Button from "../Button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

type ConfirmDialogProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  description?: string;
};

export function ConfirmDialog({
  open,
  onClose,
  onConfirm,
  title,
  description,
}: ConfirmDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        {description && <p>{description}</p>}

        <DialogFooter>
          <Button onClick={onClose}>Annuleer</Button>

          <Button variant="danger" onClick={onConfirm}>
            Bevestig
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
