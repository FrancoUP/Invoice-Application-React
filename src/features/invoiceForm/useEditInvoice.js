import { toast } from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editInvoice } from "../../services/apiInvoices";

export function useEditInvoice() {
  const queryClient = useQueryClient();

  const { mutate: editTheInvoice, isLoading: isEditing } = useMutation({
    mutationFn: ({ newInvoiceData, id }) => editInvoice(newInvoiceData, id),
    onSuccess: () => {
      toast.success("Invoice successfully edited");

      queryClient.invalidateQueries({ queryKey: ["invoice"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editTheInvoice };
}
