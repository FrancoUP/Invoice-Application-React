import { useInvoiceContext } from "../contexts/InvoiceContext";

export function FooterAddInvoice() {
  const { setOpenForm, setFormStatus, darkMode } = useInvoiceContext();

  return (
    <div
      className={`${
        darkMode ? "bg-[#141625]" : "bg-white"
      } fixed  pt-[20px] pb-[20px]  bottom-0 left-0 sm:ml-[30px] lg:ml-0 lg:left-[159px] w-[90vw] im:w-[93vw] sm:w-[530px] lg:w-[510px] flex flex-col items-center justify-center gap-5 xs:gap-0 xs:flex-row xs:justify-between xs:items-center `}
    >
      <p
        onClick={() => setOpenForm(false)}
        className="xs:pl-[20px] font-league-spartan font-bold text-[15px] text-[#7E88C3] hover:text-[#CC0000] cursor-pointer transition-colors ease-in-out duration-250"
      >
        Discard
      </p>

      <div className="flex flex-col items-center gap-3 xs:gap-0 xs:flex-row ">
        <button
          onClick={() => setFormStatus("draft")}
          type="submit"
          className="border-none w-[115px] sm:w-[133px] h-[45px] bg-[#373B53] hover:bg-[#4d5372] font-league-spartan font-bold text-[15px] text-[#888EB0] hover:text-[#f0edff] rounded-[23px] xs:mr-[8px] transition-colors ease-in-out duration-250"
        >
          Save as Draft
        </button>
        <button
          onClick={() => setFormStatus("pending")}
          type="submit"
          className="border-none w-[110px] sm:w-[133px] h-[45px] bg-[#7C5DFA] hover:bg-[#9277FF] font-league-spartan font-bold text-[15px] text-[white] rounded-[23px] transition-colors ease-in-out duration-250"
        >
          Save & Send
        </button>
      </div>
    </div>
  );
}
