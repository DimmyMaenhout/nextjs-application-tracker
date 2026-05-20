import NewApplicationForm from "@/components/forms/new-application-form";

export default function NewApplicationPage() {
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

      <NewApplicationForm />
    </div>
  );
}
