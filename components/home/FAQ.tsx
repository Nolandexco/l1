"use client";

import { RoughNotation } from "react-rough-notation";
import { ALL_FAQS } from "@/config/faqs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = ({
  id,
  locale,
  langName,
}: {
  id: string;
  locale: any;
  langName: string;
}) => {
  const FAQS = ALL_FAQS[`FAQS_${langName.toUpperCase()}`];

  return (
    <section id={id} className="container py-16 md:py-24">
      <div className="flex flex-col text-center gap-4 mb-12 max-w-2xl mx-auto">
        {/* PERUBAHAN 1: Ukuran font diperbesar (dari 2xl/3xl menjadi 4xl/5xl) */}
        <h2 className="text-4xl font-bold md:text-5xl text-white">
          <RoughNotation type="highlight" show={true} color="#2563EB">
            {locale.title}
          </RoughNotation>
        </h2>

        {/* PERUBAHAN 2: Teks deskripsi di bawah judul telah dihapus */}
        {/* <p className="text-lg text-muted-foreground">{locale.description}</p> */}
      </div>

      <Accordion type="single" collapsible className="mx-auto w-full max-w-3xl">
        {FAQS?.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-base text-left">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pt-2">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;
