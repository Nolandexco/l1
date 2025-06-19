// app/payment/page.tsx

"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faChevronDown,
  faCheckCircle,
  faCopy,
  faInfoCircle,
  faExclamationCircle,
  faUniversity,
  faWallet,
  faStore,
  faCreditCard,
  faLock,
  faArrowRight,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";

interface PaymentData {
  platform: string;
  layanan: string;
  jumlah: string;
  linkTarget: string;
  total: number;
}

// Komponen ini berisi semua logika dan tampilan
const PaymentContent = () => {
  const searchParams = useSearchParams();
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);

  // State lainnya
  const [activeMethod, setActiveMethod] = useState<string | null>(null);
  const [selectedBank, setSelectedBank] = useState<string | null>(null);
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);
  const [selectedRetail, setSelectedRetail] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [paymentCode, setPaymentCode] = useState("");
  const [vaNumber, setVaNumber] = useState("");

  const imagePaths = {
    qris: "/images/payments/1.png",
    banks: {
      bca: "/images/payments/banks/2.png",
      mandiri: "/images/payments/banks/3.png",
      bni: "/images/payments/banks/4.png",
    },
    ewallets: {
      dana: "/images/payments/ewallets/5.png",
      gopay: "/images/payments/ewallets/6.png",
      ovo: "/images/payments/ewallets/7.png",
    },
    retails: {
      alfamart: "/images/payments/retails/8.png",
      indomaret: "/images/payments/retails/9.png",
    },
    qrCode: "/images/payments/10.png",
  };

  useEffect(() => {
    const total = searchParams.get("total");
    const layanan = searchParams.get("layanan");

    if (total && layanan) {
      setPaymentData({
        total: parseInt(total, 10),
        layanan: decodeURIComponent(layanan),
        platform: "Platform Anda", // Ganti sesuai kebutuhan
        jumlah: "1", // Ganti sesuai kebutuhan
        linkTarget: "N/A", // Ganti sesuai kebutuhan
      });
    }
  }, [searchParams]);

  // --- Salin SEMUA FUNGSI HELPER (formatRupiah, generatePaymentCode, dll.) ke sini ---
  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const generatePaymentCode = (method: string) => {
    // ... implementasi lengkap fungsi ini ...
  };

  const copyToClipboard = (text: string) => {
    // ... implementasi lengkap fungsi ini ...
  };

  const simulatePaymentApi = async () => {
    // ... implementasi lengkap fungsi ini ...
  };
  
  const processPayment = async () => {
    // ... implementasi lengkap fungsi ini ...
  };
  // ---------------------------------------------------------------------------------

  if (!paymentData) {
    return <div className="text-center p-10">Memuat data pembayaran...</div>;
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
       <style jsx>{`
        /* Salin semua CSS dari <style jsx> di kode asli Anda */
        .payment-modal { color: #1f2937 !important; background-color: #ffffff !important; }
        .payment-modal * { color: inherit !important; background-color: inherit !important; }
        /* ...dan seterusnya... */
      `}</style>

      {/* Pop-up untuk Processing, Success, Failed, Copied */}
      {isProcessing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
          {/* ... konten pop-up ... */}
        </div>
      )}
      {isSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
          {/* ... konten pop-up ... */}
        </div>
      )}
      {isFailed && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
           {/* ... konten pop-up ... */}
        </div>
      )}
       
      {/* Konten Utama Checkout */}
      <div className="payment-modal w-full max-w-sm rounded-xl bg-white shadow-xl">
        {/* ... Salin seluruh sisa JSX dari modal Anda (mulai dari header checkout) ... */}
        <div className="bg-blue-600 p-5 rounded-t-xl">
            <h2 className="text-xl font-bold text-white text-center">CHECKOUT</h2>
        </div>
        <div className="p-5">
            <div className="flex justify-between items-center mb-5 p-3 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-base">Total Pembayaran</h3>
                <p className="text-blue-600 font-bold text-xl">{formatRupiah(paymentData.total)}</p>
            </div>
            {/* Lanjutkan dengan sisa JSX ... */}
        </div>
      </div>

       {isCopied && (
          <div className="fixed bottom-5 right-5 bg-green-500 text-white px-3 py-2 rounded-lg z-[100]">
            Nomor disalin!
          </div>
        )}
    </main>
  );
};

// Ini adalah default export yang VALID untuk sebuah halaman
const PaymentPage = () => {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading Page...</div>}>
      <PaymentContent />
    </Suspense>
  );
};

export default PaymentPage;

