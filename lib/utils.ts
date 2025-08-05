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

export function formatTimeline(startTimestamp: number, endTimestamp: number) {
  const now = Date.now() / 1000;
  
  // If current time is before start time
  if (now < startTimestamp) {
    const timeUntilStart = startTimestamp - now;
    return formatTimeRemaining(timeUntilStart, "starts in");
  }
  
  // If current time is after start but before/at end
  const timeLeft = endTimestamp - now;
  
  // If time has already passed
  if (timeLeft <= 0) {
    return "ended";
  }
  
  return formatTimeRemaining(timeLeft, "ends in");
}

function formatTimeRemaining(timeInSeconds: number, prefix: string) {
  // Less than or equal to a minute
  if (timeInSeconds <= 60) {
    return prefix ? `${prefix} soon` : "soon";
  }
  
  // Less than 60 minutes
  if (timeInSeconds < 60 * 60) {
    const mins = Math.floor(timeInSeconds / 60);
    const result = `${mins} mins`;
    return prefix ? `${prefix} ${result}` : result;
  }
  
  // Less than 24 hours
  if (timeInSeconds < 24 * 60 * 60) {
    const hours = Math.round(timeInSeconds / (60 * 60));
    const result = hours === 1 ? `${hours} hour` : `${hours} hours`;
    return prefix ? `${prefix} ${result}` : result;
  }
  
  // Less than 30 days (1 month)
  if (timeInSeconds < 30 * 24 * 60 * 60) {
    const days = Math.floor(timeInSeconds / (24 * 60 * 60));
    const result = days === 1 ? `${days} day` : `${days} days`;
    return prefix ? `${prefix} ${result}` : result;
  }
  
  // Less than a year (12 months)
  if (timeInSeconds < 365 * 24 * 60 * 60) {
    const months = Math.floor(timeInSeconds / (30 * 24 * 60 * 60));
    const result = months === 1 ? `${months} month` : `${months} months`;
    return prefix ? `${prefix} ${result}` : result;
  }
  
  // More than a year
  const years = Math.floor(timeInSeconds / (365 * 24 * 60 * 60));
  const result = `${years} years`;
  return prefix ? `${prefix} ${result}` : result;
}

export function truncateHash(hash: string, startLength: number = 6, endLength: number = 4) {
  return `${hash.slice(0, startLength)}...${hash.slice(-endLength)}`;
}

export function chainIdFromPoolParams(pool: string) {
  switch (pool.split("-")[3]) {
    case "ethereum":
      return 1;
    case "base":
      return 8453;
    case "arbitrum":
      return 42161;
    case "bnbchain":
      return 56;
    default:
      return 1;
  }
}