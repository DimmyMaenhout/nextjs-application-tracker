import NoteCard from "@/components/noteCard";

export default async function ApplicationDetailsPage({
  params,
}: {
  params: Promise<{ applicationSlug: string }>;
}) {
  const h2Styling = "font-bold text-2xl text-[#1e8fa3]";
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
  // return <div>ApplicationsDetailPage {applicationSlug}</div>;

  return (
    <div className="p-8 flex flex-col">
      <h2 className={h2Styling}>Details</h2>

      <div className="flex justify-around">
        <div>
          <div className="flex">
            <p className="font-bold w-40">Company Name</p>
            <p>{applicationDetail.companyName}</p>
          </div>

          <div className="flex ">
            <p className="font-bold w-40">Job Title</p>
            <p>{applicationDetail.jobTitle}</p>
          </div>

          <div className="flex">
            <p className="font-bold w-40">Location</p>
            <p>{applicationDetail.location}</p>
          </div>

          <div className="flex">
            <p className="font-bold w-40">Source</p>
            <p>{applicationDetail.source}</p>
          </div>
        </div>

        {/* 2de kolom /  */}

        <div>
          <div className="flex">
            <p className="font-bold w-40">Applied</p>
            <p>{new Date(applicationDetail.appliedAt).toLocaleDateString()}</p>
          </div>

          <div className="flex">
            <p className="font-bold w-40">Status</p>
            <p>{applicationDetail.status}</p>
          </div>

          <div className="flex">
            <p className="font-bold w-40">Contact Name</p>
            <p>{applicationDetail.contactName}</p>
          </div>

          <div className="flex">
            <p className="font-bold w-40">Contact email</p>
            <p>{applicationDetail.contactEmail}</p>
          </div>
        </div>
      </div>

      {/* Notes */}
      <div className="flex flex-col gap-4 mt-8">
        <h2 className={h2Styling}>Notes</h2>
        <div className="flex flex-col gap-4">
          {applicationDetail.notes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      </div>
    </div>
  );
}
