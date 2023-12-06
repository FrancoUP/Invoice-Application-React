import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createInvoice } from "../../services/apiInvoices";

export function useCreateInvoice() {
  const queryClient = useQueryClient();

  const { mutate: createNewInvoice, isLoading: isCreating } = useMutation({
    mutationFn: createInvoice,
    onSuccess: () => {
      toast.success("New invoice successfully created");
      // alert("New invoice successfully created");

      queryClient.invalidateQueries({ queryKey: ["invoice"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createNewInvoice };
}
