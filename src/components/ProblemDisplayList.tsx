import { FileText } from "lucide-react";
import type { ProblemListItem } from "../types";

interface ProblemDisplayListProps {
  problemList: ProblemListItem[];
  removeProblemItem: (id: string) => void;
}

const ProblemDisplayList: React.FC<ProblemDisplayListProps> = ({
  problemList,
  removeProblemItem,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <FileText className="w-5 h-5 text-purple-600" />
        Active Problem List ({problemList.length})
      </h3>

      <div className="space-y-3 max-h-60 overflow-y-auto">
        {problemList.length === 0 ? (
          <p className="text-gray-500 text-center py-4">
            No problems added yet
          </p>
        ) : (
          problemList.map((problem) => (
            <div key={problem.id} className="p-3 bg-gray-50 rounded-lg border">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium text-gray-800">
                    {problem.namasteTerm}
                  </div>
                  <div className="text-sm text-gray-600">{problem.tm2Term}</div>
                  <div className="text-xs text-gray-500">
                    Added: {problem.dateAdded}
                  </div>
                </div>
                <button
                  onClick={() => removeProblemItem(problem.id)}
                  className="text-red-500 hover:text-red-700 text-sm cursor-pointer"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProblemDisplayList;
