import arrow from "../../assets/icon-arrow-down.svg";
import { useState, useEffect } from "react";
import { OverlayFilter } from "../../ui/OverlayFilter";
import { useInvoiceContext } from "../../contexts/InvoiceContext";

export function InvoicesHeader({ children, invoices }) {
  const [overlayToggle, setOverlayToggle] = useState(false);
  const { darkMode } = useInvoiceContext();

  useEffect(function () {
    const handleClick = (event) => {
      const clickedElement = event.target;

      const condition1 =
        clickedElement.id === "filterOverlay" ||
        clickedElement.closest("#filterOverlay");
      const condition2 = clickedElement.id !== "filter";
      const condition3 = clickedElement.id !== "arrow";
      const condition4 = clickedElement.id !== "check";

      if (!condition1 && condition2 && condition3 && condition4) {
        setOverlayToggle(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  function handleOverlayToggle() {
    setOverlayToggle((overlayToggle) => !overlayToggle);
  }

  const invName = invoices?.length > 1 ? "invoices" : "invoice";

  return (
    <div className="flex flex-col items-start gap-[20px] xs:flex-row xs:justify-between h-[72px] mb-[130px] xs:mb-[75px] ">
      <div className="flex flex-col justify-end ">
        <div
          className={`${
            darkMode ? "text-[#DFE3FA]" : "text-[#0C0E16]"
          } font-league-spartan font-bold text-[24px] sm:text-[36px] tracking-[-1.25px] `}
        >
          Invoices
        </div>
        <div className="font-league-spartan font-medium text-[15px] text-[#888EB0] tracking-[-0.1px] ">
          {window.innerWidth > 640
            ? `There are ${invoices?.length} total ${invName}`
            : `${invoices?.length} ${invName}`}
        </div>
      </div>

      <div className="h-full flex flex-row items-end pb-[10px] sm:pb-0 ">
        <div className="relative h-full mr-[20px] flex flex-row gap-[15px] items-end  ">
          {overlayToggle && <OverlayFilter />}

          <p
            id="filter"
            onClick={handleOverlayToggle}
            className={`${
              darkMode ? "text-[#DFE3FA]" : "text-[#0C0E16]"
            } cursor-pointer mb-[10px] font-league-spartan font-bold text-[15px] tracking-[-0.1px] `}
          >
            {window.innerWidth > 640 ? "Filter by status" : "Filter"}
          </p>

          <img
            id="arrow"
            onClick={handleOverlayToggle}
            src={arrow}
            className="mb-[15px] cursor-pointer "
          />
        </div>
        {children}
      </div>
    </div>
  );
}
