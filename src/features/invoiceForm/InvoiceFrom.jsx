import { useInvoiceContext } from "../../contexts/InvoiceContext";

export function InvoiceFrom({ invoice }) {
  const { darkMode } = useInvoiceContext();

  return (
    <div className="flex flex-col gap-[50px] im:gap-0 im:flex-row items-start im:justify-between">
      <div className="flex flex-col justify-start">
        <p className=" flex flex-row font-league-spartan font-bold text-[15px] text-[#888EB0] tracking-[-0.25px] ">
          #
          <span
            className={`${
              darkMode ? "text-[white]" : "text-[#0C0E16]"
            } text-[#0C0E16]`}
          >{` ${invoice.invoice_code}`}</span>
        </p>

        <p
          className={`${
            darkMode ? "text-[#DFE3FA]" : "text-[#888EB0]"
          } font-league-spartan font-medium text-[15px] tracking-[-0.25px]`}
        >
          {invoice.Project_Description}
        </p>
      </div>

      <div
        className={`${
          darkMode ? "text-[#DFE3FA]" : "text-[#888EB0]"
        } flex flex-col items-end font-league-spartan font-medium text-[15px] tracking-[-0.25px]`}
      >
        <p>{invoice.Street_Address_From}</p>
        <p>{invoice.City_From}</p>
        <p>{invoice.Post_Code_From}</p>
        <p>{invoice.Country_From}</p>
      </div>
    </div>
  );
}
