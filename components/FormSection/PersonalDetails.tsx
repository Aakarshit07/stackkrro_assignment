function PersonalDetails() {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold mb-4 ">Personal details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1 text-[#2B3674]">
            Address line
          </label>
          <input
            type="text"
            placeholder="P.o Box 1223"
            className="w-full p-2 border rounded-md text-gray-600"
          />
        </div>
        <div>
          <label className="block text-sm mb-1 text-[#2B3674]">City</label>
          <input
            type="text"
            placeholder="Arusha"
            className="w-full p-2 border rounded-md text-gray-600"
          />
        </div>
        <div>
          <label className="block text-sm mb-1 text-[#2B3674]">State</label>
          <input
            type="text"
            placeholder="Arusha,Tanzania"
            className="w-full p-2 border rounded-md text-gray-600"
          />
        </div>
        <div>
          <label className="block text-sm mb-1 text-[#2B3674]">
            Postal code
          </label>
          <input
            type="text"
            placeholder="9090"
            className="w-full p-2 border rounded-md text-gray-600"
          />
        </div>
      </div>
    </div>
  );
}
export default PersonalDetails;
