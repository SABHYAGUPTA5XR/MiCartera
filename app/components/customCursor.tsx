"use client";

import useBlobity from "blobity/lib/react/useBlobity";
import { initialBlobityOptions } from "@/utils/blobity.config";

export default function CustomCursor() {
  useBlobity(initialBlobityOptions);
  return null; // This component doesn't render visible UI
}
