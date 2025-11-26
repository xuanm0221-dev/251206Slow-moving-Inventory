"use client";

interface StockWeekInputProps {
  value: number;
  onChange: (value: number) => void;
}

export default function StockWeekInput({ value, onChange }: StockWeekInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= 0 && newValue <= 52) {
      onChange(newValue);
    }
  };

  const handleIncrement = () => {
    if (value < 52) onChange(value + 1);
  };

  const handleDecrement = () => {
    if (value > 0) onChange(value - 1);
  };

  return (
    <div className="flex items-center gap-3 bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-sm">
      <label className="text-sm text-gray-600 whitespace-nowrap">
        직영 판매예정 주수 (stock week):
      </label>
      <div className="flex items-center gap-1">
        <button
          onClick={handleDecrement}
          className="w-8 h-8 flex items-center justify-center rounded bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
        >
          -
        </button>
        <input
          type="number"
          value={value}
          onChange={handleChange}
          min={0}
          max={52}
          className="w-16 h-8 text-center bg-white border border-gray-300 rounded text-gray-800 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleIncrement}
          className="w-8 h-8 flex items-center justify-center rounded bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
        >
          +
        </button>
      </div>
      <span className="text-sm text-gray-500">주</span>
    </div>
  );
}
