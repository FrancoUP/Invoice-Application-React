import { useInvoiceContext } from "../contexts/InvoiceContext";

export function Input({ text, span, type, name, register, defaultValue }) {
  const { formStatus, darkMode } = useInvoiceContext();

  return (
    <div className={`${span} flex flex-col w-full gap-[10px] mb-[25px]`}>
      <label
        htmlFor={text}
        className={`${
          darkMode ? "text-[#DFE3FA]" : "text-[#7E88C3]"
        } font-league-spartan text-[13px] font-medium tracking-[-0.1px]`}
      >
        {text}
      </label>
      <input
        className={`${
          darkMode
            ? "text-[white] bg-[#1E2139] border-[#1E2139]"
            : "text-[#0C0E16] bg-[white] border-[#DFE3FA]"
        } w-full h-[48px] border-solid border-[1px]  hover:border-[#9277FF] rounded-[4px] cursor-pointer outline-none pl-[10px] font-league-spartan text-[15px] font-bold`}
        type={type}
        defaultValue={defaultValue}
        {...register(name)}
        required={formStatus !== "draft"}
      ></input>
    </div>
  );
}
