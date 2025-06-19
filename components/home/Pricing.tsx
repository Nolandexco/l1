"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
  Spacer,
} from "@nextui-org/react";
import { ALL_TIERS } from "@/config/tiers";
import { FaCheck } from "react-icons/fa";
import { RoughNotation } from "react-rough-notation";
import { useState } from "react";
import PaymentModal from "../ui/PaymentModal";

// Definisikan tipe untuk tier berdasarkan struktur ALL_TIERS
type Tier = {
  key: string;
  title: string;
  description: string;
  price: string | number;
  features: string[];
  buttonColor: "success" | "warning" | "default" | "primary" | "secondary" | "danger" | undefined;
  buttonVariant: "solid" | "bordered" | "light" | "flat" | "ghost" | "shadow" | undefined;
  buttonText: string;
};

const Pricing = ({
  id,
  locale,
  langName,
}: {
  id: string;
  locale: any; // Ganti dengan tipe spesifik jika memungkinkan
  langName: string;
}) => {
  const TIERS = ALL_TIERS[`TIERS_${langName.toUpperCase()}`] as Tier[];
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // State untuk visibilitas modal
  const [selectedTier, setSelectedTier] = useState<Tier | null>(null); // State untuk tier yang dipilih

  // Fungsi untuk menangani klik tombol dan membuka modal
  const handleButtonClick = (tier: Tier) => {
    setSelectedTier(tier);
    setIsModalOpen(true);
  };

  // Fungsi untuk menutup modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTier(null);
  };

  return (
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
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 justify-items-center">
        {TIERS?.map((tier) => (
          <Card key={tier.key} className="p-3 flex-1 w-[90%]" shadow="md">
            <CardHeader className="flex flex-col items-start gap-2 pb-6">
              <h2 className="text-large font-medium">{tier.title}</h2>
              <p className="text-medium text-default-500">{tier.description}</p>
            </CardHeader>
            <Divider />
            <CardBody className="gap-8">
              <p className="flex items-baseline gap-1 pt-2">
                <span className="inline bg-gradient-to-br from-foreground to-foreground-600 bg-clip-text text-2xl font-semibold leading-7 tracking-tight text-transparent">
                  {tier.price}
                </span>
                {typeof tier.price !== "string" ? (
                  <span className="text-small font-medium text-default-400">
                    {tier.price}
                  </span>
                ) : null}
              </p>
              <ul className="flex flex-col gap-2">
                {tier.features?.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <FaCheck className="text-blue-500" />
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
                onClick={() => handleButtonClick(tier)} // Memicu modal saat klik
              >
                {tier.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {/* Render PaymentModal dan kirimkan props yang diperlukan */}
      {selectedTier && (
        <PaymentModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          tier={selectedTier}
        />
      )}
      <Spacer y={12} />
    </section>
  );
};

export default Pricing;
