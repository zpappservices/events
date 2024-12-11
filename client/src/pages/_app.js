import { TicketProvider } from "@/context/TicketContext";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <TicketProvider>
        <Component {...pageProps} />
        <ToastContainer
          theme="colored"
        />
      </TicketProvider>
    </>
  );
}
