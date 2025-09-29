import { Search } from "lucide-react";
import type { HealthcareItem } from "../types";

interface AutoCompleteInputProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  suggestions: HealthcareItem[];
  showSuggestions: boolean;
  handleSelectItem: (item: HealthcareItem) => void;
}

const AutoCompleteInput: React.FC<AutoCompleteInputProps> = ({
  searchQuery,
  setSearchQuery,
  suggestions,
  showSuggestions,
  handleSelectItem,
}) => (
  <div className="bg-white rounded-lg shadow-lg p-6">
    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
      <Search className="w-5 h-5 text-blue-600" />
      Search Healthcare Terms
    </h3>

    <div className="relative">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Type symptoms or diagnosis (e.g., headache, fever, diabetes)..."
        className="w-full outline-none px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
      />

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {suggestions.map((item, index) => (
            <div
              key={index}
              onClick={() => handleSelectItem(item)}
              className="p-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0"
            >
              <div className="font-medium text-gray-800">
                {item.namasteTerm}
              </div>
              <div className="text-sm text-gray-600">{item.tm2Term}</div>
              <div className="text-xs text-gray-500">
                {item.namasteCode} | {item.tm2Code} | {item.icd11Code}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default AutoCompleteInput;
