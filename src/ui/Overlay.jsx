import { useInvoiceContext } from "../contexts/InvoiceContext";

export function Overlay({ children }) {
  const { darkMode } = useInvoiceContext();

  return (
    <div className="fixed z-10 left-0 top-0 w-full  h-full bg-[#00000066] backdrop-blur-sm">
      <div
        className={`${
          darkMode ? "bg-[#141625]" : "bg-[white]"
        } w-full h-[calc(100vh-80px)] pt-[60px] pl-[15px] pr-[5px] mt-[80px] sm:w-[620px] sm:rounded-r-3xl sm:pl-[30px] sm:pr-[30px] lg:w-[723px] lg:h-full lg:mt-0 lg:pl-[159px] lg:pr-[20px] `}
      >
        {children}
      </div>
    </div>
  );
}
