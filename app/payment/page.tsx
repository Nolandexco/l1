"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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

const PaymentModal = ({
  isOpen,
  onClose,
  paymentData,
}: {
  isOpen: boolean;
  onClose: () => void;
  paymentData: PaymentData;
}) => {
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
    if (!isOpen) {
      resetStates();
    }
  }, [isOpen]);

  const resetStates = () => {
    setActiveMethod(null);
    setSelectedBank(null);
    setSelectedWallet(null);
    setSelectedRetail(null);
    setIsProcessing(false);
    setIsSuccess(false);
    setIsFailed(false);
    setErrorMessage("");
    setInvoiceNumber("");
    setIsCopied(false);
    setPaymentCode("");
    setVaNumber("");
  };

  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const generatePaymentCode = (method: string) => {
    if (method === "va" && selectedBank) {
      const prefix =
        selectedBank === "BCA"
          ? "390"
          : selectedBank === "Mandiri"
          ? "700"
          : "800";
      const code = `${prefix}${Math.floor(100000000 + Math.random() * 900000000)}`;
      setVaNumber(code);
      return code;
    } else if (method === "ewallet" && selectedWallet) {
      const code = `08${Math.floor(100000000 + Math.random() * 900000000)}`;
      setPaymentCode(code);
      return code;
    } else if (method === "retail" && selectedRetail) {
      const code = `${selectedRetail
        .slice(0, 4)
        .toUpperCase()}${Math.floor(100000 + Math.random() * 900000)}`;
      setPaymentCode(code);
      return code;
    }
    return "";
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Gagal menyalin:", err);
      });
  };

  const simulatePaymentApi = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve({
            status: "success",
            invoice: `INV-${Date.now().toString().slice(-8)}`,
          });
        } else {
          resolve({
            status: "error",
            message:
              "Pembayaran gagal: Saldo tidak cukup atau server bermasalah.",
          });
        }
      }, 1000);
    });
  };

  const processPayment = async () => {
    setIsProcessing(true);
    try {
      const response: any = await simulatePaymentApi();
      setIsProcessing(false);

      if (response.status === "success") {
        setIsSuccess(true);
        setInvoiceNumber(response.invoice);
      } else {
        setIsFailed(true);
        setErrorMessage(response.message || "Terjadi kesalahan saat memproses pembayaran.");
      }
    } catch (error) {
      setIsProcessing(false);
      setIsFailed(true);
      setErrorMessage("Gagal menghubungi server. Silakan coba lagi nanti.");
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <style jsx>{`
        .payment-modal {
          color: #1f2937 !important;
          background-color: #ffffff !important;
        }
        .payment-modal * {
          color: inherit !important;
          background-color: inherit !important;
        }
        .payment-modal h2,
        .payment-modal h3,
        .payment-modal h4,
        .payment-modal p,
        .payment-modal span,
        .payment-modal label {
          color: #1f2937 !important;
        }
        .payment-modal .text-gray-500 {
          color: #6b7280 !important;
        }
        .payment-modal .text-gray-600 {
          color: #4b5563 !important;
        }
        .payment-modal .text-blue-600 {
          color: #2563eb !important;
        }
        .payment-modal .text-blue-800 {
          color: #1e40af !important;
        }
        .payment-modal .text-yellow-800 {
          color: #92400e !important;
        }
        .payment-modal .bg-gray-50 {
          background-color: #f9fafb !important;
        }
        .payment-modal .bg-gray-100 {
          background-color: #f3f4f6 !important;
        }
        .payment-modal .bg-blue-50 {
          background-color: #eff6ff !important;
        }
        .payment-modal .bg-yellow-50 {
          background-color: #fefce8 !important;
        }
        .payment-modal .bg-blue-600 {
          background-color: #2563eb !important;
        }
        .payment-modal .bg-blue-700 {
          background-color: #1d4ed8 !important;
        }
        .payment-modal .text-white {
          color: #ffffff !important;
        }
        .payment-modal input {
          background-color: #ffffff !important;
          color: #1f2937 !important;
          border-color: #d1d5db !important;
        }
        .payment-modal .border-gray-300 {
          border-color: #d1d5db !important;
        }
        .payment-modal .border-blue-600 {
          border-color: #0066cc !important;
        }
        .payment-modal .text-green-500 {
          color: #22c55e !important;
        }
        .payment-modal .text-red-500 {
          color: #ef4444 !important;
        }
        .payment-modal .bg-red-600 {
          background-color: #dc2626 !important;
        }
        .payment-modal .bg-red-700 {
          background-color: #b91c1c !important;
        }
      `}</style>

      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
        {isProcessing && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="payment-modal bg-white rounded-xl max-w-md w-full p-6 text-center">
              <div className="mb-4">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 transition-all duration-1000 ease-in-out"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">Memproses Pembayaran</h3>
              <p className="text-gray-600">Harap tunggu sebentar...</p>
            </div>
          </div>
        )}

        {isSuccess && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="payment-modal bg-white rounded-xl max-w-md w-full p-6 text-center">
              <div className="text-green-500 mb-4">
                <FontAwesomeIcon icon={faCheckCircle} className="text-5xl" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Pembayaran Berhasil!</h2>
              <p className="text-gray-600 mb-4">Terima kasih telah melakukan pembayaran.</p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4 text-left">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-500">Invoice</span>
                  <span className="font-mono">{invoiceNumber}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-500">Platform</span>
                  <span className="font-medium">{paymentData.platform}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-500">Layanan</span>
                  <span className="font-medium">{paymentData.layanan}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-500">Jumlah</span>
                  <span className="font-medium">{paymentData.jumlah}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Link Target</span>
                  <span className="font-medium">{paymentData.linkTarget}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Total</span>
                  <span className="font-bold text-blue-600">
                    {formatRupiah(paymentData.total)}
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold"
              >
                Selesai
              </button>
            </div>
          </div>
        )}

        {isFailed && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="payment-modal bg-white rounded-xl max-w-md w-full p-6 text-center">
              <div className="text-red-500 mb-4">
                <FontAwesomeIcon icon={faExclamationTriangle} className="text-5xl" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Pembayaran Gagal!</h2>
              <p className="text-gray-600 mb-4">{errorMessage}</p>
              <button
                onClick={() => setIsFailed(false)}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold"
              >
                Coba Lagi
              </button>
            </div>
          </div>
        )}

        <div className="payment-modal w-full max-w-sm overflow-y-auto rounded-xl bg-white shadow-xl">
          <div className="bg-blue-600 p-5 rounded-t-xl">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-white">CHECKOUT</h2>
              <button onClick={onClose} className="text-white hover:text-blue-200">
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          </div>

          <div className="p-5">
            <div className="flex justify-between items-center mb-5 p-3 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-base">Total Pembayaran</h3>
              <p className="text-blue-600 font-bold text-xl">
                {formatRupiah(paymentData.total)}
              </p>
            </div>

            <h3 className="text-xs font-medium mb-3 text-gray-600">METODE PEMBAYARAN</h3>

            <div className="space-y-2 mb-4">
              {/* QRIS Method */}
              <div className="payment-method-container">
                <button
                  onClick={() =>
                    setActiveMethod(activeMethod === "qris" ? null : "qris")
                  }
                  className="payment-method w-full bg-white rounded-lg p-2 flex items-center cursor-pointer shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                    <Image
                      src={imagePaths.qris}
                      alt="QRIS"
                      width={20}
                      height={20}
                      className="h-4"
                      quality={100}
                    />
                  </div>
                  <h3 className="font-medium text-sm mt-1">QRIS</h3>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`text-gray-400 ml-auto transform transition-transform duration-300 ${
                      activeMethod === "qris" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeMethod === "qris" && (
                  <div className="payment-details-content p-3">
                    {/* ... Konten detail QRIS ... */}
                  </div>
                )}
              </div>

              {/* Virtual Account Method */}
              <div className="payment-method-container">
                <button
                  onClick={() =>
                    setActiveMethod(activeMethod === "va" ? null : "va")
                  }
                  className="payment-method w-full bg-white rounded-lg p-2 flex items-center cursor-pointer shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                    <FontAwesomeIcon
                      icon={faUniversity}
                      className="text-blue-600 text-sm"
                    />
                  </div>
                  <h3 className="font-medium text-sm mt-1">Virtual Account</h3>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`text-gray-400 ml-auto transform transition-transform duration-300 ${
                      activeMethod === "va" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeMethod === "va" && (
                  <div className="payment-details-content p-3">
                    <h4 className="font-medium mb-2 text-center text-sm">Pilih Bank</h4>
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      {[
                        { id: "bca", logo: imagePaths.banks.bca },
                        { id: "mandiri", logo: imagePaths.banks.mandiri },
                        { id: "bni", logo: imagePaths.banks.bni },
                      ].map((bank) => (
                        <button
                          key={bank.id}
                          onClick={() => {
                            setSelectedBank(bank.id.toUpperCase());
                            generatePaymentCode("va");
                          }}
                          className={`method-item p-2 rounded-lg cursor-pointer hover:border-gray-500 border border-gray-300 transition-all duration-300 ${
                            selectedBank === bank.id.toUpperCase()
                              ? "bg-blue-50 border-blue-600 shadow-[0_0_0_1px_#0066cc]"
                              : ""
                          }`}
                        >
                          <div className="relative w-full h-12">
                            <Image
                              src={bank.logo}
                              alt={bank.id}
                              fill
                              className="object-contain"
                              quality={100}
                            />
                          </div>
                        </button>
                      ))}
                    </div>
                    {selectedBank && (
                      <>
                        <div className="bg-gray-50 p-3 rounded-lg mb-3">
                           <div className="mb-2">
                             <label className="block text-gray-500 text-xs mb-1">Nomor Virtual Account</label>
                             <div className="flex items-center">
                               <span className="font-mono va-number bg-gray-100 p-1 rounded flex-1 text-sm">{vaNumber}</span>
                               <button onClick={() => copyToClipboard(vaNumber)} className="text-blue-600 hover:text-blue-800 ml-1">
                                 <FontAwesomeIcon icon={faCopy} className="text-sm" />
                               </button>
                             </div>
                           </div>
                           <div>
                             <label className="block text-gray-500 text-xs mb-1">Jumlah Transfer</label>
                             <span className="font-bold text-blue-600 text-sm">{formatRupiah(paymentData.total)}</span>
                           </div>
                         </div>
                        <button onClick={processPayment} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-bold text-sm">
                          <FontAwesomeIcon icon={faCheckCircle} className="mr-1" /> Konfirmasi Pembayaran
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* E-Wallet Method */}
              <div className="payment-method-container">
                 <button
                  onClick={() =>
                    setActiveMethod(activeMethod === "ewallet" ? null : "ewallet")
                  }
                  className="payment-method w-full bg-white rounded-lg p-2 flex items-center cursor-pointer shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200"
                >
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                        <FontAwesomeIcon icon={faWallet} className="text-green-600 text-sm" />
                    </div>
                    <h3 className="font-medium text-sm mt-1">E-Wallet</h3>
                    <FontAwesomeIcon icon={faChevronDown} className={`text-gray-400 ml-auto transform transition-transform duration-300 ${activeMethod === 'ewallet' ? 'rotate-180' : ''}`} />
                </button>
                {activeMethod === 'ewallet' && (
                    <div className="payment-details-content p-3">
                        {/* ... Konten Detail E-Wallet ... */}
                    </div>
                )}
              </div>

              {/* Retail Method */}
              <div className="payment-method-container">
                 <button
                  onClick={() =>
                    setActiveMethod(activeMethod === "retail" ? null : "retail")
                  }
                  className="payment-method w-full bg-white rounded-lg p-2 flex items-center cursor-pointer shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200"
                >
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                        <FontAwesomeIcon icon={faStore} className="text-orange-600 text-sm" />
                    </div>
                    <h3 className="font-medium text-sm mt-1">Retail</h3>
                    <FontAwesomeIcon icon={faChevronDown} className={`text-gray-400 ml-auto transform transition-transform duration-300 ${activeMethod === 'retail' ? 'rotate-180' : ''}`} />
                </button>
                {activeMethod === 'retail' && (
                    <div className="payment-details-content p-3">
                        {/* ... Konten Detail Retail ... */}
                    </div>
                )}
              </div>

              {/* Credit Card Method */}
              <div className="payment-method-container">
                 <button
                  onClick={() =>
                    setActiveMethod(activeMethod === "cc" ? null : "cc")
                  }
                  className="payment-method w-full bg-white rounded-lg p-2 flex items-center cursor-pointer shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200"
                >
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                        <FontAwesomeIcon icon={faCreditCard} className="text-purple-600 text-sm" />
                    </div>
                    <h3 className="font-medium text-sm mt-1">Kartu Kredit</h3>
                    <FontAwesomeIcon icon={faChevronDown} className={`text-gray-400 ml-auto transform transition-transform duration-300 ${activeMethod === 'cc' ? 'rotate-180' : ''}`} />
                </button>
                {activeMethod === 'cc' && (
                    <div className="payment-details-content p-3">
                        {/* ... Konten Detail Kartu Kredit ... */}
                    </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {isCopied && (
          <div className="fixed bottom-5 right-5 bg-green-500 text-white px-3 py-2 rounded-lg flex items-center z-[1000] animate-fade-in text-sm">
            <FontAwesomeIcon icon={faCopy} className="mr-1" /> Nomor disalin!
          </div>
        )}
      </div>
    </>
  );
};

export default PaymentModal;
