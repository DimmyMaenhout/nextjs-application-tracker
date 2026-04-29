"use client";

import { StatusColors } from "@/lib/constants/Applications";
import { Application, ApplicationStatus } from "@/lib/generated/prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const Columns: ColumnDef<Application>[] = [
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status: ApplicationStatus = row.getValue("status");
      const color = StatusColors[status];

      return (
        <div className={`${color} rounded-[8px]  font-bold text-center`}>
          {status}
        </div>
      );
    },
  },
  {
    accessorKey: "jobTitle",
    header: "Job Title",
  },
  {
    accessorKey: "companyName",
    header: "Company Name",
  },
  {
    accessorKey: "jobUrl",
    header: "Job Url",
  },
  {
    accessorKey: "appliedAt",
    header: "Applied at",
    cell: ({ row }) => {
      const appliedAtDate = new Date(row.getValue("appliedAt"));
      const formatted = appliedAtDate.toLocaleDateString();

      return <div>{formatted}</div>;
    },
  },
];
