import { Empty } from "../ui/Empty";
import { InvoiceRow } from "../features/invoiceForm/InvoiceRow";
import { InvoicesHeader } from "../features/invoiceForm/InvoicesHeader";
import { InvoiceForm } from "../features/invoiceForm/InvoiceForm";
import { BtnCreateInvoice } from "../ui/BtnCreateInvoice";
import { useInvoiceContext } from "../contexts/InvoiceContext";
// import useLoadingPage from "../hooks/useLoadingPage";
import { useInvoices } from "../features/invoiceForm/useInvoice";
import { useState, useEffect } from "react";
import Spinner from "../ui/Spinner";

export default function InvoicesPage() {
  const [filteredInvoices, setFilteredInvoices] = useState([]);
  const { openForm, formType, isPaid, draft, pending } = useInvoiceContext();
  const { invoices, isSuccess } = useInvoices();
  // useLoadingPage(setPageIsLoading);

  useEffect(
    function () {
      const arrPaid = isPaid
        ? invoices.filter((el) => el.status === "paid")
        : [];
      const arrDraft = draft
        ? invoices.filter((el) => el.status === "draft")
        : [];
      const arrPending = pending
        ? invoices.filter((el) => el.status === "pending")
        : [];

      setFilteredInvoices(
        !isPaid && !draft && !pending
          ? invoices
          : [...arrPaid, ...arrDraft, ...arrPending].filter(
              (el) => el?.length !== 0
            )
      );
    },
    [draft, invoices, isPaid, pending]
  );

  if (!isSuccess) return <Spinner />;

  return (
    <div
      className={`h-[100vh] ${openForm ? "overflow-hidden" : "overflow-auto"}`}
    >
      <div
        id="invoicesPage"
        className={` max-w-[1440px] mt-[150px] p-[15px] im:p-[25px] lg:ml-[150px] lg:mr-[30px] lg:p-1 lg:mt-[50px] xl:ml-[200px] xl:mr-[100px] `}
      >
        <InvoicesHeader invoices={invoices}>
          <BtnCreateInvoice />
        </InvoicesHeader>
        {invoices?.length === 0 && <Empty />}
        {isSuccess &&
          filteredInvoices?.map((data) => (
            <InvoiceRow key={data.id} data={data} />
          ))}
      </div>

      {openForm && formType === "new" && <InvoiceForm />}
    </div>
  );
}
