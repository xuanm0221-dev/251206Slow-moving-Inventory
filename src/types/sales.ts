/**
 * 판매매출 및 재고자산 데이터 타입 정의
 */

// ========== 판매 데이터 타입 ==========

// 판매 월별 데이터 구조
export interface SalesMonthData {
  전체_core: number;
  전체_outlet: number;
  FRS_core: number;
  FRS_outlet: number;
  OR_core: number;
  OR_outlet: number;
}

// 판매 아이템 탭별 데이터 구조
export interface SalesItemTabData {
  [month: string]: SalesMonthData;
}

// 판매 브랜드별 데이터 구조
export interface SalesBrandData {
  전체: SalesItemTabData;
  Shoes: SalesItemTabData;
  Headwear: SalesItemTabData;
  Bag: SalesItemTabData;
  Acc_etc: SalesItemTabData;
}

// 전체 판매 요약 데이터 구조
export interface SalesSummaryData {
  brands: {
    MLB: SalesBrandData;
    "MLB KIDS": SalesBrandData;
    DISCOVERY: SalesBrandData;
  };
  unexpectedCategories: string[];
  months: string[];
}

// ========== 재고 데이터 타입 ==========

// 재고 월별 데이터 구조
export interface InventoryMonthData {
  // 전체재고 (FRS + HQ + OR)
  전체_core: number;
  전체_outlet: number;
  // 대리상재고 (FRS)
  FRS_core: number;
  FRS_outlet: number;
  // 본사재고 (HQ + OR)
  HQ_OR_core: number;
  HQ_OR_outlet: number;
  // OR 판매매출 (직영재고 계산용, 원 단위)
  OR_sales_core: number;
  OR_sales_outlet: number;
}

// 재고 아이템 탭별 데이터 구조
export interface InventoryItemTabData {
  [month: string]: InventoryMonthData;
}

// 재고 브랜드별 데이터 구조
export interface InventoryBrandData {
  전체: InventoryItemTabData;
  Shoes: InventoryItemTabData;
  Headwear: InventoryItemTabData;
  Bag: InventoryItemTabData;
  Acc_etc: InventoryItemTabData;
}

// 전체 재고 요약 데이터 구조
export interface InventorySummaryData {
  brands: {
    MLB: InventoryBrandData;
    "MLB KIDS": InventoryBrandData;
    DISCOVERY: InventoryBrandData;
  };
  unexpectedCategories: string[];
  months: string[];
  daysInMonth: { [month: string]: number };
}

// ========== 공통 타입 ==========

// 아이템 탭 타입
export type ItemTab = "전체" | "Shoes" | "Headwear" | "Bag" | "Acc_etc";

// 브랜드 타입
export type Brand = "MLB" | "MLB KIDS" | "DISCOVERY";

// 판매 표 행 데이터 타입
export interface TableRow {
  label: string;
  isHeader: boolean;
  indent: boolean;
  dataKey: string;
}

// 판매 표 행 정의
export const SALES_TABLE_ROWS: TableRow[] = [
  { label: "전체판매", isHeader: true, indent: false, dataKey: "전체" },
  { label: "ㄴ 주력상품", isHeader: false, indent: true, dataKey: "전체_core" },
  { label: "ㄴ 아울렛상품", isHeader: false, indent: true, dataKey: "전체_outlet" },
  { label: "대리상판매", isHeader: true, indent: false, dataKey: "FRS" },
  { label: "ㄴ 주력상품", isHeader: false, indent: true, dataKey: "FRS_core" },
  { label: "ㄴ 아울렛상품", isHeader: false, indent: true, dataKey: "FRS_outlet" },
  { label: "직영판매", isHeader: true, indent: false, dataKey: "OR" },
  { label: "ㄴ 주력상품", isHeader: false, indent: true, dataKey: "OR_core" },
  { label: "ㄴ 아울렛상품", isHeader: false, indent: true, dataKey: "OR_outlet" },
];

// 재고 표 행 정의
export const INVENTORY_TABLE_ROWS: TableRow[] = [
  { label: "전체재고", isHeader: true, indent: false, dataKey: "전체" },
  { label: "ㄴ 주력상품", isHeader: false, indent: true, dataKey: "전체_core" },
  { label: "ㄴ 아울렛상품", isHeader: false, indent: true, dataKey: "전체_outlet" },
  { label: "대리상재고", isHeader: true, indent: false, dataKey: "FRS" },
  { label: "ㄴ 주력상품", isHeader: false, indent: true, dataKey: "FRS_core" },
  { label: "ㄴ 아울렛상품", isHeader: false, indent: true, dataKey: "FRS_outlet" },
  { label: "본사재고", isHeader: true, indent: false, dataKey: "HQ_OR" },
  { label: "ㄴ 주력상품", isHeader: false, indent: true, dataKey: "HQ_OR_core" },
  { label: "ㄴ 아울렛상품", isHeader: false, indent: true, dataKey: "HQ_OR_outlet" },
  { label: "직영재고", isHeader: true, indent: false, dataKey: "직영" },
  { label: "ㄴ 주력상품", isHeader: false, indent: true, dataKey: "직영_core" },
  { label: "ㄴ 아울렛상품", isHeader: false, indent: true, dataKey: "직영_outlet" },
  { label: "창고재고", isHeader: true, indent: false, dataKey: "창고" },
  { label: "ㄴ 주력상품", isHeader: false, indent: true, dataKey: "창고_core" },
  { label: "ㄴ 아울렛상품", isHeader: false, indent: true, dataKey: "창고_outlet" },
];

// 아이템 탭 목록
export const ITEM_TABS: ItemTab[] = ["전체", "Shoes", "Headwear", "Bag", "Acc_etc"];

// 브랜드 정보
export const BRANDS: { key: Brand; name: string; path: string }[] = [
  { key: "MLB", name: "MLB", path: "/mlb-sales" },
  { key: "MLB KIDS", name: "MLB KIDS", path: "/mlb-kids-sales" },
  { key: "DISCOVERY", name: "DISCOVERY", path: "/discovery-sales" },
];

// 기본 stock_week 값
export const DEFAULT_STOCK_WEEK = 25;
