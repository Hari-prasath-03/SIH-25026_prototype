/* eslint-disable @typescript-eslint/no-explicit-any */
import { FileText } from "lucide-react";

const FhirResourceDisplay = ({ fhirResource }: { fhirResource: any }) => (
  <div className="bg-white rounded-lg shadow-lg p-6">
    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
      <FileText className="w-5 h-5 text-indigo-600" />
      Generated FHIR Resource
    </h3>

    <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-xs font-mono overflow-x-auto max-h-96 overflow-y-auto">
      <pre>{JSON.stringify(fhirResource, null, 2)}</pre>
    </div>

    <div className="mt-4 text-sm text-gray-600">
      <p>
        <strong>Resource Type:</strong> Condition (Problem List Item)
      </p>
      <p>
        <strong>Standards:</strong> FHIR R4, NAMASTE, TM2, ICD-11
      </p>
      <p>
        <strong>Status:</strong> Ready for EMR Integration
      </p>
    </div>
  </div>
);

export default FhirResourceDisplay;
