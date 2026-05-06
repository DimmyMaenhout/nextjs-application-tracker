"use client";

import { createContext, PropsWithChildren, useContext, useState } from "react";
import { ConfirmDialog } from "./confim-dialog";

type ConfirmOptions = {
  title: string;
  description?: string;
  onConfirm: () => Promise<void> | void;
};

type ConfirmContextType = {
  confirm: (options: ConfirmOptions) => void;
};

const ConfirmContext = createContext<ConfirmContextType | null>(null);

export function useConfirm() {
  const ctx = useContext(ConfirmContext);

  if (!ctx) {
    throw new Error("useConfirm must be used whithin ConfirmProvider");
  }
  return ctx;
}

export function ConfirmProvider({ children }: PropsWithChildren) {
  const [options, setOptions] = useState<ConfirmOptions | null>(null);

  const confirm = (opts: ConfirmOptions) => {
    setOptions(opts);
  };

  const handleClose = () => setOptions(null);

  const handleConfirm = async () => {
    if (options?.onConfirm) {
      await options.onConfirm();
    }
    handleClose();
  };

  return (
    <ConfirmContext.Provider value={{ confirm }}>
      {children}

      <ConfirmDialog
        open={!!options}
        onClose={handleClose}
        onConfirm={handleConfirm}
        title={options?.title}
        description={options?.description}
      />
    </ConfirmContext.Provider>
  );
}
