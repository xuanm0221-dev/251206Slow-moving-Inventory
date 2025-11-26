"use client";

import { ItemTab, ITEM_TABS } from "@/types/sales";
import { cn } from "@/lib/utils";

interface ItemTabsProps {
  selectedTab: ItemTab;
  onTabChange: (tab: ItemTab) => void;
}

export default function ItemTabs({ selectedTab, onTabChange }: ItemTabsProps) {
  const tabLabels: Record<ItemTab, string> = {
    전체: "전체",
    Shoes: "Shoes",
    Headwear: "Headwear",
    Bag: "Bag",
    Acc_etc: "Acc_etc",
  };

  return (
    <div className="flex flex-wrap gap-2">
      {ITEM_TABS.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={cn(
            "px-4 py-2 rounded-lg font-medium transition-all duration-200",
            selectedTab === tab 
              ? "bg-blue-600 text-white" 
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          )}
        >
          {tabLabels[tab]}
        </button>
      ))}
    </div>
  );
}
