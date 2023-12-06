import { BtnsActionsInvoice } from "../../ui/BtnsActionsInvoice";
import { useStyleStatus } from "../../hooks/useStyleStatus";
import { useInvoices } from "../invoiceForm/useInvoice";
import { useInvoiceContext } from "../../contexts/InvoiceContext";

export function InvoiceHeader({ setOpenDeleteOverlay, id }) {
  const { invoices } = useInvoices();
  const { darkMode } = useInvoiceContext();
  const [showTxt, txtColor, bgColor] = useStyleStatus(
    invoices?.filter((el) => el.id === Number(id))[0].status
  );

  return (
    <div
      className={`${
        darkMode ? "bg-[#1E2139]" : "bg-[white]"
      } flex flex-row items-center justify-between w-full  rounded-[8px] shadow-sm p-[25px] `}
    >
      <div className="w-full flex flex-row items-center justify-between sm:justify-start sm:gap-[20px] ">
        <p className="font-league-spartan font-medium text-[13px] text-[#858BB2] traking-[-0.1px]">
          Status
        </p>

        <div
          className={`flex flex-row items-center justify-center w-[104px] h-[40px] rounded-md ${bgColor} font-league-spartan font-bold ${txtColor} traking-[-0.25px]`}
        >
          <p className="mb-[12px] text-[40px] mr-[5px]">&bull;</p>
          <p className="text-[15px]">{showTxt}</p>
        </div>
      </div>

      {window.innerWidth > 640 && (
        <BtnsActionsInvoice
          id={id}
          setOpenDeleteOverlay={setOpenDeleteOverlay}
        />
      )}
    </div>
  );
}
