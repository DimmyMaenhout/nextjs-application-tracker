"use client";

import { FormField } from "@/components/form/formField";

// const  newApplicationActionState = {
//     application: Application
// };

// function newApplicationAction(_prevState: newApplicationActionState, formData: FormData) {
//     "use server"; // TODO: move this function to a 'actions' file and then we can remove the "use server" from this function (place it at the top of the file)
// }

export default function NewApplicationPage() {
  //   const [state, dispatchAction, isPending] = useActionState(
  //     newApplicationAction,
  //     newApplicationActionState,
  //   );

  const inputStyle = "border-2 border-stone-400 rounded w-full";

  return (
    <form>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4">
            <FormField name="jobTitle" label="Job Title" className="flex-1">
              <input className={inputStyle} type="text" />
            </FormField>

            <FormField
              name="companyName"
              label="Company Name"
              className="flex-1"
            >
              <input className={inputStyle} type="text" />
            </FormField>
          </div>

          <div className="flex flex-row gap-4">
            <FormField
              name="contactName"
              label="Contact Name"
              className="flex-1"
            >
              <input className={inputStyle} type="text" />
            </FormField>

            <FormField
              name="contactEmail"
              label="Contact Email"
              className="flex-1"
            >
              <input className={inputStyle} type="email" />
            </FormField>
          </div>

          <div className="flex flex-row gap-4">
            <FormField name="location" label="Location" className="flex-1">
              <input className={inputStyle} type="text" />
            </FormField>

            <FormField name="source" label="Source" className="flex-1">
              <input className={inputStyle} type="text" />
            </FormField>
          </div>

          <FormField name="notes" label="Notes">
            <textarea className={inputStyle} name="notes" rows={5} id="notes" />
          </FormField>
        </div>
        <button className="self-end bg-blue-500 hover:bg-blue-700 text-white px-4 py-2  border-black rounded-2xl" type="submit">Submit</button>
      </div>
    </form>
  );
}
