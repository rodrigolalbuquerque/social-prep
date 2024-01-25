"use client";
export function NavBar() {
  return (
    <nav className="hidden bg-slate-800 sm:block">
      <ul className="flex justify-between p-5 text-2xl font-bold text-slate-200">
        <li>HomePage</li>
        <li>Posts</li>
        <li>Hashtags</li>
      </ul>
    </nav>
  );
}
