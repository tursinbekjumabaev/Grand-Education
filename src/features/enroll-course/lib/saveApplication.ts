import type { EnrollFormValues } from "../model/schema";

const STORAGE_KEY = "grand-education-applications";

export interface SavedApplication extends EnrollFormValues {
  id: string;
  createdAt: string;
}

export async function saveApplication(
  values: EnrollFormValues
): Promise<SavedApplication> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const newApplication: SavedApplication = {
    ...values,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString()
  };

  const currentRaw = localStorage.getItem(STORAGE_KEY);
  const current: SavedApplication[] = currentRaw ? JSON.parse(currentRaw) : [];

  current.push(newApplication);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(current));

  return newApplication;
}