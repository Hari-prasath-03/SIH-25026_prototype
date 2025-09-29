import type { HealthcareItem, ProblemListItem } from "../types";

type Keys = keyof HealthcareItem;

export const fuzzySearch = (
  items: HealthcareItem[],
  query: string,
  keys: Keys[]
) => {
  if (!query) return [];

  const normalizedQuery = query.toLowerCase();
  return items
    .map((item) => {
      let score = 0;
      keys.forEach((key) => {
        const value = item[key]?.toLowerCase() || "";
        if (value.includes(normalizedQuery)) {
          score += normalizedQuery.length / value.length;
        }

        if (value.startsWith(normalizedQuery)) {
          score += 0.5;
        }
      });
      return { item, score };
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map((result) => result.item);
};

export const gegerateFhirResource = (problemItem: ProblemListItem) => {
  return {
    resourceType: "Condition",
    id: problemItem.id,
    meta: {
      versionId: "1",
      lastUpdated: new Date().toISOString(),
      profile: ["http://hl7.org/fhir/StructureDefinition/Condition"],
    },
    identifier: [
      {
        system: "http://namaste.gov.in/codes",
        value: problemItem.namasteCode,
      },
      {
        system: "http://tm2.who.int/codes",
        value: problemItem.tm2Code,
      },
      {
        system: "http://id.who.int/icd11",
        value: problemItem.icd11Code,
      },
    ],
    clinicalStatus: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
          code: "active",
          display: "Active",
        },
      ],
    },
    verificationStatus: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/condition-ver-status",
          code: "confirmed",
          display: "Confirmed",
        },
      ],
    },
    category: [
      {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-category",
            code: "problem-list-item",
            display: "Problem List Item",
          },
        ],
      },
    ],
    code: {
      coding: [
        {
          system: "http://namaste.gov.in/codes",
          code: problemItem.namasteCode,
          display: problemItem.namasteTerm,
        },
        {
          system: "http://tm2.who.int/codes",
          code: problemItem.tm2Code,
          display: problemItem.tm2Term,
        },
        {
          system: "http://id.who.int/icd11",
          code: problemItem.icd11Code,
          display: problemItem.icd11Term,
        },
      ],
      text: problemItem.namasteTerm,
    },
    subject: {
      reference: "Patient/demo-patient-001",
      display: "Demo Patient",
    },
    recordedDate: problemItem.dateAdded,
    recorder: {
      reference: "Practitioner/demo-practitioner-001",
      display: "Dr. Demo Practitioner",
    },
  };
};
