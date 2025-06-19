// components/Pricing.tsx (atau di mana pun file ini berada)

"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  // Hapus Link dari NextUI jika Anda akan menggunakan Link dari Next.js
  Spacer,
} from "@nextui-org/react";
import Link from "next/link"; // Gunakan Link dari Next.js untuk navigasi
import { ALL_TIERS } from "@/config/tiers";
import { FaCheck } from "react-icons/fa";
import { RoughNotation } from "react-rough-notation";

// Hapus semua state dan fungsi yang berhubungan dengan modal:
// useState, PaymentModal, dll. tidak diperlukan lagi di sini.

const Pricing = ({
  id,
  locale,
  langName,
}: {
  id: string;
  locale: any;
  langName: string;
}) => {
  const TIERS = ALL_TIERS[`TIERS_${langName.toUpperCase()}`];

  // Fungsi untuk mengekstrak angka dari string harga (misal: "Rp 100.000")
  const getPriceAsNumber = (priceString: string): number => {
    if (typeof priceString !== 'string') return 0;
    // Hapus semua karakter non-digit
    const digitsOnly = priceString.replace(/[^0-9]/g, '');
    return parseInt(digitsOnly, 10) || 0;
  }

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
                as={Link} // Gunakan komponen Button sebagai Link
                color={tier.buttonColor}
                variant={tier.buttonVariant}
                // Buat URL dengan query parameters
                href={`/payment?total=${getPriceAsNumber(tier.price)}&layanan=${encodeURIComponent(tier.title)}`}
              >
                {tier.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Spacer y={12} />
      {/* Hapus pemanggilan <PaymentModal /> dari sini */}
    </section>
  );
};

export default Pricing;
