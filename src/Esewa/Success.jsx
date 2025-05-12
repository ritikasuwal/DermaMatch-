import React, { useEffect, useState } from 'react';

const Success = () => {
  const [receiptData, setReceiptData] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const base64Data = params.get('data');

    if (base64Data) {
      try {
        const decoded = atob(base64Data);
        const parsed = JSON.parse(decoded);
        setReceiptData(parsed);
      } catch (error) {
        console.error('Error decoding or parsing data:', error);
      }
    }
  }, []);

  if (!receiptData) {
    return <p>Loading receipt...</p>;
  }

  return (
    <div className="receipt border rounded-lg p-6 max-w-md m-auto mt-10 shadow-md bg-white ">
      <h2 className="text-2xl font-bold mb-4 text-green-600">Payment Successful</h2>
      <p><strong>Transaction Code:</strong> {receiptData.transaction_code}</p>
      <p><strong>Status:</strong> {receiptData.status}</p>
      <p><strong>Total Amount:</strong> Rs. {receiptData.total_amount}</p>
      <p><strong>Transaction UUID:</strong> {receiptData.transaction_uuid}</p>
      <p><strong>Product Code:</strong> {receiptData.product_code}</p>
      <p className="mt-4 text-sm text-gray-500">This receipt is auto-generated for your records.</p>
    </div>
  );
};

export default Success;
