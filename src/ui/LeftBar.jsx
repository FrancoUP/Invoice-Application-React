import img from "../assets/bar-img.svg";
import logo from "../assets/logo.svg";
import imgProfile from "../assets/image-avatar.jpg";
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";
import { useInvoiceContext } from "../contexts/InvoiceContext";

export function LeftBar() {
  const { darkMode, setDarkMode, openForm } = useInvoiceContext();

  return (
    <div
      className={`fixed z-30 left-0 top-0 h-[80px] lg:h-full lg:w-[103px] lg:rounded-r-[26px] bg-[#373B53] flex flex-row lg:flex-col  justify-between ${
        openForm ? "w-full" : "w-[calc(100vw-10px)]"
      }`}
    >
      <img
        src={logo}
        className="fixed w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] top-[25px] left-[22px] lg:top-[31px] lg:left-[28px]"
      />

      <img
        src={img}
        className="w-[80px] h-[80px] lg:w-[103px] lg:h-[103px] "
        alt="img-bar"
      />

      <div className="flex flex-row lg:flex-col">
        <div
          onClick={() => setDarkMode((darkMode) => !darkMode)}
          className="w-[80px] h-full lg:w-full lg:h-[80px] border-r-2 lg:border-b-2 lg:border-r-0  border-[#494E6E] flex justify-center items-center cursor-pointer"
        >
          <img src={darkMode ? sun : moon} />
        </div>

        <div className="flex justify-center items-center">
          <img
            className="w-[40px] rounded-[50%] mr-[30px] ml-[30px] lg:mb-[30px] lg:mt-[30px] "
            src={imgProfile}
          />
        </div>
      </div>
    </div>
  );
}
