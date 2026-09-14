import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import OrangeSquiggle from '../common/OrangeSquiggle';
import { fadeInLeft, fadeInBottom } from '../../utils/animations';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const headingRef = useRef(null);
  const cardsRef = useRef({});

  useEffect(() => {
    const anims = [];
    if (headingRef.current) {
      anims.push(fadeInLeft(headingRef.current));
    }
    Object.values(cardsRef.current).forEach((card, idx) => {
      if (card) {
        anims.push(fadeInBottom(card, { delay: (idx % 3) * 0.1 }));
      }
    });

    return () => {
      anims.forEach((a) => a?.kill?.());
    };
  }, []);

  const faqsLeft = [
    {
      id: 1,
      question: 'How long do your cookies stay fresh?',
      answer:
        'Our cookies are baked fresh daily with zero preservatives. They stay delightfully fresh and crispy for up to 7-10 days in an airtight container at room temperature.',
    },
    {
      id: 2,
      question: 'Do you offer same-day delivery?',
      answer:
        'Yes! Orders placed before 4:00 PM are baked and dispatched on the same day for maximum freshness and warmth.',
    },
    {
      id: 3,
      question: 'Are the cookies baked freshly?',
      answer:
        'Always! We never stock pre-baked goods. Your batch goes into our ovens only after your order is confirmed.',
    },
  ];

  const faqsRight = [
    {
      id: 4,
      question: 'Do you offer custom boxes or gift packs?',
      answer:
        'Yes! We offer curated gift boxes, custom ribbon packaging, and personalized notes for birthdays, weddings, and holidays.',
    },
    {
      id: 5,
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit and debit cards, digital wallets, bank transfers, and cash on delivery (COD).',
    },
    {
      id: 6,
      question: 'Can you accommodate bulk or event orders?',
      answer:
        'We love catering events! Please submit your request at least 48 hours in advance so our bakery team can schedule production.',
    },
  ];

  const toggleFaq = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  const renderFaqCard = (faq) => {
    const isOpen = openIndex === faq.id;
    return (
      <div
        key={faq.id}
        ref={(el) => (cardsRef.current[faq.id] = el)}
        className="bg-surface-muted border border-brand-border/30 rounded-[8px] p-4 cursor-pointer transition-colors duration-200 hover:border-primary/40 mb-3"
        onClick={() => toggleFaq(faq.id)}
      >
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs sm:text-sm font-medium text-brand-brown">
            {faq.question}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="text-brand-gray hover:text-primary transition-colors shrink-0 w-5 h-5 flex items-center justify-center"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="minus"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  <Minus size={15} />
                </motion.span>
              ) : (
                <motion.span
                  key="plus"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  <Plus size={15} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <p className="pt-3 text-xs text-brand-gray leading-relaxed border-t border-brand-border/20 mt-2">
                {faq.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section className="bg-surface py-16 md:py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div ref={headingRef} className="mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-brown">
            Frequently asked Questions
          </h2>
          <OrangeSquiggle className="w-16 h-2 -mt-0.5" />
        </div>

        {/* 2-Column FAQ Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
          <div>{faqsLeft.map(renderFaqCard)}</div>
          <div>{faqsRight.map(renderFaqCard)}</div>
        </div>

      </div>
    </section>
  );
}