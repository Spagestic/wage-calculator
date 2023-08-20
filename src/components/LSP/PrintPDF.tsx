// PrintPDF.tsx
import React from 'react';
import jsPDF from 'jspdf';
import { Button } from '@mantine/core';
// import and initialize ReactGA for user event tracking
import ReactGA from "react-ga4";
ReactGA.initialize("G-1LE47Z6NV9");

interface PrintPDFProps {
  wage: number | '';
  yearsOfService: number;
  startDate: Date | null;
  endDate: Date | null;
}

const PrintPDF: React.FC<PrintPDFProps> = ({ wage, yearsOfService, startDate, endDate }) => {
  const printPDF = () => {
    const doc = new jsPDF();
    const text = `
      Total Payment = ${((Number(wage) * 2) / 3 * yearsOfService).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} HKD
      Years of Service = ${yearsOfService.toFixed(2)} years

      Start Working Date = ${startDate ? startDate.toLocaleDateString() : null}
      End Working Date = ${endDate ? endDate.toLocaleDateString() : null}
      Monthly Wage = ${wage} HKD

      Formula = ${wage} * (2/3) * ${yearsOfService.toFixed(2)}
    `;
    doc.text(text, 10, 10);
    doc.save('Calculations.pdf');
     //use ReactGA to track the user event
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
        gradient={{ from: 'indigo', to: 'cyan' }}
        onClick={printPDF}
        >
          Print
        </Button>
  );
};

export default PrintPDF;
