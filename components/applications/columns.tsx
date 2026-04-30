"use client";

import { APPLICATION_STATUS_META } from "@/lib/constants/Applications";
import { Application, ApplicationStatus } from "@/lib/generated/prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const Columns: ColumnDef<Application>[] = [
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status: ApplicationStatus = row.getValue("status");

      const applicationStatus = APPLICATION_STATUS_META[status];

      return (
        <div
          className={`${applicationStatus.color} rounded-[8px]  font-bold text-center`}
        >
          {applicationStatus.label}
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
      const value = row.getValue("appliedAt")
        ? new Date(row.getValue("appliedAt")).toLocaleDateString()
        : "N/A";

      return <div>{value}</div>;
    },
  },
];
