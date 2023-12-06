import { Input } from "../../ui/Input";
import { Overlay } from "../../ui/Overlay";
import { FooterEditInvoice } from "../../ui/FooterEditInvoice";
import { FooterAddInvoice } from "../../ui/FooterAddInvoice";
import { PayTermsInput } from "../../ui/PayTermsInput";
import { CalendarInput } from "../../ui/CalendarInput";
import { useInvoiceContext } from "../../contexts/InvoiceContext";
import { useForm } from "react-hook-form";
import { useCreateInvoice } from "./useCreateInvoice";
import { useEditInvoice } from "./useEditInvoice";
import { RowListItems } from "../../ui/RowListItems";
import { useRef, useState } from "react";
import { invoiceCode } from "../../utils/helpers";
// import dataJson from "../../data/data.json";

export function InvoiceForm({ invoice = {}, id }) {
  const [countListItems, setCountListItem] = useState(0);
  const { setOpenForm, formType, formStatus, darkMode } = useInvoiceContext();
  const { isCreating, createNewInvoice } = useCreateInvoice();
  const { isEditing, editTheInvoice } = useEditInvoice();
  const todayDate = useRef(
    (function () {
      let today = new Date();
      const dd = String(today.getDate()).padStart(2, "0");
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const yyyy = today.getFullYear();

      today = yyyy + "-" + mm + "-" + dd;

      return today;
    })()
  );

  const isEditSession = Boolean(id);

  const numListItems =
    formType === "new"
      ? countListItems
      : (invoice.Qty?.length || 0) + countListItems;

  const { register, handleSubmit, reset, setValue, control } = useForm({
    defaultValues: isEditSession ? invoice : {},
  });

  const isWorking = isCreating || isEditing;

  // Per trasformare i dati json in oggetto
  // var jsonObject = JSON.parse(dataJson);

  const onSubmit = (newInvoice) => {
    const newPrice = newInvoice.Price?.slice(
      0,
      formType === "new"
        ? countListItems
        : (invoice.Qty?.length || 0) + countListItems
    );
    const newQty = newInvoice.Qty?.slice(
      0,
      formType === "new"
        ? countListItems
        : (invoice.Qty?.length || 0) + countListItems
    );
    const newItemName = newInvoice.Item_Name?.slice(
      0,
      formType === "new"
        ? countListItems
        : (invoice.Qty?.length || 0) + countListItems
    );
    const newData = {
      ...newInvoice,
      Price: newPrice,
      Qty: newQty,
      Item_Name: newItemName,
    };

    if (isEditSession) {
      editTheInvoice(
        { newInvoiceData: { ...newData, status: formStatus }, id },
        {
          onSuccess: () => {
            reset();
            setOpenForm(false);
          },
        }
      );
    } else {
      createNewInvoice(
        { ...newData, status: formStatus, invoice_code: invoiceCode() },
        {
          onSuccess: () => {
            reset();
            setOpenForm(false);
          },
        }
      );
    }
  };

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Overlay>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className={`flex flex-col overflow-y-auto max-h-full pr-[25px] pb-[200px] xs:pb-[100px] `}
      >
        <h1
          className={`${
            darkMode ? "text-[white]" : "text-[#0C0E16]"
          } font-league-spartan text-[24px] font-bold tracking-[-0.5px] mb-[45px]`}
        >
          Edit <span className="text-[#888EB0]">#</span>
          {`${invoice.invoice_code}`}
        </h1>

        <div className="flex flex-col mb-[40px]">
          <h1 className="font-league-spartan text-[15px] font-bold text-[#7C5DFA] tracking-[-0.25px] mb-[24px]">
            Bill Form
          </h1>

          <div className=" gap-[10px] sm:gap-[24px]">
            <Input
              text="Street Address"
              name="Street_Address_From"
              type="text"
              defaultValue=""
              register={register}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-[10px] sm:gap-[24px]">
            <Input
              text="City"
              type="text"
              name="City_From"
              defaultValue=""
              register={register}
            />
            <Input
              name="Post_Code_From"
              text="Post Code"
              type="text"
              defaultValue=""
              register={register}
            />
            <Input
              span="col-start-1 col-end-3 sm:col-start-3 sm:col-end-4"
              text="Country"
              type="text"
              name="Country_From"
              defaultValue=""
              register={register}
            />
          </div>
        </div>

        <div className="flex flex-col mb-[40px]">
          <h1 className="font-league-spartan text-[15px] font-bold text-[#7C5DFA] tracking-[-0.25px] mb-[24px]">
            Bill To
          </h1>

          <div className=" gap-[10px] sm:gap-[24px]">
            <Input
              type="text"
              defaultValue=""
              text="Client’s Name"
              register={register}
              name="Client_Name"
            />
          </div>

          <div className=" gap-[10px] sm:gap-[24px]">
            <Input
              type="email"
              defaultValue=""
              text="Client’s Email"
              register={register}
              name="Client_Email"
            />
          </div>

          <div className=" gap-[10px] sm:gap-[24px]">
            <Input
              type="text"
              defaultValue=""
              text="Street Address"
              register={register}
              name="Street_Address_To"
            />
          </div>

          <div className="mb-[30px] grid grid-cols-2 sm:grid-cols-3 gap-[10px] sm:gap-[24px]">
            <Input type="text" text="City" register={register} name="City_To" />
            <Input
              type="text"
              defaultValue=""
              text="Post Code"
              register={register}
              name="Post_Code_To"
            />
            <Input
              type="text"
              defaultValue=""
              span="col-start-1 col-end-3 sm:col-start-3 sm:col-end-4"
              text="Country"
              register={register}
              name="Country_To"
            />
          </div>

          <div className="grid grid-cols-2 gap-[10px] sm:gap-[24px]">
            <CalendarInput
              type="date"
              defaultValue={todayDate.current}
              register={register}
              name="invoice_Date"
              text="Invoice Date"
            />
            <PayTermsInput
              text="Payment Terms"
              type="text"
              setValue={setValue}
              register={register}
              name="invoice_pay_terms"
            />
          </div>

          <div className=" gap-[10px] sm:gap-[24px]">
            <Input
              type="text"
              defaultValue=""
              text="Project Description"
              register={register}
              name="Project_Description"
            />
          </div>
        </div>

        <div className="flex flex-col mb-[40px]">
          <h1 className="font-league-spartan text-[15px] font-bold text-[#7C5DFA] tracking-[-0.25px] mb-[24px]">
            Item List
          </h1>

          {Array.from({ length: numListItems }, (_, i) => (
            <RowListItems
              key={Math.pow(Math.random() * 10, Math.random() * 10)}
              i={i}
              control={control}
              setCountListItem={setCountListItem}
              register={register}
            />
          ))}

          <button
            onClick={(e) => {
              e.preventDefault();
              setCountListItem((countListItems) => countListItems + 1);
            }}
            className="text-[#7E88C3] text-[15px] font-bold font-league-spartan w-full h-[48px] bg-[#babb9b3a] hover:bg-[#DFE3FA] rounded-[24px] transition-colors ease-in-out duration-250"
          >
            + Add New Item
          </button>

          {formType === "new" && <FooterAddInvoice isWorking={isWorking} />}
          {formType === "edit" && (
            <FooterEditInvoice id={id} isWorking={isWorking} />
          )}
        </div>
      </form>
    </Overlay>
  );
}
