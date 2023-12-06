import { InvoiceTotal } from "../features/invoiceForm/InvoiceTotal";
import { BtnBack } from "../ui/BtnBack";
import { InvoiceHeader } from "../features/invoiceForm/InvoiceHeader";
import { InvoiceFrom } from "../features/invoiceForm/InvoiceFrom";
import { BtnsActionsInvoice } from "../ui/BtnsActionsInvoice";
import { InvoiceTo } from "../features/invoiceForm/InvoiceTo";
import { useState } from "react";
import { DeleteInvoice } from "../ui/ConfirmDelete";
import { useInvoiceContext } from "../contexts/InvoiceContext";
import { InvoiceForm } from "../features/invoiceForm/InvoiceForm";
import { useParams } from "react-router-dom";
import { useInvoices } from "../features/invoiceForm/useInvoice";
import Spinner from "../ui/Spinner";

export default function PageInvoice() {
  const [openDeleteOverlay, setOpenDeleteOverlay] = useState(false);
  const { openForm, formType, darkMode } = useInvoiceContext();
  const { id } = useParams();
  const { invoices, isSuccess } = useInvoices();

  const cssContainer = `flex flex-col gap-[30px] w-[96vw] pr-[10px] pl-[10px] md:w-[730px] h-auto sm:h-[90vh]  m-auto mt-[150px] lg:mt-[50px] `;
  const cssMaiInvoice = `${
    darkMode ? "bg-[#1E2139]" : "bg-[white]"
  } flex flex-col gap-[40px] w-full p-[24px] rounded-[8px]`;
  const cssBtnsFooter = `${
    darkMode ? "bg-[#1E2139]" : "bg-[white]"
  } w-full h-[90px] flex items-center justify-center rounded-[8px] mb-[50px]`;

  const invoice = invoices?.filter((el) => el.id === Number(id))[0];

  if (!isSuccess) return <Spinner />;

  return (
    <div
      className={`h-[100vh] ${openForm ? "overflow-hidden" : "overflow-auto"}`}
    >
      {openDeleteOverlay && (
        <DeleteInvoice id={id} setOpenDeleteOverlay={setOpenDeleteOverlay} />
      )}

      {openForm && formType === "edit" && (
        <InvoiceForm invoice={invoice} id={id} />
      )}

      <div className={cssContainer}>
        <BtnBack />
        <InvoiceHeader id={id} setOpenDeleteOverlay={setOpenDeleteOverlay} />

        <div className={cssMaiInvoice}>
          <InvoiceFrom invoice={invoice} />
          <InvoiceTo invoice={invoice} />
          <InvoiceTotal invoice={invoice} />
        </div>

        {window.innerWidth <= 640 && (
          <div className={cssBtnsFooter}>
            <BtnsActionsInvoice
              id={id}
              setOpenDeleteOverlay={setOpenDeleteOverlay}
            />
          </div>
        )}
      </div>
    </div>
  );
}
