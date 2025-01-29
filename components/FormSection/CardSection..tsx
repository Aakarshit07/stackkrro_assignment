function CardDetails() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Card details</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm mb-1 text-[#2B3674]">
            Cardholder&apos;s name
          </label>
          <input
            type="text"
            placeholder="Seen on your card"
            className="w-full p-2 border rounded-md text-gray-600"
          />
        </div>
        <div>
          <label className="block text-sm mb-1 text-[#2B3674]">
            Card number
          </label>
          <input
            type="text"
            placeholder="Seen on your card"
            className="w-full p-2 border rounded-md text-gray-600"
          />
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
