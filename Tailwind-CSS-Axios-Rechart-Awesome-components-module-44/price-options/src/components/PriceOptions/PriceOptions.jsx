import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Plan",
      price: 29.99,
      features: [
        "Access to gym equipment",
        "Limited group classes",
        "One personal training session per month",
        "Free Wi-Fi",
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 49.99,
      features: [
        "Access to gym equipment",
        "Unlimited group classes",
        "Two personal training sessions per month",
        "Free Wi-Fi",
        "Access to pool and sauna",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 79.99,
      features: [
        "Access to gym equipment",
        "Unlimited group classes",
        "Four personal training sessions per month",
        "Free Wi-Fi",
        "Access to pool, sauna, and steam room",
        "Complimentary fitness assessment",
        "Priority booking for classes",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-5xl">Best Price in the town</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
