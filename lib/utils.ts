import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const apiUrl = "http://api.dev.phaqchas.shop/api"
export const baseUrl = "https://api.dev.phaqchas.shop/apiPhaqchas/public"

//export const apiUrl = "http://127.0.0.1:8000/api"
//export const baseUrl = "http://127.0.0.1:8000/"