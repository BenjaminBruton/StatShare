import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 shadow">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="font-bold text-xl cursor-pointer">StatShare</span>
        </Link>
        <div className="flex gap-4">
          <Link href="/login">
            <span className="hover:underline cursor-pointer">Login</span>
          </Link>
          <Link href="/register">
            <span className="hover:underline cursor-pointer">Register</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
