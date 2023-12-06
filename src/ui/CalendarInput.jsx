import { useInvoiceContext } from "../contexts/InvoiceContext";

export function CalendarInput({ text, type, name, register, defaultValue }) {
  const { formStatus, darkMode } = useInvoiceContext();

  return (
    <div className="flex flex-col w-full gap-[10px] mb-[25px]">
      <label
        htmlFor="calendar"
        className={`${
          darkMode ? "text-[#DFE3FA]" : "text-[#7E88C3]"
        } font-league-spartan text-[13px] font-medium  tracking-[-0.1px]`}
      >
        {text}
      </label>
      <input
        className={`${
          darkMode
            ? "text-[white] bg-[#1E2139] border-[#1E2139]"
            : "text-[#0C0E16] bg-[white] border-[#DFE3FA]"
        } w-full h-[48px] border-solid border-[1px] hover:border-[#9277FF] rounded-[4px] cursor-pointer outline-none pl-[10px] pr-[10px] font-league-spartan text-[12px] xs:text-[15px] font-bold text-[#0C0E16] `}
        name={name}
        type={type}
        defaultValue={defaultValue}
        {...register(name)}
        required={formStatus !== "draft"}
      ></input>
    </div>
  );
}
