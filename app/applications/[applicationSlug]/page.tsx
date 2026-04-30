import { deleteApplication } from "@/actions/Application";
import ApplicationDetailRow from "@/components/ApplicationDetailRow";
import Button from "@/components/Button";
import NoteCard from "@/components/noteCard";
import { APPLICATION_STATUS_META } from "@/lib/constants/Applications";
import { prisma } from "@/lib/prisma";

export default async function ApplicationDetailsPage({
  params,
}: {
  params: Promise<{ applicationSlug: string }>;
}) {
  const h2Styling = "font-bold text-2xl text-[#1e8fa3] mb-8";
  const { applicationSlug } = await params;

  const applicationDetail = await prisma.application.findFirst({
    include: { notes: true },
    where: { id: applicationSlug },
  });

  if (!applicationDetail) {
    return <p>The requested application couldn't be found, try again later.</p>;
  }

  return (
    <div className="p-8 flex flex-col">
      <div className="w-full rounded-2xl shadow-md p-4 border border-gray-200 hover:shadow-lg transition">
        <div className="flex justify-between">
          <h2 className={h2Styling}>Details</h2>
          <form action={deleteApplication.bind(null, applicationSlug)}>
            <Button variant="danger">Delete</Button>
          </form>
        </div>
        <div className="flex justify-around ">
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

          {/* 2de kolom /  */}

          <div>
            <ApplicationDetailRow
              title="Applied"
              value={
                applicationDetail.appliedAt
                  ? new Date(
                      applicationDetail.appliedAt ?? "",
                    ).toLocaleDateString()
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
      </div>

      {/* Notes */}
      <div className="flex flex-col gap-4 mt-8">
        <div className="w-full bg-white rounded-2xl p-4">
          <h2 className={h2Styling}>Notes</h2>

          <div className="flex flex-col gap-4 items-center">
            {applicationDetail.notes.map((note) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
