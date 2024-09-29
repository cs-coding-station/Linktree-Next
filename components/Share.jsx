"use client";
import { useState } from "react";
import ShareModal from "./ShareModel";

export default function Share() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <p
        onClick={() => setOpen(true)}
        className="text-center mt-4 font-bold text-blue-600 cursor-pointer"
      >
        Share
      </p>

      <ShareModal open={open} close={() => setOpen(false)} />
    </div>
  );
}
