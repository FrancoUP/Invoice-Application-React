import { useContext, createContext, useState, useEffect } from "react";

const InvoiceContext = createContext();

function InvoiceProvider({ children }) {
  const [openForm, setOpenForm] = useState(false);
  const [formType, setFormType] = useState("");
  const [pageIsLoading, setPageIsLoading] = useState(true);
  const [formStatus, setFormStatus] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [pending, setPending] = useState(false);
  const [draft, setDraft] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(
    function () {
      document.querySelector("body").style.backgroundColor = darkMode
        ? "#141625"
        : "#f8f8fb";
    },
    [darkMode]
  );

  useEffect(() => {
    // Create a style element
    const styleElement = document.createElement("style");

    // Insert rules for customizing the scrollbar
    styleElement.textContent = `
    ::-webkit-scrollbar {
      width: 10px;
      background-color: ${darkMode ? "#141625" : "#f8f8fb"};
    }
    
    ::-webkit-scrollbar-thumb {
      background-color: #d8d8d8;
      border-radius: 5px;
    }
    
    ::-webkit-scrollbar-button {
      background-color: ${darkMode ? "#141625" : "#f8f8fb"};
    }
    `;

    // Append the style element to the document's head
    document.head.appendChild(styleElement);

    // Clean up the style element when the component is unmounted
    return () => {
      document.head.removeChild(styleElement);
    };
  }, [darkMode]);

  return (
    <InvoiceContext.Provider
      value={{
        openForm,
        setOpenForm,
        formType,
        setFormType,
        pageIsLoading,
        setPageIsLoading,
        formStatus,
        setFormStatus,
        isPaid,
        setIsPaid,
        draft,
        setDraft,
        pending,
        setPending,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
}

function useInvoiceContext() {
  const context = useContext(InvoiceContext);

  if (context === undefined)
    throw new Error("QuizContext was used outside of the QuizProvider");
  return context;

  return context;
}

export { InvoiceProvider, useInvoiceContext };
