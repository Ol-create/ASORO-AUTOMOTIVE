"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function InvoicePage({ onClose, invoice }) {
  const {
    id = "#7032a3461-rb8",
    date = "Tue, Nov 19 2023 11:00 am",
    customer = {
      name: "John Collins",
      email: "Johncollins@gmail.com",
      phone: "+2308546837066",
    },
    items = [
      { description: "BrakePad", rate: 20000, qty: 2 },
      { description: "Diagnosis", rate: 3000, qty: 1 },
    ],
    totals = { subtotal: 40300, discount: 0, total: 43000 },
  } = invoice || {};

  const formatCurrency = (value) =>
    `₦${value.toLocaleString("en-NG", { minimumFractionDigits: 2 })}`;

  const handleDownload = () => {
    // placeholder: integrate jsPDF, pdfmake, or API call
    alert("Download invoice triggered!");
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-6 overflow-y-auto max-h-[90vh]">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Purchase Invoice
            </h1>
            <p className="text-gray-500 text-sm">
              Review your order details below
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Close invoice"
          >
            ✕
          </button>
        </div>

        {/* Invoice Details */}
        <Card className="w-full shadow-md mb-6">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <p className="font-medium text-gray-700">
                Invoice <span className="text-gray-900">{id}</span>
              </p>
              <p className="text-sm text-gray-500">{date}</p>
            </div>

            {/* Customer Details */}
            <div className="bg-gray-100 rounded-xl p-4 space-y-1">
              <h2 className="font-semibold text-gray-800">
                Customer’s Details
              </h2>
              <p>
                <span className="font-medium">Name:</span> {customer.name}
              </p>
              <p>
                <span className="font-medium">Email:</span> {customer.email}
              </p>
              <p>
                <span className="font-medium">Phone:</span> {customer.phone}
              </p>
            </div>

            {/* Order Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-separate border-spacing-y-2 text-sm">
                <thead>
                  <tr className="text-gray-500">
                    <th className="text-left">DESCRIPTION</th>
                    <th className="text-right">RATE</th>
                    <th className="text-right">QTY</th>
                    <th className="text-right">SUBTOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, idx) => (
                    <tr key={idx} className="bg-gray-50">
                      <td className="py-2">{item.description}</td>
                      <td className="text-right">
                        {formatCurrency(item.rate)}
                      </td>
                      <td className="text-right">{item.qty}</td>
                      <td className="text-right">
                        {formatCurrency(item.rate * item.qty)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Totals */}
            <div className="flex justify-end mt-4">
              <div className="w-64 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Subtotal</span>
                  <span className="font-semibold">
                    {formatCurrency(totals.subtotal)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Discount</span>
                  <span className="font-semibold">
                    {formatCurrency(totals.discount)}
                  </span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="font-bold text-gray-800">SUM TOTAL</span>
                  <span className="font-bold text-blue-600">
                    {formatCurrency(totals.total)}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Buttons */}
        <div className="flex gap-4 justify-end">
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-xl"
            onClick={handleDownload}
          >
            Download Invoice
          </Button>
          <Button
            variant="outline"
            className="border-gray-300 text-gray-700 px-6 rounded-xl"
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
