"use client";

interface WarningBannerProps {
  categories: string[];
}

export default function WarningBanner({ categories }: WarningBannerProps) {
  if (categories.length === 0) return null;

  return (
    <div className="warning-banner">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        />
      </svg>
      <div>
        <p className="font-medium mb-1">
          ⚠ 제품중분류에 예상치 못한 값이 포함되어 있습니다:
        </p>
        <p className="text-amber-700">
          {categories.join(", ")}
        </p>
        <p className="text-amber-600 text-xs mt-1">
          해당 값들은 &quot;전체&quot; 탭 합계에만 포함됩니다.
        </p>
      </div>
    </div>
  );
}
