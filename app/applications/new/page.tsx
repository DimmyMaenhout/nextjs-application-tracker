"use client";

import {
  addApplication,
  AddApplicationActionState,
} from "@/actions/Application";
import Button from "@/components/Button";
import FormRow from "@/components/form/FormRow";
import SelectField from "@/components/form/SelectField";
import TextAreaField from "@/components/form/TextAreaField";
import TextField from "@/components/form/TextField";
import {
  ApplicationStatus,
  JobType,
  RemoteType,
} from "@/lib/generated/prisma/enums";

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
      remoteType: RemoteType.on_site,

      status: ApplicationStatus.to_apply,
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

  const applicationStatusItems = Object.values(ApplicationStatus).map(
    (value) => ({
      value,
      label: value.replaceAll("_", " "),
    }),
  );

  const jobTypeItems = Object.values(JobType).map((value) => ({
    value,
    label: value.replaceAll("_", " "),
  }));

  const remoteTypeItems = Object.values(RemoteType).map((value) => ({
    value: value,
    label: value.replaceAll("_", " "),
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
            <FormRow>
              <SelectField
                name="status"
                label="Application Status"
                error={state.errors.status}
                items={applicationStatusItems}
              />

              <TextField
                name="appliedAt"
                label="Applied At"
                error={state.errors.appliedAt}
                type="date"
              />
            </FormRow>

            <FormRow>
              <TextField
                name="jobTitle"
                label="Job Title"
                error={state.errors.jobTitle}
                type="text"
              />

              <TextField
                name="companyName"
                label="Company Name"
                error={state.errors.companyName}
                type="text"
              />
            </FormRow>

            <TextField
              name="jobUrl"
              label="Job URL"
              error={state.errors.jobUrl}
              type="url"
            />

            <FormRow>
              <SelectField
                name="jobType"
                label="Job Type"
                error={state.errors.jobType}
                items={jobTypeItems}
              />

              <SelectField
                name="remoteType"
                label="Remote Type"
                error={state.errors.remoteType}
                items={remoteTypeItems}
              />
            </FormRow>

            <FormRow>
              <TextField
                name="contactName"
                label="Contact Name"
                error={state.errors.contactName}
                type="text"
              />

              <TextField
                name="contactEmail"
                label="Contact Email"
                error={state.errors.contactEmail}
                type="email"
              />
            </FormRow>

            <FormRow>
              <TextField
                name="location"
                label="Location"
                error={state.errors.location}
                type="text"
              />

              <TextField
                name="source"
                label="Source"
                error={state.errors.source}
                type="text"
              />
            </FormRow>

            <TextAreaField name="notes" rows={5} />
          </div>
          <Button className={`self-end`} type="submit" disabled={isPending}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
