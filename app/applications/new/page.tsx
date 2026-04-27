"use client";

import { addApplication, AddApplicationActionState } from "@/actions/actions";
import Button from "@/components/Button";
import { FormField } from "@/components/form/formField";

import {
  ApplicationStatusArrayValues,
  applicationStatuses,
} from "@/models/ApplicationStatus";
import { JobTypeArrayValues, JobTypes } from "@/models/JobType";
import { useActionState } from "react";

export default function NewApplicationPage() {
  const [state, action, isPending] = useActionState<
    AddApplicationActionState,
    FormData
  >(addApplication, {
    fields: {
      companyName: "",
      jobTitle: "",
      jobType: undefined,
      location: undefined,
      remoteType: undefined,

      status: "to_apply",
      jobUrl: undefined,
      appliedAt: undefined,

      contactName: undefined,
      contactEmail: undefined,
      contactLinkedin: undefined,

      source: undefined,
      notes: undefined,
    },
    errors: {},
    success: false,
  });

  const inputStyle = "border-2 border-stone-400 rounded w-full px-1";

  const applicationStatusItems = applicationStatuses.map(
    (status: ApplicationStatusArrayValues) => ({
      value: status,
      label: status.replaceAll("_", " "),
    }),
  );

  const jobTypeItems = JobTypes.map((jobType: JobTypeArrayValues) => ({
    value: jobType,
    label: jobType.replaceAll("_", " "),
  }));

  return (
    <div className="border rounded p-8 border-stone-500">
      <div className="mb-8">
        <h1 className="font-bold text-3xl text-(--dark-teal) mb-4">
          New Application
        </h1>
        <p>
          Congrats on being able to add a new application, fill in the details
          and be happy about a new door opening!
        </p>
      </div>
      <form action={action}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4">
              <FormField
                name="applicationStatus"
                label="Status"
                className="flex-1"
              >
                <select name="applicationStatus" className={inputStyle}>
                  {applicationStatusItems.map((status) => (
                    <option key={status.value} value={status.value}>
                      {status.label}
                    </option>
                  ))}
                </select>
              </FormField>

              <FormField
                name="appliedAt"
                label="Applied At"
                error={state.errors.appliedAt}
              >
                <input className={inputStyle} type="date" />
              </FormField>
            </div>

            <div className="flex flex-row gap-4">
              <FormField
                name="jobTitle"
                label="Job Title"
                error={state.errors.jobTitle}
              >
                <input className={inputStyle} type="text" />
              </FormField>

              <FormField
                name="companyName"
                label="Company Name"
                error={state.errors.companyName}
              >
                <input className={inputStyle} type="text" />
              </FormField>
            </div>

            <div className="flex flex-row gap-4">
              <FormField
                name="jobType"
                label="Job Type"
                error={state.errors.jobType}
              >
                <select name="jobType" className={inputStyle}>
                  {jobTypeItems.map((jobType) => (
                    <option value={jobType.value}>{jobType.label}</option>
                  ))}
                </select>
              </FormField>

              <FormField
                name="remoteType"
                label="Remote Type"
                error={state.errors.remoteType}
              >
                <input className={inputStyle} type="text" />
              </FormField>
            </div>

            <div className="flex flex-row gap-4">
              <FormField
                name="contactName"
                label="Contact Name"
                error={state.errors.contactName}
              >
                <input className={inputStyle} type="text" />
              </FormField>

              <FormField
                name="contactEmail"
                label="Contact Email"
                error={state.errors.contactEmail}
              >
                <input className={inputStyle} type="email" />
              </FormField>
            </div>

            <div className="flex flex-row gap-4">
              <FormField
                name="location"
                label="Location"
                error={state.errors.location}
              >
                <input className={inputStyle} type="text" />
              </FormField>

              <FormField
                name="source"
                label="Source"
                error={state.errors.source}
              >
                <input className={inputStyle} type="text" />
              </FormField>
            </div>

            <div className="flex flex-row gap-4">
              <FormField
                name="jobUrl"
                label="Job URL"
                error={state.errors.jobUrl}
              >
                <input className={inputStyle} type="url" />
              </FormField>
            </div>

            <FormField name="notes" label="Notes" error={state.errors.notes}>
              <textarea
                className={inputStyle}
                name="notes"
                rows={5}
                id="notes"
              />
            </FormField>
          </div>
          <Button className={`self-end`} type="submit" disabled={isPending}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
