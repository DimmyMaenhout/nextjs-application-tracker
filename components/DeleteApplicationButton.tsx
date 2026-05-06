"use client";

import { deleteApplication } from "@/actions/Application";
import { useConfirm } from "./modals/confirm-provider";
import Button from "./Button";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

export function DeleteApplicationButton({ id }: { id: string }) {
  const { confirm } = useConfirm();
  const router = useRouter();

  const handleDelete = () => {
    confirm({
      title: "Verwijder sollicitatie?",
      description: "Deze actie kan niet ongedaan gemaakt worden.",
      onConfirm: async () => {
        await deleteApplication(id);

        router.push("/appliations");
        router.refresh();
      },
    });
  };

  return (
    <Button variant="danger" onClick={handleDelete}>
      <Trash2 />
    </Button>
  );
}
