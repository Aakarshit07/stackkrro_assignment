import React from 'react';
import PersonalDetails from './PersonalDetails';
import PaymentGateway from './PaymentGateway';
import PaymentMethods from './PaymentModes';
import CardDetails from './CardSection.';

function FormSection() {
  return (
    <div className="bg-white rounded-3xl p-4 md:p-8 shadow-lg">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        <div className="w-full md:w-1/3 min-h-[200px] md:min-h-0">
          <PaymentGateway />
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-xl md:text-2xl font-bold mb-8">
            Complete registration payment
          </h2>
          <PersonalDetails />
          <PaymentMethods />
          <CardDetails />
        </div>
      </div>
    </div>
  );
}

export default FormSection;
