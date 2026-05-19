"use client";

import { addNote, AddNoteActionState } from "@/actions/Application";
import Button from "@/components/Button";
import TextAreaField from "@/components/form/TextAreaField";
import { use, useActionState } from "react";

export default function NewCommentPage({
  params,
}: {
  params: Promise<{ applicationSlug: string }>;
}) {
  const { applicationSlug } = use(params);

  const addNoteWithId = addNote.bind(null, applicationSlug);

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
    <div className="border rounded p-8 border-stone-500">
      <div className="mb-8">
        <h1 className="font-bold text-3xl text-(--dark-teal) mb-4">New Note</h1>
        <p>
          Congrats on being able to add a new application, fill in the details
          and be happy about a new door opening!
        </p>
      </div>
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
    </div>
  );
}
