import check from "../assets/icon-check.svg";
import { useInvoiceContext } from "../contexts/InvoiceContext";

export function OverlayFilter() {
  const { isPaid, setIsPaid, draft, setDraft, pending, setPending, darkMode } =
    useInvoiceContext();

  function handleIsPaid() {
    setIsPaid((isPaid) => !isPaid);
  }

  function handlePending() {
    setPending((pending) => !pending);
  }

  function handleDraft() {
    setDraft((draft) => !draft);
  }

  return (
    <div
      id="filterOverlay"
      className={`${
        darkMode ? "bg-[#252945]" : "bg-[white]"
      } absolute top-[50px] xs:top-[70px] sm:top-[80px] left-0 xs:left-[-30px] sm:left-0 w-[192px] h-[148px] p-[24px] flex flex-col gap-[16px] shadow-lg rounded-lg `}
    >
      <div className="flex flex-row items-center gap-[13px]">
        <div
          onClick={() => handleDraft()}
          className={`
          flex items-center justify-center cursor-pointer w-[16px] h-[16px] hover:border-[1px] hover:border-solid hover:border-[#7C5DFA] rounded-[2px]  
      ${draft ? "bg-[#7C5DFA]" : "bg-[#DFE3FA]"}`}
        >
          {draft && <img id="check" src={check} alt="check" />}
        </div>

        <p
          className={`${
            darkMode ? "text-[#DFE3FA]" : "text-[#0C0E16]"
          } font-league-spartan font-bold text-[15px]  tracking-[-0.1px]`}
        >
          Draft
        </p>
      </div>

      <div className="flex flex-row items-center gap-[13px]">
        <div
          onClick={() => handlePending()}
          className={`flex items-center justify-center cursor-pointer w-[16px] h-[16px] hover:border-[1px] hover:border-solid hover:border-[#7C5DFA] rounded-[2px]  
      ${pending ? "bg-[#7C5DFA]" : "bg-[#DFE3FA]"}`}
        >
          {pending && <img id="check" src={check} alt="check" />}
        </div>

        <p
          className={`${
            darkMode ? "text-[#DFE3FA]" : "text-[#0C0E16]"
          } font-league-spartan font-bold text-[15px] tracking-[-0.1px]`}
        >
          Pending
        </p>
      </div>

      <div className="flex flex-row items-center gap-[13px]">
        <div
          onClick={() => handleIsPaid()}
          className={`flex items-center justify-center cursor-pointer w-[16px] h-[16px] hover:border-[1px] hover:border-solid hover:border-[#7C5DFA] rounded-[2px]  
      ${isPaid ? "bg-[#7C5DFA]" : "bg-[#DFE3FA]"}`}
        >
          {isPaid && <img id="check" src={check} alt="check" />}
        </div>

        <p
          className={`${
            darkMode ? "text-[#DFE3FA]" : "text-[#0C0E16]"
          } font-league-spartan font-bold text-[15px] tracking-[-0.1px]`}
        >
          Paid
        </p>
      </div>
    </div>
  );
}
