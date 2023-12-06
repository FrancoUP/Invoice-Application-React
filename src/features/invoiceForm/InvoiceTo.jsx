import { useInvoiceContext } from "../../contexts/InvoiceContext";
import { calculateDate } from "../../utils/helpers";

export function InvoiceTo({ invoice }) {
  const { darkMode } = useInvoiceContext();

  const parsedDate = new Date(invoice.invoice_Date);
  const formattedDate = `${parsedDate.getDate().toString().padStart(2, "0")}-${(
    parsedDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${parsedDate.getFullYear()}`;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3">
      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col gap-[10px]">
          <p
            className={`${
              darkMode ? "text-[#DFE3FA]" : "text-[#888EB0]"
            } font-league-spartan font-medium text-[13px] tracking-[-0.1px]`}
          >
            Invoice Date
          </p>
          <p
            className={`${
              darkMode ? "text-[white]" : "text-[#0C0E16]"
            } font-league-spartan font-bold text-[15px] text-[#0C0E16] tracking-[-0.25px]`}
          >
            {formattedDate}
          </p>
        </div>

        <div className="flex flex-col gap-[10px]">
          <p
            className={`${
              darkMode ? "text-[#DFE3FA]" : "text-[#888EB0]"
            } font-league-spartan font-medium text-[13px] tracking-[-0.1px]`}
          >
            Payment Due
          </p>
          <p
            className={`${
              darkMode ? "text-[white]" : "text-[#0C0E16]"
            } font-league-spartan font-bold text-[15px] text-[#0C0E16] tracking-[-0.25px]`}
          >
            {calculateDate(invoice.invoice_Date, invoice.invoice_pay_terms)}
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        <p
          className={`${
            darkMode ? "text-[#DFE3FA]" : "text-[#888EB0]"
          } font-league-spartan font-medium text-[13px]tracking-[-0.1px] mb-[10px]`}
        >
          Bill To
        </p>
        <p
          className={`${
            darkMode ? "text-[white]" : "text-[#0C0E16]"
          } font-league-spartan font-bold text-[15px] text-[#0C0E16] tracking-[-0.25px] mb-[5px]`}
        >
          {invoice.Client_Name}
        </p>
        <div
          className={`${
            darkMode ? "text-[#DFE3FA]" : "text-[#888EB0]"
          } flex flex-col font-league-spartan font-medium text-[13px] tracking-[-0.25px]`}
        >
          <p>{invoice.Street_Address_To}</p>
          <p>{invoice.City_To}</p>
          <p>{invoice.Post_Code_To}</p>
          <p>{invoice.Country_To}</p>
        </div>
      </div>

      <div className="flex flex-col col-start-1 col-end-3 mt-[50px] md:mt-0 md:col-start-3 md:col-end-4">
        <p
          className={`${
            darkMode ? "text-[#DFE3FA]" : "text-[#888EB0]"
          } font-league-spartan font-medium text-[13px] tracking-[-0.1px] mb-[10px]`}
        >
          Sent To
        </p>
        <p
          className={`${
            darkMode ? "text-[white]" : "text-[#0C0E16]"
          } font-league-spartan font-bold text-[15px] tracking-[-0.25px] mb-[5px]`}
        >
          {invoice.Client_Email}
        </p>
      </div>
    </div>
  );
}
