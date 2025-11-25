"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Dumbbell, BookOpen, LayoutDashboard, Moon, Sun } from "lucide-react";
import clsx from "classnames";
import { useEffect, useState } from "react";

const NavItem = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
  <Link href={href} className="group flex items-center gap-3 rounded-xl px-3 py-2 text-sm hover:bg-muted transition-colors">
    <Icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
    <span>{label}</span>
  </Link>
);

export default function Sidebar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <aside className="hidden lg:block border-l border-border bg-card/50 backdrop-blur-sm">
      <div className="sticky top-0 h-screen p-6 flex flex-col">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <div className="flex items-center justify-between mb-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-primary text-primary-foreground grid place-items-center shadow-card">
                <span className="font-bold">?</span>
              </div>
              <div>
                <div className="font-bold leading-5">Hamuza</div>
                <div className="text-xs text-muted-foreground">???? ?????? ?????????</div>
              </div>
            </Link>
            <button
              aria-label="toggle-theme"
              onClick={() => setTheme((resolvedTheme === "dark" ? "light" : "dark"))}
              className={clsx("btn", "btn-secondary", "p-2 h-9 w-9 rounded-xl")}
            >
              {mounted && (resolvedTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
            </button>
          </div>
        </motion.div>

        <nav className="space-y-1">
          <NavItem href="/" icon={LayoutDashboard} label="????????" />
          <NavItem href="/health" icon={Dumbbell} label="????? ????????" />
          <NavItem href="/education" icon={BookOpen} label="??????? ????????" />
        </nav>

        <div className="mt-auto text-xs text-muted-foreground">
          <div className="h-px bg-border my-4" />
          <p>? {new Date().getFullYear()} Hamuza</p>
        </div>
      </div>
    </aside>
  );
}
