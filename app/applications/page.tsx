import { Application } from "@/models/Application";
import { Columns } from "@/components/applications/columns";
import { DataTable } from "@/components/applications/data-table";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import Button from "@/components/Button";
import { Plus } from "lucide-react";

async function getData(): Promise<Application[]> {
  const applications = await prisma.application.findMany({
    include: { notes: true },
  });

  return applications.map((app) => ({
    id: app.id,
    companyName: app.companyName,
    jobTitle: app.jobTitle,

    jobType: app.jobType ?? undefined,
    location: app.location ?? undefined,
    remoteType: app.remoteType ?? undefined,

    status: app.status,
    jobUrl: app.jobUrl ?? undefined,

    appliedAt: app.appliedAt?.toISOString(),
    createdAt: app.createdAt.toISOString(),
    updatedAt: app.updatedAt.toISOString(),

    contactName: app.contactName ?? undefined,
    contactEmail: app.contactEmail ?? undefined,
    contactLinkedin: app.contactLinkedIn ?? undefined,
    source: app.source ?? undefined,

    notes: app.notes.map((note) => ({
      id: note.id,
      content: note.content,
      createdAt: note.createdAt.toISOString(),
    })),
  }));
}

export default async function ApplicationPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-end mb-2 ">
        <Link href="/applications/new">
          <Button>
            <Plus />
          </Button>
        </Link>
      </div>
      <DataTable columns={Columns} data={data} />
    </div>
  );
}
