import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatAccountingNumber(number: number) {
  return number.toLocaleString('en-US', {
    minimumFractionDigits: Number.isInteger(number) ? 0 : 2,
    maximumFractionDigits: 2
  });
}

export function formatTimeLeft(endTimestamp: number) {
  const now = Date.now() / 1000;
  const timeLeft = endTimestamp - now;
  
  // If time has already passed
  if (timeLeft <= 0) {
    return "ended";
  }
  
  // Less than or equal to a minute
  if (timeLeft <= 60) {
    return "soon";
  }
  
  // Less than 60 minutes
  if (timeLeft < 60 * 60) {
    const mins = Math.floor(timeLeft / 60);
    return `${mins} mins`;
  }
  
  // Less than 24 hours
  if (timeLeft < 24 * 60 * 60) {
    const hours = Math.round(timeLeft / (60 * 60));
    if (hours === 1) {
      return `${hours} hour`;
    }
    return `${hours} hours`;
  }
  
  // Less than 30 days (1 month)
  if (timeLeft < 30 * 24 * 60 * 60) {
    const days = Math.floor(timeLeft / (24 * 60 * 60));
    if (days === 1) {
      return `${days} day`;
    }
    return `${days} days`;
  }
  
  // Less than a year (12 months)
  if (timeLeft < 365 * 24 * 60 * 60) {
    const months = Math.floor(timeLeft / (30 * 24 * 60 * 60));
    if (months === 1) {
      return `${months} month`;
    }
    return `${months} months`;
  }
  
  // More than a year
  const years = Math.floor(timeLeft / (365 * 24 * 60 * 60));
  return `${years} years`;
}