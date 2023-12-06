import empty from "../assets/nothing.svg";
import { useInvoiceContext } from "../contexts/InvoiceContext";

export function Empty() {
  const { darkMode } = useInvoiceContext();

  return (
    <div className="w-full mt-[100px] flex justify-center">
      <div className="w-[242px] flex flex-col ">
        <img className="mb-[65px]" src={empty} />
        <h1
          className={`${
            darkMode ? "text-[white]" : "text-[#0C0E16]"
          } text-center font-league-spartan font-bold text-[24px] traking-[-0.75px] mb-[25px] `}
        >
          There is nothing here
        </h1>
        <h2
          className={`${
            darkMode ? "text-[#DFE3FA]" : "text-[#888EB0]]"
          } text-center font-league-spartan font-bold text-[13px] text-[#888EB0] traking-[-0.1px] `}
        >
          Create an invoice by clicking the New Invoice button and get started
        </h2>
      </div>
    </div>
  );
}
