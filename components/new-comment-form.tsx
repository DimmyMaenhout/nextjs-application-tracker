"use client";

import { addNote, AddNoteActionState } from "@/actions/Application";
import TextAreaField from "./form/TextAreaField";
import Button from "./Button";
import { useActionState } from "react";

type NewCommentFormProps = {
  applicationId: string;
};

export default function NewCommentForm({ applicationId }: NewCommentFormProps) {
  const addNoteWithId = addNote.bind(null, applicationId);

  const [state, action, isPending] = useActionState<
    AddNoteActionState,
    FormData
  >(addNoteWithId, {
    fields: {
      note: undefined,
    },
    errors: {},
    success: false,
  });

  return (
    <form action={action}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <TextAreaField
            name="note"
            label="Note"
            rows={5}
            error={state.errors.note}
          />
        </div>
        <Button className={`self-end`} type="submit" disabled={isPending}>
          Submit
        </Button>
      </div>
    </form>
  );
}
