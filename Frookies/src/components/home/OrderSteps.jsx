import React from 'react';
import graphic1 from '../../assets/icons/graphic_1.png';
import graphic2 from '../../assets/icons/Graphic_2.png';
import graphic3 from '../../assets/icons/Graphic_3.png';
import graphic4 from '../../assets/icons/Graphic_4.png';

export default function OrderSteps() {
  const steps = [
    {
      icon: graphic1,
      title: 'Order Confirmation',
      description: 'From the cart to always arrive straight to our oven',
    },
    {
      icon: graphic2,
      title: 'Baked & packed',
      description: 'Fresh out of the oven and right into your box',
    },
    {
      icon: graphic3,
      title: 'On Route',
      description: 'Your order is safely on its way to you',
    },
    {
      icon: graphic4,
      title: 'Delivery',
      description: 'Hot and crisp at your doorstep',
    },
  ];

  return (
    <section className="bg-surface-muted py-8 md:py-10 border-y border-brand-border/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex items-center p-2"
            >
              {/* Graphic Icon */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mb-2">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="ml-4 flex flex-col text-start max-w-[200px]">
                {/* Step Title */}
                <h4 className="text-xs sm:text-sm font-semibold text-primary leading-tight">
                  {step.title}
                </h4>

                {/* Step Description */}
                <p className="text-[10px] sm:text-[11px] text-brand-gray leading-snug mt-1">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}