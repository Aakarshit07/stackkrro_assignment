import LogoImage from '@/public/Logo.png';
import Image from 'next/image';

function PaymentGateway() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Image
        src={LogoImage}
        alt="Payment Gateway Logo"
        className="w-20 h-20 md:w-24 md:h-24 mb-4"
      />
      <h2 className="text-xl md:text-2xl font-bold text-[#0B4B2F]">
        Payment gateway
      </h2>
      <p className="text-gray-400 text-xs mt-2 text-center">
        Enter school location details!
      </p>
    </div>
  );
}
export default PaymentGateway;
