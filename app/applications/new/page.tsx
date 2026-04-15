"use client";

import { addApplication, AddApplicationActionState } from "@/actions/actions";
import { FormField } from "@/components/form/formField";
import { useActionState } from "react";
import { ButtonStyling } from "../page";

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

  const inputStyle = "border-2 border-stone-400 rounded w-full";

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
            {/* @TODO: Change to dropdown (select) where user can select certain values!!! */}
            <FormField name="status" label="Status" className="flex-1">
              <input className={inputStyle} type="text" />
            </FormField>

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

            <FormField
              name="appliedAt"
              label="Applied At"
              error={state.errors.appliedAt}
            >
              <input className={inputStyle} type="date" />
            </FormField>

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

            <FormField name="notes" label="Notes" error={state.errors.notes}>
              <textarea
                className={inputStyle}
                name="notes"
                rows={5}
                id="notes"
              />
            </FormField>
          </div>
          <button
            className={`self-end ${ButtonStyling}`}
            type="submit"
            disabled={isPending}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
