import arrowl from "../assets/icon-arrow-left.svg";
import { useNavigate } from "react-router-dom";
import { useInvoiceContext } from "../contexts/InvoiceContext";

export function BtnBack() {
  const navigate = useNavigate();
  const { darkMode } = useInvoiceContext();

  return (
    <div className="flex flex-row items-center cursor-pointer">
      <img className="h-[10px] mr-[10px] " src={arrowl} />

      <p
        onClick={() => navigate(-1)}
        className={`${
          darkMode ? "text-[white]" : "text-[#0C0E16]"
        } font-league-spartan font-bold text-[15px] hover:text-[#7E88C3] traking-[-0.25px] transition-colors ease-in-out duration-250`}
      >
        Go back
      </p>
    </div>
  );
}
