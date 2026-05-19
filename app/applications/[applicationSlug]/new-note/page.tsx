import NewCommentForm from "@/components/forms/new-comment-form";
import { use } from "react";

export default function NewCommentPage({
  params,
}: {
  params: Promise<{ applicationSlug: string }>;
}) {
  const { applicationSlug } = use(params);

  return (
    <div className="border rounded p-8 border-stone-500">
      <div className="mb-8">
        <h1 className="font-bold text-3xl text-(--dark-teal) mb-4">New Note</h1>
        <p>
          Note down anything you find important for this job application
          (questions, feelings, meeting dates, etc.).
        </p>
      </div>
      <NewCommentForm applicationId={applicationSlug} />
    </div>
  );
}
