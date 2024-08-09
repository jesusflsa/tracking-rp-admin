"use client";

import { ChangeEvent, useState } from "react";
import RightArrow from "./icons/right-arrow";

function Form() {
  const [value, setValue] = useState("");

  async function handleSubmit() {}

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  const loading = false;

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <input
        id="search-code"
        name="search-code"
        className="focus-visible:outline-primary focus-visible:outline focus-visible:outline-2 w-screen max-w-[600px] p-4 bg-input disabled:cursor-not-allowed disabled:bg-submit transition-colors"
        type="text"
        placeholder="Ingresa tu código"
        value={value}
        autoComplete="off"
        onChange={handleChange}
        disabled={loading}
      />
      {value.trim().length > 1 && (
        <button
          className="transition-opacity opacity-1 animate-fade-in rounded absolute top-1/2 right-4 border border-foreground -translate-y-1/2 grid place-items-center p-2"
          type="submit"
        >
          <RightArrow />
        </button>
      )}
    </form>
  );
}

export default Form;
