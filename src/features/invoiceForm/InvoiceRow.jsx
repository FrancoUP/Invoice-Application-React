import freccia from "../../assets/Path 5.svg";
import { useNavigate } from "react-router-dom";
import { BtnInvoiceStatus } from "../../ui/BtnInvoiceStatus";
import { useInvoiceContext } from "../../contexts/InvoiceContext";
import { amount, calculateDate } from "../../utils/helpers";

export function InvoiceRow({ data }) {
  const navigation = useNavigate();
  const { darkMode } = useInvoiceContext();

  return (
    <div
      onClick={() => navigation(`invoice/${data.id}`)}
      className={`${
        darkMode ? "bg-[#1E2139]" : "bg-[white]"
      }  flex flex-row justify-between items-center  h-[120px] sm:h-[72px] rounded-[8px]  shadow-md p-[10px] im:pl-[3vw] im:pr-[3vw] hover:outline-[1px] hover:outline outline-blue-800 cursor-pointer mb-[16px] `}
    >
      <div className="flex flex-col gap-[10px] sm:flex-row sm:gap-[3vw] md:gap-[6vw]">
        <p className=" w-[80px] flex flex-row font-league-spartan font-bold text-[15px] text-[#888EB0] tracking-[-0.25px] ">
          #
          <span className={`${darkMode ? "text-[#DFE3FA]" : "text-[#0C0E16]"}`}>
            {data.invoice_code}
          </span>
        </p>
        <p
          className={`${
            darkMode ? "text-[#DFE3FA]" : "text-[#888EB0]"
          } w-[80px] font-league-spartan font-medium text-[13px] tracking-[-0.1px]`}
        >
          {calculateDate(data.invoice_Date, data.invoice_pay_terms) || ""}
        </p>
        <p
          className={`${
            darkMode ? "text-[#DFE3FA]" : "text-[#888EB0]"
          } font-league-spartan font-medium text-[13px] tracking-[-0.1px] `}
        >
          {data.Client_Name}
        </p>
      </div>

      <div className="flex flex-col gap-[15px] sm:flex-row sm:gap-[3vw] md:gap-[6vw]">
        <p
          className={`${
            darkMode ? "text-[#DFE3FA]" : "text-[#0C0E16]"
          } flex flex-row items-center font-league-spartan font-bold text-[15px] tracking-[-0.25px] `}
        >
          {amount(data.Qty, data.Price)}
        </p>
        <div className="flex flex-row gap-[15px]">
          <BtnInvoiceStatus status={data.status} />
          {window.innerWidth > 640 && (
            <div className="flex items-center justify-center">
              <img src={freccia} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
