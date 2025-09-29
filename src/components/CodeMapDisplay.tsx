import { Plus } from "lucide-react";
import type { HealthcareItem } from "../types";

interface CodeMapDisplayProps {
  selectedItem: HealthcareItem;
  addToProblemList: () => void;
}

const CodeMapDisplay: React.FC<CodeMapDisplayProps> = ({
  selectedItem,
  addToProblemList,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        Code Mappings
      </h3>

      <div className="space-y-4">
        <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
          <div className="text-sm font-medium text-orange-800">
            NAMASTE (Traditional Indian)
          </div>
          <div className="text-lg font-bold text-orange-900">
            {selectedItem.namasteTerm}
          </div>
          <div className="text-sm text-orange-700">
            {selectedItem.namasteCode}
          </div>
        </div>

        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="text-sm font-medium text-blue-800">
            TM2 (WHO Traditional Medicine)
          </div>
          <div className="text-lg font-bold text-blue-900">
            {selectedItem.tm2Term}
          </div>
          <div className="text-sm text-blue-700">{selectedItem.tm2Code}</div>
        </div>

        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
          <div className="text-sm font-medium text-green-800">
            ICD-11 (International)
          </div>
          <div className="text-lg font-bold text-green-900">
            {selectedItem.icd11Term}
          </div>
          <div className="text-sm text-green-700">{selectedItem.icd11Code}</div>
        </div>
      </div>

      <button
        onClick={addToProblemList}
        className="w-full mt-4 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
      >
        <Plus className="w-5 h-5" />
        Add to Problem List
      </button>
    </div>
  );
};

export default CodeMapDisplay;
