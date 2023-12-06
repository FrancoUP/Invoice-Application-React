import { useNavigate } from "react-router-dom";
import { useDeleteCabin } from "../features/invoiceForm/useDeleteInvoice";
import { useInvoiceContext } from "../contexts/InvoiceContext";

export function DeleteInvoice({ setOpenDeleteOverlay, id }) {
  const navigate = useNavigate();
  const { darkMode } = useInvoiceContext();
  const { deleteTheCabin } = useDeleteCabin();

  function handleDelete() {
    deleteTheCabin(id, {
      onSuccess: () => {
        navigate(-1);
      },
    });
  }

  return (
    <div className="fixed z-50 left-0 top-0 w-full h-full bg-[#00000066] backdrop-blur-sm">
      <div
        className={`${
          darkMode ? "bg-[#1E2139]" : "bg-[white]"
        } fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full im:w-[90vw] sm:w-[480px] h-[255px] p-[40px] flex flex-col justify-between rounded-[8px]`}
      >
        <h1
          className={`${
            darkMode ? "text-[#DFE3FA]" : "text-[#0C0E16]"
          } font-league-spartan font-bold text-[24px]`}
        >
          Confirm Deletion
        </h1>

        <h2
          className={`${
            darkMode ? "text-[#DFE3FA]" : "text-[#888EB0]"
          } font-league-spartan font-medium text-[13px] `}
        >
          Are you sure you want to delete invoice #XM9141? This action cannot be
          undone.
        </h2>

        <div className="flex flex-row justify-end ">
          <p
            onClick={() => setOpenDeleteOverlay(false)}
            className="flex items-center justify-center font-league-spartan font-bold text-[15px] text-[#7E88C3] hover:text-[#CC0000] cursor-pointer mr-6"
          >
            Cancel
          </p>
          <button
            onClick={handleDelete}
            type="submit"
            className="w-[89px] h-[45px] bg-[#EC5757] hover:bg-[#FF9797] font-league-spartan font-bold text-[15px] text-[white] rounded-[23px]"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
