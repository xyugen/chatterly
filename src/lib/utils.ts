import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

//TODO: Implementation of fetchRecentMessage
export const fetchRecentMessage = (userId: string) => {
  return { timeSent: "5 min ago", content: "Hello, how are you?" }
}