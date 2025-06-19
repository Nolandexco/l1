"use client";

import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
  Spacer,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Image, // <-- Impor komponen Image
} from "@nextui-org/react";

import { ALL_TIERS } from "@/config/tiers";
import { FaCheck, FaWhatsapp } from "react-icons/fa"; // <-- Impor ikon WhatsApp
import { RoughNotation } from "react-rough-notation";

// Definisikan tipe untuk tier agar lebih aman
interface Tier {
  key: number;
  title: string;
  description: string;
  price: string;
  features: string[];
  buttonText: string;
  buttonColor: "primary" | "secondary" | "default" | "success" | "warning" | "danger" | undefined;
  buttonVariant: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost" | undefined;
  href: string;
}

const Pricing = ({
  id,
  locale,
  langName,
}: {
  id: string;
  locale: any;
  langName: string;
}) => {
  const TIERS: Tier[] = ALL_TIERS[`TIERS_${langName.toUpperCase()}`];
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedTier, setSelectedTier] = useState<Tier | null>(null);

  const handleButtonClick = (tier: Tier) => {
    setSelectedTier(tier);
    onOpen();
  };

  const WHATSAPP_NUMBER = "6285156779923"; // Gunakan kode negara (62)

  return (
    <>
      <section
        id={id}
        className="flex flex-col justify-center max-w-4xl items-center pt-16"
      >
        <div className="flex flex-col text-center max-w-xl">
          <h2 className="text-center text-white">
            <RoughNotation type="highlight" show={true} color="#2563EB">
              {locale.title}
            </RoughNotation>
          </h2>
          <Spacer y={2} />
          <p className="text-large text-default-500">{locale.description}</p>
        </div>
        <Spacer y={8} />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 justify-items-center w-full">
          {TIERS?.map((tier) => (
            <Card key={tier.key} className="p-3 flex-1 w-full max-w-md" shadow="md">
              <CardHeader className="flex flex-col items-start gap-2 pb-6">
                <h2 className="text-large font-medium">{tier.title}</h2>
                <p className="text-medium text-default-500">
                  {tier.description}
                </p>
              </CardHeader>
              <Divider />
              <CardBody className="gap-8">
                <p className="flex items-baseline gap-1 pt-2">
                  <span className="inline bg-gradient-to-br from-foreground to-foreground-600 bg-clip-text text-2xl font-semibold leading-7 tracking-tight text-transparent">
                    {tier.price}
                  </span>
                </p>
                <ul className="flex flex-col gap-2">
                  {tier.features?.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <FaCheck className="text-blue-500 flex-shrink-0" />
                      <p className="text-default-500">{feature}</p>
                    </li>
                  ))}
                </ul>
              </CardBody>
              <CardFooter>
                <Button
                  fullWidth
                  color={tier.buttonColor}
                  variant={tier.buttonVariant}
                  onPress={() => handleButtonClick(tier)} // <-- Panggil fungsi untuk membuka modal
                >
                  {tier.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <Spacer y={12} />
      </section>

      {/* Modal Pembayaran */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="lg">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-xl">
                Konfirmasi Pembayaran: {selectedTier?.title}
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Sisi Kiri: Gambar QRIS */}
                  <div className="flex-1 flex flex-col items-center justify-center text-center">
                    <h3 className="text-lg font-semibold">Scan QRIS</h3>
                    <p className="text-sm text-default-500 mb-2">
                      Mendukung semua E-Wallet & M-Banking
                    </p>
                    <Image
                      src="/qris-image.png" // <-- GANTI DENGAN PATH GAMBAR QRIS ANDA
                      alt="QRIS Payment"
                      width={250}
                      height={250}
                      className="object-contain"
                    />
                  </div>
                  <Divider orientation="vertical" className="hidden md:flex h-auto" />
                  <Divider orientation="horizontal" className="flex md:hidden" />
                  {/* Sisi Kanan: Rincian Pembayaran */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-3">
                      Rincian Pesanan
                    </h3>
                    <div className="flex justify-between">
                      <p className="text-default-500">Paket</p>
                      <p className="font-medium">{selectedTier?.title}</p>
                    </div>
                    <Spacer y={2} />
                    <div className="flex justify-between">
                      <p className="text-default-500">Harga</p>
                      <p className="font-medium text-blue-500">
                        {selectedTier?.price}
                      </p>
                    </div>
                    <Divider className="my-3" />
                    <ul className="flex flex-col gap-2 mb-3">
                      <p className="font-medium mb-1">Fitur termasuk:</p>
                      {selectedTier?.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm"
                        >
                          <FaCheck className="text-blue-500" />
                          <p className="text-default-500">{feature}</p>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-default-400 mt-4">
                      Setelah melakukan pembayaran, silakan konfirmasi melalui
                      tombol WhatsApp di bawah.
                    </p>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Tutup
                </Button>
                <Button
                  as={Link}
                  color="success"
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo,%20saya%20ingin%20konfirmasi%20pembayaran%20untuk%20paket%20${selectedTier?.title}.`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  startContent={<FaWhatsapp />}
                  className="text-white"
                >
                  Konfirmasi via WhatsApp
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Pricing;
