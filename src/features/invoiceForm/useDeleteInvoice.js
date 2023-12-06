import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteInvoice } from "../../services/apiInvoices";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteTheCabin } = useMutation({
    mutationFn: deleteInvoice,
    onSuccess: () => {
      toast.success("Invoice successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["invoice"],
      });
    },

    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteTheCabin };
}
