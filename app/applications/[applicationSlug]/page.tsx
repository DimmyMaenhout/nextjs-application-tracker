import { deleteApplication } from "@/actions/Application";
import ApplicationDetailRow from "@/components/ApplicationDetailRow";
import Button from "@/components/Button";
import { DeleteApplicationButton } from "@/components/DeleteApplicationButton";
import NoteCard from "@/components/noteCard";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { APPLICATION_STATUS_META } from "@/lib/constants/Applications";
import { prisma } from "@/lib/prisma";
import { Plus, Trash2 } from "lucide-react";

export default async function ApplicationDetailsPage({
  params,
}: {
  params: Promise<{ applicationSlug: string }>;
}) {
  const h2Styling = "font-extrabold text-2xl text-[#1e8fa3]";
  const { applicationSlug } = await params;

  const applicationDetail = await prisma.application.findFirst({
    include: { notes: true },
    where: { id: applicationSlug },
  });

  if (!applicationDetail) {
    return <p>The requested application couldn't be found, try again later.</p>;
  }

  return (
    <div className="flex flex-col gap-8  ">
      <Card>
        <CardHeader>
          <CardTitle className={h2Styling}>Details</CardTitle>
          <CardAction>
            <DeleteApplicationButton id={applicationSlug} />
          </CardAction>
        </CardHeader>

        <CardContent>
          <div className="mx-auto w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Linker kolom */}
            <div>
              <ApplicationDetailRow
                title="Company Name"
                value={applicationDetail.companyName}
              />

              <ApplicationDetailRow
                title="Job Title"
                value={applicationDetail.jobTitle}
              />

              <ApplicationDetailRow
                title="Location"
                value={applicationDetail.location}
              />

              <ApplicationDetailRow
                title="Source"
                value={applicationDetail.source}
              />
            </div>

            {/* Rechter kolom */}
            <div>
              <ApplicationDetailRow
                title="Applied"
                value={
                  applicationDetail.appliedAt
                    ? new Date(applicationDetail.appliedAt).toLocaleDateString()
                    : ""
                }
              />

              <ApplicationDetailRow
                title="Status"
                value={APPLICATION_STATUS_META[applicationDetail.status].label}
              />

              <ApplicationDetailRow
                title="Contact Name"
                value={applicationDetail.contactName}
              />

              <ApplicationDetailRow
                title="Contact Email"
                value={applicationDetail.contactEmail}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notes */}
      <Card>
        <CardHeader>
          <CardTitle className={h2Styling}>Notes</CardTitle>
          <CardAction>
            <Button>
              <Plus />
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          {applicationDetail.notes.length > 0 ? (
            <div className="flex flex-col gap-4 items-center">
              {applicationDetail.notes.map((note) => (
                <NoteCard key={note.id} note={note} />
              ))}
            </div>
          ) : (
            <p className="text-center">
              You don't have any notes for this application.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
