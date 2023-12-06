import { useState, useEffect } from "react";
import arrowDown from "../assets/icon-arrow-down.svg";
import arrowUp from "../assets/arrow-up.svg";
import { useInvoiceContext } from "../contexts/InvoiceContext";

export function PayTermsInput({ text, type, name, setValue, register }) {
  const [isClicked, setIsClicked] = useState(false);
  const [textInput, setTextInput] = useState("");
  const { formStatus, darkMode } = useInvoiceContext();

  function handleIsClicked() {
    setIsClicked((isClicked) => !isClicked);
  }

  function handlleSetInputText(text) {
    setTextInput(text);
  }

  useEffect(
    function () {
      setValue(name, textInput);
    },
    [setValue, textInput, name]
  );

  return (
    <div className={` relative flex flex-col w-full gap-[10px] mb-[25px]`}>
      {isClicked && (
        <ul
          className={`${
            darkMode
              ? " bg-[#1E2139] text-[white]"
              : "text-[#0C0E16] bg-[white]"
          } absolute top-[80px] left-[-20px] xs:left-0 w-[120%] xs:w-full h-[192px] rounded-md ont-league-spartan text-[15px] font-bold shadow-lg`}
        >
          <li
            onClick={() => {
              handlleSetInputText("Net 1 Day");
              handleIsClicked();
            }}
            className={`${
              darkMode ? " border-b-[#181b2d]" : "border-b-[#DFE3FA]"
            } flex items-center pl-[20px] h-[48px] border-b-[1px] border-solid cursor-pointer hover:text-[#7C5DFA] `}
          >
            Net 1 Day
          </li>
          <li
            onClick={() => {
              handlleSetInputText("Net 7 Days");
              handleIsClicked();
            }}
            className={`${
              darkMode ? " border-b-[#181b2d]" : "border-b-[#DFE3FA]"
            } flex items-center  pl-[20px] h-[48px] border-b-[1px] border-solid cursor-pointer hover:text-[#7C5DFA]`}
          >
            Net 7 Days
          </li>
          <li
            onClick={() => {
              handlleSetInputText("Net 14 Days");
              handleIsClicked();
            }}
            className={`${
              darkMode ? " border-b-[#181b2d]" : "border-b-[#DFE3FA]"
            } flex items-center pl-[20px] h-[48px] border-b-[1px] border-solid cursor-pointer hover:text-[#7C5DFA]`}
          >
            Net 14 Days
          </li>
          <li
            onClick={() => {
              handlleSetInputText("Net 30 Days");
              handleIsClicked();
            }}
            className={`flex items-center pl-[20px] h-[48px] cursor-pointer hover:text-[#7C5DFA]`}
          >
            Net 30 Days
          </li>
        </ul>
      )}

      <label
        htmlFor="via"
        className={`${
          darkMode ? "text-[#DFE3FA]" : "text-[#7E88C3]"
        } font-league-spartan text-[13px] font-medium tracking-[-0.1px]`}
      >
        {text}
      </label>
      <div
        onClick={handleIsClicked}
        className={`${
          darkMode
            ? "outline-[#1E2139] bg-[#1E2139]"
            : "outline-[#DFE3FA] bg-[white]"
        } h-[48px] flex flex-row justify-between items-center outline outline-[1px] hover:outline-[#9277FF] rounded-[4px] cursor-pointer pl-[10px] pr-[10px]`}
      >
        <textarea
          className={`${
            darkMode ? "text-[white] bg-[#1E2139]" : "text-[#0C0E16] bg-[white]"
          } h-[48px] pt-[12px] w-full cursor-pointer font-league-spartan text-[13px] xs:text-[15px] font-bold outline-none `}
          style={{ resize: "none" }}
          name={name}
          type={type}
          value={textInput}
          {...register(name)}
          onChange={() => setTextInput("textInput")}
          required={formStatus !== "draft"}
        />

        <img
          className="w-[13px]"
          src={isClicked ? arrowUp : arrowDown}
          alt="arrowDown"
        />
      </div>
    </div>
  );
}
