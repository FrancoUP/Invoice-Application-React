import { useInvoiceContext } from "../contexts/InvoiceContext";
import { useInvoices } from "../features/invoiceForm/useInvoice";
import { useEditInvoice } from "../features/invoiceForm/useEditInvoice";

export function BtnsActionsInvoice({ setOpenDeleteOverlay, id }) {
  const { setFormType, setOpenForm, darkMode } = useInvoiceContext();
  const {
    invoices,
    //  error, isLoading
  } = useInvoices();
  const { editTheInvoice } = useEditInvoice();

  const invoice = invoices?.filter((el) => el.id === Number(id))[0];

  function handleClickMarkAsPaid() {
    const newInvoiceData = { ...invoice, status: "paid" };
    if (invoice.status === "pending") editTheInvoice({ newInvoiceData, id });
  }

  return (
    <div
      className={`${
        darkMode ? "bg-[#1E2139]" : "bg-[white]"
      } flex flex-row gap-2 im:gap-4 items-center font-league-spartan font-bold text-[13px] xs:text-[15px]  traking-[-0.25px]`}
    >
      <button
        onClick={() => {
          setOpenForm(true);
          setFormType("edit");
        }}
        className="border-none rounded-[24px] text-[#7E88C3] bg-[#F9FAFE] hover:bg-[#DFE3FA] w-[50px] xs:w-[73px] h-[48px] transition-colors ease-in-out duration-250"
      >
        Edit
      </button>
      <button
        onClick={() => setOpenDeleteOverlay(true)}
        className="border-none rounded-[24px] bg-[#EC5757] hover:bg-[#FF9797] w-[70px] xs:w-[89px] h-[48px] text-white transition-colors ease-in-out duration-250"
      >
        Delete
      </button>
      <button
        disabled={invoice.status !== "pending"}
        onClick={handleClickMarkAsPaid}
        className="border-none rounded-[24px] bg-[#7C5DFA] hover:bg-[#9277FF] w-[100px] xs:w-[131px] h-[48px] text-white transition-colors ease-in-out duration-250"
      >
        Mark as Paid
      </button>
    </div>
  );
}
