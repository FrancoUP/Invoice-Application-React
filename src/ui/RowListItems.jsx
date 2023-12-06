import { Input } from "./Input";
import { useState } from "react";
import { useWatch } from "react-hook-form";

export function RowListItems({ register, i, setCountListItem, control }) {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const quantity = useWatch({ control, name: "Qty" });
  const price = useWatch({ control, name: "Price" });

  const amount = new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(Number(quantity?.[i] || 0) * Number(price?.[i] || 0));

  return (
    <div className="grid grid-cols-grid2 sm:grid-cols-grid1 gap-[10px] ">
      <Input
        span="col-start-1 col-end-5 sm:col-start-1 sm:col-end-2"
        text="Item Name"
        type="text"
        defaultValue=""
        register={register}
        name={`Item_Name.${i}`}
      />
      <Input
        type="number"
        text="Qty."
        defaultValue={0}
        register={register}
        name={`Qty.${i}`}
      />
      <Input
        type="float"
        defaultValue={0}
        text="Price"
        register={register}
        name={`Price.${i}`}
      />

      <div className="flex flex-col items-center w-full gap-[10px] mb-[25px]">
        <p className="font-league-spartan text-[13px] font-medium text-[#7E88C3] tracking-[-0.1px">
          Total:
        </p>
        <div className="h-[48px] flex items-center font-league-spartan text-[15px] font-bold text-[#7E88C3] tracking-[-0.1px">
          <p>{amount}</p>
        </div>
      </div>

      <div className="flex items-center justify-end">
        <svg
          onClick={() =>
            setCountListItem((countListItems) => countListItems - 1)
          }
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="cursor-pointer"
          width="13"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
            fill={isHovered ? "#CC0000" : "#888EB0"}
            fillRule="nonzero"
          />
        </svg>
      </div>
    </div>
  );
}
