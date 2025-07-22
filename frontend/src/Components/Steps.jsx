import React from 'react';
import { Upload, Scissors, Download } from 'lucide-react';

const Steps = () => {
  const steps = [
    {
      id: 1,
      title: 'Upload Image',
      description: 'Choose an image from your device to get started.',
      icon: <Upload className="h-10 w-10 text-blue-600" />,
    },
    {
      id: 2,
      title: 'Remove Background',
      description: 'AI processes and removes the background automatically.',
      icon: <Scissors className="h-10 w-10 text-purple-600" />,
    },
    {
      id: 3,
      title: 'Download Image',
      description: 'Download your clean, background-free image instantly.',
      icon: <Download className="h-10 w-10 text-green-600" />,
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl  font-bold text-gray-700 mb-4 w-[60%] m-auto">
         Steps to remove background
image in seconds
        </h2>
        <p className="text-gray-600 mb-12 text-lg">
          Remove backgrounds in just 3 simple steps.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gray-100 p-4 rounded-full">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
