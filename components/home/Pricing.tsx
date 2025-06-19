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
  Image,
} from "@nextui-org/react";

import { ALL_TIERS } from "@/config/tiers";
import { FaCheck, FaWhatsapp, FaDownload } from "react-icons/fa";
import { RoughNotation } from "react-rough-notation";

import { Tier } from "@/types/pricing";

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

  const WHATSAPP_NUMBER = "6285156779923";

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
            <Card
              key={tier.key as React.Key}
              className="p-3 flex-1 w-full max-w-md"
              shadow="md"
            >
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
                {tier.features && tier.features.length > 0 && (
                  <ul className="flex flex-col gap-2">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <FaCheck className="text-blue-500 flex-shrink-0" />
                        <p className="text-default-500">{feature}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </CardBody>
              <CardFooter>
                <Button
                  fullWidth
                  color={tier.buttonColor}
                  variant={tier.buttonVariant}
                  onPress={() => handleButtonClick(tier)}
                >
                  {tier.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <Spacer y={12} />
      </section>

      {/* --- MODAL PEMBAYARAN REVISI FINAL --- */}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="sm"
        // Menambahkan 'placement' untuk memaksa modal selalu di tengah layar
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              {/* Header dikosongkan untuk menghapus teks "Pembayaran" */}
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody className="pb-6">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-lg font-semibold text-default-700">Scan untuk Membayar</h3>
                  <Spacer y={2} />
                  
                  {/* Container untuk menampung gambar dan tombol download */}
                  <div className="relative">
                    <Image
                      src="/qris-image.png"
                      alt="QRIS Payment"
                      width={280}
                      height={280}
                      className="object-contain rounded-lg"
                    />
                    {/* Tombol download minimalis di pojok gambar */}
                    <Button
                      isIconOnly
                      as="a"
                      href="/qris-image.png"
                      download="QRIS_Pembayaran.png"
                      aria-label="Unduh QRIS"
                      className="absolute top-2 right-2 bg-black/20 backdrop-blur-sm"
                      size="sm"
                    >
                      <FaDownload className="text-white" />
                    </Button>
                  </div>
                </div>

                <Divider className="my-4" />

                <div className="w-full">
                  <div className="flex justify-between items-center">
                    <p className="text-default-500">Paket</p>
                    <p className="font-medium text-right">{selectedTier?.title}</p>
                  </div>
                  <Spacer y={2} />
                  <div className="flex justify-between items-center">
                    <p className="text-default-500">Total Harga</p>
                    <p className="font-semibold text-xl text-blue-500">
                      {selectedTier?.price}
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
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo,%20saya%20sudah%20membayar%20untuk%20paket%20${selectedTier?.title}.`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  startContent={<FaWhatsapp />}
                  className="text-white"
                >
                  Konfirmasi WhatsApp
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
