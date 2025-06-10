"use client";

import { supabase } from "@/utils/supabaseClient";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    // Get current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUserEmail(session.user.email);
      }
    });

    // Listen for auth changes
    const { data: listener } = supabase.auth.onAuthStateChange((_, session) => {
      setUserEmail(session?.user?.email ?? null);
    });

    return () => listener?.subscription?.unsubscribe?.();
  }, []);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white text-blue-900 shadow">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/StatShare.png"
            alt="StatShare Logo"
            width={75}
            height={75}
          />
        </Link>

        <div className="flex items-center gap-4">
          {userEmail ? (
            <>
              <span className="font-semibold">{userEmail}</span>
              <button
                onClick={() => supabase.auth.signOut()}
                className="text-sm text-red-600 hover:underline"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login">
                <span className="hover:underline cursor-pointer">Login</span>
              </Link>
              <Link href="/register">
                <span className="hover:underline cursor-pointer">Register</span>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
