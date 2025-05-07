"use client";

import React, { useState } from "react";
import { redirect } from "next/navigation";

export default function CreateProfileForm() {
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/create-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, major }),
      });
      if (res.ok) {
        redirect("/dashboard");
      } else {
        // TODO: show error feedback to the user
        setLoading(false);
      }
    } catch (error) {
      console.error("Failed to create profile:", error);
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="input-style"
      />
      <input
        type="text"
        placeholder="Major"
        value={major}
        onChange={(e) => setMajor(e.target.value)}
        required
        className="input-style"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600 transition"
      >
        {loading ? "Creating..." : "Create Profile"}
      </button>
    </form>
  );
}