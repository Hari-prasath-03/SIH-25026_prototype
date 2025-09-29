import { Activity, Stethoscope } from "lucide-react";

const Header = () => (
  <div className="text-center mb-8">
    <div className="flex items-center justify-center gap-3 mb-4">
      <Stethoscope className="w-8 h-8 text-blue-600" />
      <h1 className="text-3xl font-bold text-gray-800">
        Smart India Hackathon
      </h1>
      <Activity className="w-8 h-8 text-green-600" />
    </div>
    <h2 className="text-xl text-gray-600 mb-2">
      Healthcare Terminology Mapping System
    </h2>
    <p className="text-sm text-gray-500">
      NAMASTE → TM2 → ICD-11 Code Translation
    </p>
  </div>
);

export default Header;