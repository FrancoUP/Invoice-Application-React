import { useInvoiceContext } from "../../contexts/InvoiceContext";
import { amount } from "../../utils/helpers";
import { TotalListItems } from "./TotalListItems";

export function InvoiceTotal({ invoice }) {
  const { darkMode } = useInvoiceContext();

  return (
    <div
      className={`${
        darkMode ? "bg-[#252945]" : "bg-[#F9FAFE]"
      } flex flex-col w-full rounded-[10px]`}
    >
      <div className="pl-[10px] pr-[10px] pt-[32px] pb-[32px] im:p-[32px]  flex flex-col">
        {window.innerWidth > 640 && (
          <div
            className={`${
              darkMode ? "text-[#DFE3FA]" : "text-[#888EB0]"
            } grid grid-cols-grid3 mb-[32px] font-league-spartan font-medium text-[13px] tracking-[-0.1px]`}
          >
            <p>Item Name</p>

            <div className="flex flex-row justify-between items-center">
              <p>QTY.</p>
              <p>Price</p>
            </div>

            <p className="text-end">Total</p>
          </div>
        )}

        {invoice?.Qty?.map((_, i) => (
          <TotalListItems key={i} i={i} invoice={invoice} darkMode={darkMode} />
        ))}
      </div>

      <div
        className={`${
          darkMode ? "bg-[#0C0E16]" : "bg-[#373B53]"
        } pl-[10px] pr-[10px] pt-[32px] pb-[32px]  im:p-[32px] flex flex-row justify-between items-center rounded-b-[8px] font-league-spartan text-white`}
      >
        <p className="font-medium text-[13px] tracking-[-0.1px]">Amount Due</p>
        <p className="font-bold text-[20px] xs:text-[24px] tracking-[-0.5px]">
          {amount(invoice.Qty, invoice.Price)}
        </p>
      </div>
    </div>
  );
}
