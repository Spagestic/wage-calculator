// PrintPDF.tsx
import React from "react";
import jsPDF from "jspdf";
import { Button } from "@mantine/core";
import ReactGA from "react-ga4";
ReactGA.initialize("G-1LE47Z6NV9");

interface PrintPDFProps {
  wage: number | "";
  yearsOfService: number;
  startDate: Date | null;
  endDate: Date | null;
}

const PrintPDF: React.FC<PrintPDFProps> = ({
  wage,
  yearsOfService,
  startDate,
  endDate,
}) => {
  const printPDF = () => {
    const doc = new jsPDF();

    // Page setup
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 10; // Margin from edges
    const columnWidthDescription = 150; // Width for the description column

    // Calculate positions
    const startXDescription = margin;
    const endXDescription = startXDescription + columnWidthDescription; // Correctly calculate the end position for the description column
    const startXValue = pageWidth - margin; // Start position for the value column, effectively aligning it to the right edge

    // Title
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    const title = "Long Service Payment Calculation Summary";
    const titleXPosition = (pageWidth - doc.getTextWidth(title)) / 2; // Center align title
    doc.text(title, titleXPosition, 15); // Adjust y position for better spacing

    // Line under title
    doc.setLineWidth(0.5);
    doc.line(margin, 17, pageWidth - margin, 17);

    // Set font for body
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");

    // Body text in table format
    let currentY = 25; // Starting Y position for the first row
    const lineHeight = 7; // Space between lines

    const rows = [
      [
        "Total Payment:",
        (((Number(wage) * 2) / 3) * yearsOfService)
          .toFixed(2)
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " HKD",
      ],
      ["Years of Service:", `${yearsOfService.toFixed(2)} years`],
      [
        "Start Working Date:",
        startDate ? startDate.toLocaleDateString() : "N/A",
      ],
      ["End Working Date:", endDate ? endDate.toLocaleDateString() : "N/A"],
      ["Monthly Wage:", `${wage} HKD`],
      [
        "Calculation Formula:",
        `${wage} * (2/3) * ${yearsOfService.toFixed(2)}`,
      ],
    ];

    rows.forEach(([description, value]) => {
      doc.text(description, startXDescription, currentY, {
        maxWidth: columnWidthDescription,
      }); // Apply maxWidth for description
      doc.text(value, startXValue, currentY, { align: "right" }); // Right-align values
      currentY += lineHeight; // Move down for next row
    });

    // Function to add a section with wrapped text
    const addSection = (
      title: string,
      content: string[],
      isBold: boolean = true
    ) => {
      currentY += lineHeight;
      doc.setFont("helvetica", isBold ? "bold" : "normal");
      doc.text(title, startXDescription, currentY);
      currentY += lineHeight;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10); // Set the font size for the content

      content.forEach((paragraph) => {
        const textLines = doc.splitTextToSize(
          paragraph,
          pageWidth - 2 * margin
        );
        textLines.forEach((line: any) => {
          doc.text(line, startXDescription, currentY);
          currentY += lineHeight;
        });
      });

      doc.setFontSize(12); // Reset the font size back to default or another desired size for subsequent text
    };

    // Eligibility for Long Service Payment
    addSection("Eligibility for Long Service Payment:", [
      "1. Employed continuously for not less than 5 years.",
      "2. Employment terminated for reasons other than serious misconduct or redundancy.",
      "3. Certified by a registered medical practitioner as permanently unfit for the present job and resigns on such grounds.",
      "4. Aged 65 or above and resigns on grounds of old age.",
      "5. Dies during service.",
    ]);

    // Calculation of Long Service Payment
    addSection("Calculation of Long Service Payment:", [
      "The payment is calculated using the formula: (Last month's wages x 2/3) x Reckonable years of service.",
      "• Service for an incomplete year is calculated on a pro-rata basis.",
      "• Maximum amount of wages used for calculation is capped at 2/3 of HK$22,500.",
      "• Employees may choose to use their average wages in the last 12 months for the calculation.",
    ]);

    // Payment Timeline and Legal Obligations
    addSection("Payment Timeline and Legal Obligations:", [
      "• Employers must pay the long service payment within 7 days after the date of termination of the employment contract.",
      "• Failure to do so without reasonable excuse can lead to a fine of HK$350,000 and imprisonment for 3 years.",
    ]);

    // Important Considerations
    addSection("Important Considerations:", [
      "• Domestic workers cannot be simultaneously entitled to both long service payment and severance payment.",
      "• If dismissed due to redundancy and worked for at least 24 months, entitled to severance payment instead.",
      "• Current minimum allowable wage for foreign domestic helpers in Hong Kong is HK$4,870 per month.",
      "• Employers should avoid frequent contract terminations to prevent being blacklisted by the Consulate.",
      "Proper termination procedures must be followed, including one month's notice, informing the Immigration Department, and settling all dues.",
    ]);

    // Save PDF
    doc.save("Calculations.pdf");
    ReactGA.event({
      category: "long_service_payment",
      action: "click_save_pdf",
    });
  };

  return (
    <Button
      fullWidth
      m="auto"
      size="md"
      radius="md"
      variant="gradient"
      gradient={{ from: "indigo", to: "cyan" }}
      onClick={printPDF}
    >
      Print
    </Button>
  );
};

export default PrintPDF;
