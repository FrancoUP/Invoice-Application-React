import { useInvoiceContext } from "../../contexts/InvoiceContext";
import { amount } from "../../utils/helpers";

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

function TotalListItems({ i, invoice, darkMode }) {
  const total = new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(Number(invoice.Qty[i]) * Number(invoice.Price[i]) || 0);

  return (
    <div className="h-[50px] grid grid-cols-2 grid-rows-2 gap-7 sm:gap-0 sm:grid-cols-grid3 font-league-spartan font-bold text-[12px] xs:text-[15px] tracking-[-0.1px] mb-[30px] sm:mb-0">
      <p className={`${darkMode ? "text-[white]" : "text-[#0C0E16]"} `}>
        {invoice.Item_Name[i]}
      </p>

      <div className="flex flex-row justify-between items-center">
        {window.innerWidth > 640 && (
          <>
            <p
              className={`${
                darkMode ? "text-[white]" : "text-[#7E88C3]"
              }  ml-[8px]`}
            >
              {invoice.Qty[i]}
            </p>
            <p className={`${darkMode ? "text-[white]" : "text-[#7E88C3]"} `}>
              {invoice.Price[i]}
            </p>
          </>
        )}
        {window.innerWidth <= 640 && (
          <p
            className={`${
              darkMode ? "text-[white]" : "text-[#888EB0]"
            } col-start-1 col-end-2 row-start-2 row-end-3 mb-[20px]`}
          >
            {invoice.Qty[i] + " x " + invoice.Price[i]}
          </p>
        )}
      </div>

      <p
        className={`${
          darkMode ? "text-[white]" : "text-[#0C0E16]"
        } text-end mt-[15px] sm:mt-0 col-start-2 col-end-3 row-start-1 row-end-3 sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-2 `}
      >
        {total}
      </p>
    </div>
  );
}
