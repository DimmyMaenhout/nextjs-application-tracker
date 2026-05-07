"use client";

import { deleteNote } from "@/actions/Application";
import { useConfirm } from "./modals/confirm-provider";
import Button from "./Button";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Note } from "@/lib/generated/prisma/client";

type DeleteNoteButtonProps = Pick<Note, "id" | "applicationId">;

export default function DeleteNoteButton({
  id,
  applicationId,
}: DeleteNoteButtonProps) {
  const { confirm } = useConfirm();
  const router = useRouter();

  const handleDelete = () => {
    confirm({
      title: "Verwijder notitie?",
      description: "Deze actie kan niet ongedaan gemaakt worden.",
      onConfirm: async () => {
        await deleteNote(id, applicationId);
      },
    });
  };

  return (
    <Button variant="danger" onClick={handleDelete}>
      <Trash2 />
    </Button>
  );
}
