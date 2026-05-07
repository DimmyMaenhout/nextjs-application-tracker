"use client";

import { Note } from "@/lib/generated/prisma/client";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "./ui/card";
import DeleteNoteButton from "./DeleteNoteButton";

interface NoteCardProps {
  note: Note;
}

export default function NoteCard({ note }: NoteCardProps) {
  return (
    <Card className="w-full max-w-3xl bg-white rounded-2xl shadow-md p-4 border border-gray-200 hover:shadow-lg transition">
      <CardHeader>
        <CardAction>
          <DeleteNoteButton id={note.id} applicationId={note.applicationId} />
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-gray-800 text-base leading-relaxed">
          {note.content}
        </p>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-gray-500">
          {new Date(note.createdAt).toLocaleDateString()}
        </p>
      </CardFooter>
    </Card>
  );
}
