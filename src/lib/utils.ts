import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const  getFeaturedImage=(content:string):string|null=>{
  const match = content.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : null; // Returns the first image URL, or null if no image is found
}


export function convertHashtagToKebabCase(hashtag:string) {
  // Remove the `#` from the beginning, if present
  let text = hashtag.startsWith('#') ? hashtag.slice(1) : hashtag;
  
  // Convert to lowercase and replace uppercase letters with `-lowercase`
  return text
      .replace(/([a-z])([A-Z])/g, '$1-$2')  // Add a hyphen before each uppercase letter
      .toLowerCase();                       // Convert entire string to lowercase
}

