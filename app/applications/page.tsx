import { Columns } from "@/components/applications/columns";
import { DataTable } from "@/components/applications/data-table";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import Button from "@/components/Button";
import { Plus } from "lucide-react";
import { Application } from "@/lib/generated/prisma/client";

async function getData(): Promise<Application[]> {
  const applications = await prisma.application.findMany({
    include: { notes: true },
  });

  return applications;
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
