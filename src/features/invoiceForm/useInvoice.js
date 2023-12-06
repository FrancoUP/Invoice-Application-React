import { getInvoices } from "../../services/apiInvoices";
import { useQuery } from "@tanstack/react-query";

export function useInvoices() {
  const {
    isLoading,
    isSuccess,
    data: invoices,
    error,
  } = useQuery({
    queryKey: ["invoice"],
    queryFn: getInvoices,
  });

  return { isLoading, isSuccess, error, invoices };
}
