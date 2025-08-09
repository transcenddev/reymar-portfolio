import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bars,
  ChevronDoubleDown,
  Plus,
} from "./icons";

export const IconExample: React.FC = () => {
  return (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-bold mb-4">SVG Icons as React Components</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex flex-col items-center p-4 border rounded-lg">
          <ArrowLeft className="text-blue-600 mb-2" />
          <span className="text-sm">Arrow Left</span>
        </div>

        <div className="flex flex-col items-center p-4 border rounded-lg">
          <ArrowRight className="text-green-600 mb-2" />
          <span className="text-sm">Arrow Right</span>
        </div>

        <div className="flex flex-col items-center p-4 border rounded-lg">
          <ArrowUpRight className="text-purple-600 mb-2" />
          <span className="text-sm">Arrow Up Right</span>
        </div>

        <div className="flex flex-col items-center p-4 border rounded-lg">
          <Bars className="text-gray-600 mb-2" />
          <span className="text-sm">Bars (Menu)</span>
        </div>

        <div className="flex flex-col items-center p-4 border rounded-lg">
          <ChevronDoubleDown className="text-orange-600 mb-2" />
          <span className="text-sm">Chevron Double Down</span>
        </div>

        <div className="flex flex-col items-center p-4 border rounded-lg">
          <Plus className="text-red-600 mb-2" />
          <span className="text-sm">Plus</span>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Usage Examples:</h3>
        <div className="space-y-2 text-sm">
          <p>
            <code>{"<ArrowLeft size={32} className='text-blue-500' />"}</code>
          </p>
          <p>
            <code>{"<Plus strokeWidth={2} className='text-green-600' />"}</code>
          </p>
          <p>
            <code>{"<Bars size={20} className='text-gray-700' />"}</code>
          </p>
        </div>
      </div>
    </div>
  );
};
