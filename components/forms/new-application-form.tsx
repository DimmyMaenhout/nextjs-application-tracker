"use client";

import Button from "../Button";
import TextAreaField from "../form/TextAreaField";
import TextField from "../form/TextField";
import FormRow from "../form/FormRow";
import SelectField from "../form/SelectField";
import { useActionState } from "react";
import {
  addApplication,
  AddApplicationActionState,
} from "@/actions/Application";
import {
  ApplicationStatus,
  JobType,
  RemoteType,
} from "@/lib/generated/prisma/enums";
import { createSelectItems } from "@/util/select";
import {
  APPLICATION_STATUS_META,
  JOB_TYPE_META,
  REMOTE_TYPE_META,
} from "@/lib/constants/Applications";

export default function NewApplicationForm() {
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

  const applicationStatusItems = createSelectItems(
    Object.values(ApplicationStatus),
    APPLICATION_STATUS_META,
  );

  const jobTypeItems = createSelectItems(Object.values(JobType), JOB_TYPE_META);

  const remoteTypeItems = createSelectItems(
    Object.values(RemoteType),
    REMOTE_TYPE_META,
  );

  return (
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

          <TextAreaField name="notes" label="Notes" rows={5} />
        </div>
        <Button className={`self-end`} type="submit" disabled={isPending}>
          Submit
        </Button>
      </div>
    </form>
  );
}
