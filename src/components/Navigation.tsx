"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRANDS } from "@/types/sales";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="flex items-center h-14 gap-8">
          {/* 로고 */}
          <Link
            href="/"
            className="text-lg font-bold text-blue-600"
          >
            악세사리 매출
          </Link>

          {/* 네비게이션 링크 */}
          <div className="flex items-center gap-2">
            {BRANDS.map((brand) => (
              <Link
                key={brand.key}
                href={brand.path}
                className={cn(
                  "px-4 py-2 rounded-lg font-medium transition-all duration-200",
                  pathname === brand.path
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                )}
              >
                {brand.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
