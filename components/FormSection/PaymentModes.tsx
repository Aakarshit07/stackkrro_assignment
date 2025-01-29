import {
  FaCcVisa,
  FaCcStripe,
  FaCcPaypal,
  FaCcMastercard,
} from 'react-icons/fa';
import { SiGooglepay } from 'react-icons/si';

function PaymentMethods() {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold mb-4">Payment methods</h2>
      <div className="flex flex-wrap gap-4">
        <FaCcVisa className="h-6 md:h-8 w-auto" />
        <FaCcStripe className="h-6 md:h-8 w-auto" />
        <FaCcPaypal className="h-6 md:h-8 w-auto" />
        <FaCcMastercard className="h-6 md:h-8 w-auto" />
        <SiGooglepay className="h-6 md:h-8 w-auto" />
      </div>
    </div>
  );
}
export default PaymentMethods;
