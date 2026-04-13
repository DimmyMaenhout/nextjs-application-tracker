import { Application } from "@/models/Application";
import { Columns } from "@/components/applications/columns";
import { DataTable } from "@/components/applications/data-table";
import Link from "next/link";

const mockApplications: Application[] = [
  {
    id: 1,
    companyName: "Stripe",
    jobTitle: "Frontend Engineer",
    jobType: "full-time",
    location: "Remote (EU)",
    remoteType: "remote",
    status: "applied",
    jobUrl: "https://stripe.com/jobs/frontend-engineer",

    appliedAt: new Date("2026-02-10"),
    createdAt: new Date("2026-02-10"),
    updatedAt: new Date("2026-02-10"),

    contactName: "Sarah Johnson",
    contactEmail: "sarah.johnson@stripe.com",
    contactLinkedin: "https://linkedin.com/in/sarahjohnson",

    salaryRange: "€75k - €95k",
    source: "LinkedIn",

    notes: [
      {
        id: "n1",
        content: "Interesting product culture. Uses React + TypeScript.",
        createdAt: new Date("2026-02-10"),
      },
    ],
  },
  {
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
  },
  {
    id: 3,
    companyName: "Vercel",
    jobTitle: "Developer Experience Engineer",
    jobType: "full-time",
    location: "Remote",
    remoteType: "remote",
    status: "wishlist",
    jobUrl: "https://vercel.com/careers",

    createdAt: new Date("2026-03-01"),
    updatedAt: new Date("2026-03-01"),

    salaryRange: "€90k - €120k",
    source: "Twitter",

    notes: [],
  },
  {
    id: 4,
    companyName: "Spotify",
    jobTitle: "Frontend Developer",
    jobType: "full-time",
    location: "Stockholm",
    remoteType: "hybrid",
    status: "rejected",
    jobUrl: "https://spotifyjobs.com",

    appliedAt: new Date("2026-01-15"),
    createdAt: new Date("2026-01-15"),
    updatedAt: new Date("2026-02-01"),

    contactName: "Emma Larsson",
    contactEmail: "emma.larsson@spotify.com",
    contactLinkedin: "https://linkedin.com/in/emmalarsson",

    salaryRange: "€70k - €90k",
    source: "Company website",

    notes: [
      {
        id: "n4",
        content: "Rejected after CV screening.",
        createdAt: new Date("2026-02-01"),
      },
    ],
  },
];

async function getData(): Promise<Application[]> {
  // Fetch data from your API here.
  return mockApplications;
}

export const ButtonStyling = `px-4 py-2 bg-[var(--color-main-button)] hover:bg-[var(--color-main-button-hover)] text-white font-bold rounded-2xl`;

export default async function ApplicationPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-end mb-2 ">
        <Link href="/applications/new" className={ButtonStyling}>
          Add Application
        </Link>
      </div>
      <DataTable columns={Columns} data={data} />
    </div>
  );
}
