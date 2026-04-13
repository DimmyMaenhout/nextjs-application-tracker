import { Note } from "@/models/Note";

interface NoteCardProps {
  note: Note;
}

export default function NoteCard({ note }: NoteCardProps) {
  return (
    <div className="max-w-md w-full bg-white rounded-2xl shadow-md p-4 border border-gray-200 hover:shadow-lg transition">
      <div className="flex flex-col gap-2">
        <p className="text-gray-800 text-base leading-relaxed">
          {note.content}
        </p>

        <div className="text-sm text-gray-500 mt-2">
          {new Date(note.createdAt).toLocaleString()}
        </div>
      </div>
    </div>
  );
}
