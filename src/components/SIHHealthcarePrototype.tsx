/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";

import Header from "./Header";
import FhirResourceDisplay from "./FhirResourceDisplay";
import CodeMapDisplay from "./CodeMapDisplay";

import healthcareDataset from "../assets/healthcareDataset";
import { fuzzySearch, gegerateFhirResource } from "../utils";
import type { HealthcareItem, ProblemListItem } from "../types";
import AutoCompleteInput from "./AutoCompleteInput";
import ProblemDisplayList from "./ProblemDisplayList";

const SIHHealthcarePrototype = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<HealthcareItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<HealthcareItem | null>(null);
  const [problemList, setProblemList] = useState<ProblemListItem[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [fhirResource, setFhirResource] = useState<any>(null);

  const [isJustSelected, setIsJustSelected] = useState(false);

  useEffect(() => {
    if (isJustSelected) {
      setIsJustSelected(false);
      return;
    }

    if (searchQuery.trim() === "") {
      setSuggestions([]);
      if (selectedItem) setSelectedItem(null);
      setShowSuggestions(false);
      return;
    }

    const results = fuzzySearch(healthcareDataset, searchQuery, [
      "namasteTerm",
      "tm2Term",
      "icd11Term",
      "namasteCode",
      "tm2Code",
      "icd11Code",
    ]);

    setSuggestions(results);
    setShowSuggestions(true);
  }, [searchQuery]);

  const handleSelectItem = (item: HealthcareItem) => {
    setIsJustSelected(true);
    setSelectedItem(item);
    setSearchQuery(item.namasteTerm);
    setShowSuggestions(false);
  };

  const addToProblemList = () => {
    if (!selectedItem) return;

    const newProblemItem: ProblemListItem = {
      id: `problem-${Date.now().toString(34)}`,
      ...selectedItem,
      dateAdded: new Date().toISOString().split("T")[0],
    };

    setProblemList((prev) => [...prev, newProblemItem]);
    generateFHIRResource(newProblemItem);

    setSelectedItem(null);
    setSearchQuery("");
  };

  const generateFHIRResource = (problemItem: ProblemListItem) => {
    const fhir = gegerateFhirResource(problemItem);

    setFhirResource(fhir);
  };

  const removeProblemItem = (id: string) => {
    setProblemList((prev) => prev.filter((item) => item.id !== id));
    if (fhirResource && fhirResource.id === id) {
      setFhirResource(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 p-6">
      <div className="max-w-6xl mx-auto">
        <Header />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Panel - Search and Selection */}
          <div className="space-y-6">
            <AutoCompleteInput
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              suggestions={suggestions}
              showSuggestions={showSuggestions}
              handleSelectItem={handleSelectItem}
            />

            {selectedItem && (
              <CodeMapDisplay
                selectedItem={selectedItem}
                addToProblemList={addToProblemList}
              />
            )}
          </div>

          <div className="space-y-6">
            <ProblemDisplayList
              problemList={problemList}
              removeProblemItem={removeProblemItem}
            />

            {fhirResource && (
              <FhirResourceDisplay fhirResource={fhirResource} />
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default SIHHealthcarePrototype;
