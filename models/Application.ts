import { ApplicationStatus } from "./ApplicationStatus";
import { JobType } from "./JobType";
import { Note } from "./Note";
import { RemoteType } from "./RemoteType";

export interface Application {
  id: string;
  companyName: string;
  jobTitle: string;
  jobType?: JobType;
  location?: string;
  remoteType?: RemoteType;

  status: ApplicationStatus;
  jobUrl?: string;

  appliedAt?: string;
  createdAt: string;
  updatedAt: string;

  contactName?: string;
  contactEmail?: string;
  contactLinkedIn?: string;
  source?: string;
  notes: Note[];
}
