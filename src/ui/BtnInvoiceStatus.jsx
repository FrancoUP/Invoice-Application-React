import { useStyleStatus } from "../hooks/useStyleStatus";
// import { useInvoiceContext } from "../contexts/InvoiceContext";

export function BtnInvoiceStatus({ status }) {
  const [showTxt, txtColor, bgColor] = useStyleStatus(status);
  // const { darkMode } = useInvoiceContext();

  return (
    <div
      className={`flex flex-row justify-center items-center gap-[5px] w-[104px] h-[40px] rounded-[6px] ${bgColor} ${txtColor}`}
    >
      <p className="text-[40px] mb-[5px]">&bull;</p>
      <p
        className={`font-league-spartan font-bold text-[15px] ${txtColor} tracking-[-0.25px]`}
      >
        {showTxt}
      </p>
    </div>
  );
}
