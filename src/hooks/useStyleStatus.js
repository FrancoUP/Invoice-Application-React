import { useInvoiceContext } from "../contexts/InvoiceContext";

export function useStyleStatus(status) {
  const { darkMode } = useInvoiceContext();

  let showTxt;
  let txtColor;
  let bgColor;

  if (status === "paid") {
    showTxt = "Paid";
    txtColor = "text-[#33D69F]";
    bgColor = "bg-[#33d69f33]";
  } else if (status === "draft") {
    showTxt = "Draft";
    txtColor = "text-[#373B53]";
    bgColor = `${darkMode ? "bg-[lightgrey]" : "bg-[#373b531a]"}`;
  } else if (status === "pending") {
    showTxt = "Pending";
    txtColor = "text-[#FF8F00]";
    bgColor = "bg-[#ff8f001a]";
  } else {
    showTxt = "";
    txtColor = "";
    bgColor = "";
  }

  return [showTxt, txtColor, bgColor];
}
