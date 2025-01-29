import Heading from './Heading';
import FormSection from './FormSection/FormSection';

function Background() {
  return (
    <div className="min-h-screen bg-[#12372A] py-8 md:py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <Heading />
        <FormSection />
      </div>
    </div>
  );
}

export default Background;
