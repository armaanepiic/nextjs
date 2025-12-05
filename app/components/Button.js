"use client";

export default function Button() {
  return (
    <div className="mt-5">
      <button
        className="rounded-lg px-4 py-1 border-0 bg-zinc-300 text-black cursor-pointer hover:bg-zinc-400"
        onClick={() => console.log("I have clicked here!")}
      >
        Click me
      </button>
    </div>
  );
}
