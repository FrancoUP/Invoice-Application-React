import { useInvoiceContext } from "../contexts/InvoiceContext";
import { useInvoices } from "../features/invoiceForm/useInvoice";

export function FooterEditInvoice({ id }) {
  const { setOpenForm, setFormStatus, darkMode } = useInvoiceContext();
  const { invoices } = useInvoices();
  const status = invoices?.filter((el) => el.id === Number(id))[0].status;

  return (
    <div
      className={`${
        darkMode ? "bg-[#141625]" : "bg-white"
      } fixed pt-[20px] pb-[70px] sm:pb-[30px]  bottom-0 left-0 sm:ml-[30px] lg:ml-0 lg:left-[159px] w-[90vw] im:w-[93vw] sm:w-[530px] lg:w-[510px] flex flex-col items-center justify-center gap-6 sm:gap-0 sm:flex-row sm:justify-end sm:items-center `}
    >
      <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row ">
        <p
          onClick={() => setOpenForm(false)}
          className="flex items-center justify-center font-league-spartan font-bold text-[15px] text-[#7E88C3] hover:text-[#CC0000] cursor-pointer sm:mr-6 transition-colors ease-in-out duration-250"
        >
          <span>Cancel</span>
        </p>
        <button
          onClick={() => setFormStatus(status !== "paid" ? "pending" : "paid")}
          type="submit"
          className="border-none w-[133px] h-[45px] bg-[#7C5DFA] hover:bg-[#9277FF] font-league-spartan font-bold text-[15px] text-[white] rounded-[23px] transition-colors ease-in-out duration-250"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
