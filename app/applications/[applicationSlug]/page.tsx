import ApplicationDetailRow from "@/components/ApplicationDetailRow";
import NoteCard from "@/components/noteCard";
import { ButtonStyling } from "../page";

export default async function ApplicationDetailsPage({
  params,
}: {
  params: Promise<{ applicationSlug: string }>;
}) {
  const h2Styling = "font-bold text-2xl text-[#1e8fa3] mb-8";
  const { applicationSlug } = await params;

  // @TODO: fetch detail with async call
  const applicationDetail = {
    id: 2,
    companyName: "Shopify",
    jobTitle: "Fullstack Developer",
    jobType: "full-time",
    location: "Remote",
    remoteType: "remote",
    status: "interview",
    jobUrl: "https://shopify.com/careers/fullstack-dev",

    appliedAt: new Date("2026-02-05"),
    createdAt: new Date("2026-02-05"),
    updatedAt: new Date("2026-02-20"),

    contactName: "Michael Lee",
    contactEmail: "michael.lee@shopify.com",
    contactLinkedin: "https://linkedin.com/in/michaellee",

    salaryRange: "€80k - €100k",
    source: "Referral",

    notes: [
      {
        id: "n2",
        content: "First interview scheduled for Feb 25.",
        createdAt: new Date("2026-02-20"),
      },
      {
        id: "n3",
        content: "Tech stack: React, Ruby, GraphQL.",
        createdAt: new Date("2026-02-20"),
      },
    ],
  };

  return (
    <div className="p-8 flex flex-col">
      <div className="w-full bg-white rounded-2xl shadow-md p-4 border border-gray-200 hover:shadow-lg transition">
        <h2 className={h2Styling}>Details</h2>

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
              value={new Date(applicationDetail.appliedAt).toLocaleDateString()}
            />

            <ApplicationDetailRow
              title="Status"
              value={applicationDetail.status}
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
