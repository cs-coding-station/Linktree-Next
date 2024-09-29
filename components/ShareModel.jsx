"use client";
import { ChevronRight, Copy, MessageCircle, X } from "lucide-react";
import { useState } from "react";

export default function ShareModal({ open, close }) {
  const [copyText, setCopyText] = useState("Copy");

  function shareLink() {
    navigator.clipboard.writeText("https://links-coding-space.netlify.app/");
    setCopyText("Copied");
  }

  return (
    <div className={open ? "visible" : "invisible"}>
      <div
        className={`bg-black fixed left-0 top-0 z-20 w-full h-full transition-all duration-300 ease ${
          open ? "opacity-30" : "opacity-0"
        }`}
      ></div>

      <div
        className={`fixed left-0 top-0 z-30 w-full h-full flex items-center transition-all duration-300 ease-in-out ${
          open
            ? "opacity-100 translate-y-[0px]"
            : "opacity-0 translate-y-[-50px]"
        }`}
      >
        <div className="bg-white w-auto m-auto p-4 rounded-lg">
          <div className="flex justify-between items-center mb-10">
            <p className="text-gray-800 font-medium text-lg">Share this page</p>
            <button
              type="button"
              className="bg-gray-300 w-7 h-7 justify-center items-center flex rounded-full"
            >
              <X size={20} onClick={close} />
            </button>
          </div>

          <div className="flex items-center justify-between cursor-pointer">
            <div className="flex items-center">
              <MessageCircle color="green" size="20" />
              <a
                href="http://wa.me/?text=https://links-coding-space.netlify.app/"
                target="_blank"
              >
                <span className="ml-2 text-gray-800 text-lg mr-8">
                  Share with Whatsapp
                </span>
              </a>
            </div>

            <ChevronRight />
          </div>

          <div
            onClick={() => shareLink()}
            className="cursor-pointer flex justify-between gap-4 mt-8 border-2 border-gray-200 p-2 rounded items-center"
          >
            <Copy />
            <p>links-coding-space.netlify.com</p>
            <p
              className={`font-medium ${
                copyText === "Copy" ? "text-gray-800" : "text-green-800"
              }`}
            >
              {copyText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
