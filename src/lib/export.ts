import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  BorderStyle,
} from "docx";
import { saveAs } from "file-saver";
import type { Clause, BuilderClauseEntry } from "@/data/types";

interface ExportOptions {
  title: string;
  entries: BuilderClauseEntry[];
  clauses: Map<string, Clause>;
}

export async function exportToDocx({ title, entries, clauses }: ExportOptions) {
  const docTitle = title || "Contract Document";
  const date = new Date().toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const sections: Paragraph[] = [];

  // Title
  sections.push(
    new Paragraph({
      children: [
        new TextRun({
          text: docTitle,
          bold: true,
          size: 48,
          font: "Calibri",
        }),
      ],
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 },
    })
  );

  // Date
  sections.push(
    new Paragraph({
      children: [
        new TextRun({
          text: `Generated: ${date}`,
          size: 20,
          color: "666666",
          font: "Calibri",
        }),
      ],
      alignment: AlignmentType.CENTER,
      spacing: { after: 400 },
    })
  );

  // Separator
  sections.push(
    new Paragraph({
      border: {
        bottom: {
          style: BorderStyle.SINGLE,
          size: 1,
          color: "CCCCCC",
        },
      },
      spacing: { after: 400 },
    })
  );

  // Clauses
  entries.forEach((entry, index) => {
    const clause = clauses.get(entry.clauseId);
    if (!clause) return;

    // Clause heading
    sections.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `${index + 1}. ${clause.title}`,
            bold: true,
            size: 28,
            font: "Calibri",
          }),
        ],
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 300, after: 200 },
      })
    );

    // Clause text
    const text = entry.customText || clause.sampleText;
    sections.push(
      new Paragraph({
        children: [
          new TextRun({
            text,
            size: 22,
            font: "Calibri",
          }),
        ],
        spacing: { after: 300 },
      })
    );
  });

  // Disclaimer
  sections.push(
    new Paragraph({
      border: {
        top: {
          style: BorderStyle.SINGLE,
          size: 1,
          color: "CCCCCC",
        },
      },
      spacing: { before: 600, after: 200 },
    })
  );

  sections.push(
    new Paragraph({
      children: [
        new TextRun({
          text: "DISCLAIMER",
          bold: true,
          size: 20,
          color: "999999",
          font: "Calibri",
        }),
      ],
      spacing: { after: 100 },
    })
  );

  sections.push(
    new Paragraph({
      children: [
        new TextRun({
          text: "This document has been assembled using the Contract Clause Library, an educational resource. The clause samples provided are for general informational purposes only and do not constitute legal advice. They are not tailored to any specific transaction or set of circumstances. Consult a qualified legal practitioner before using, adapting, or relying upon any clause in a binding agreement.",
          size: 18,
          color: "999999",
          italics: true,
          font: "Calibri",
        }),
      ],
    })
  );

  const doc = new Document({
    sections: [
      {
        children: sections,
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  const filename = `${docTitle.replace(/[^a-zA-Z0-9\s-]/g, "").replace(/\s+/g, "_")}.docx`;
  saveAs(blob, filename);
}
