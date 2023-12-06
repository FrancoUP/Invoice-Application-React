import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InvoicesPage from "./pages/InvoicesPage";
import PageInvoice from "./pages/PageInvoice";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index element={<InvoicesPage />} />
            <Route path="invoice/:id" element={<PageInvoice />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Toaster
        // positione nel viewport
        position="top-center"
        // space between window w alert
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "rgb(40, 40, 40)",
          },
        }}
      />
    </QueryClientProvider>
  );
}
