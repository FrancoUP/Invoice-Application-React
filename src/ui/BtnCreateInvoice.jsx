import cross from "../assets/cross.svg";
import { useInvoiceContext } from "../contexts/InvoiceContext";

export function BtnCreateInvoice() {
  const { setOpenForm, setFormType } = useInvoiceContext();

  return (
    <button
      onClick={() => {
        setOpenForm(true);
        setFormType("new");
      }}
      className="w-[90px] xs:h-[48px] sm:w-[150px] h-[40px]  flex flex-row items-center justify-between bg-[#7C5DFA] pl-[8px] pr-[12px] sm:pr-[17px] rounded-[25px] hover:bg-[#9277FF] transition-colors ease-in-out duration-250"
    >
      <img src={cross} className="w-[25px] xs:w-[33px]" />
      <p className="font-league-spartan font-bold text-[14px] text-white tracking-[-0.25px]">
        {window.innerWidth > 640 ? "New Invoice" : "New"}
      </p>
    </button>
  );
}
