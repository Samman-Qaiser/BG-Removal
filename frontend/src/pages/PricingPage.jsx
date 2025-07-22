import React from 'react'
import logo from '/logo.svg';
const plans = [
  {
    name: 'Basic',
    credits: 100,
    use:"Best for personal Use",
    price: 50,
    highlight: false
  },
  {
    name: 'Pro',
    credits: 500,
    price: 200,
      use:"Best for business Use",
    highlight: true
  },
  {
    name: 'Enterprise',
    credits: 5000,
    price: 500,
      use:"Best for enterprise Use",
    highlight: false
  }
]

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 text-gray-800">
      <h2 className="text-4xl font-bold text-center mb-6">Our Pricing Plans</h2>
      <p className="text-center text-gray-500 max-w-xl mx-auto mb-12">
        Choose the plan that fits your needs. Each credit allows one background removal.
      </p>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`w-full  border hover:border-indigo-600 hover:bg-indigo-50 transform hover:scale-105 hover:shadow-2xl md:w-80 p-6 rounded-lg shadow-xl transition-all duration-300 ${
              plan.highlight ? 'bg-gradient-to-br from-purple-500 to-indigo-600 text-white scale-105' : 'bg-white'
            }`}
          >
          <img src={logo} alt="Logo" className=" w-[200px] h-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
            <p>{plan.use}</p>
            <p className="text-lg mb-4">{plan.credits} credits</p>
            <p className="text-4xl font-bold mb-6">${plan.price}</p>
            <button
              className={`w-full cursor-pointer py-3 rounded-lg font-medium transition duration-200 ${
                plan.highlight
                  ? 'bg-white text-indigo-700 hover:bg-gray-200'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PricingPage
