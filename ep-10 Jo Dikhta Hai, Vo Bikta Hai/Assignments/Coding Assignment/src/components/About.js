const About = () => {
  return (
    <div className="about-container p-8 bg-gray-50 text-gray-800">
      <h1 className="about-title text-4xl font-bold text-center text-gray-900 mb-6">
        About Us
      </h1>
      <p className="about-description text-lg leading-relaxed mb-8">
        Welcome to <strong className="font-semibold">Namaste Food</strong>, your one-stop solution for satisfying cravings and exploring culinary delights! Our mission is to connect you with the finest restaurants and eateries, making food ordering seamless, quick, and enjoyable.
      </p>

      <h2 className="about-subtitle text-2xl font-semibold text-gray-700 mb-4">
        Who We Are
      </h2>
      <p className="about-text text-lg leading-relaxed mb-6">
        We are a passionate team of food enthusiasts and tech experts who believe that great food deserves to be just a tap away. Whether you’re craving local favorites, international cuisines, or healthy options, we bring them to your doorstep with just a few clicks.
      </p>

      <h2 className="about-subtitle text-2xl font-semibold text-gray-700 mb-4">
        Our Mission
      </h2>
      <p className="about-text text-lg leading-relaxed mb-4">
        At <strong className="font-semibold">Namaste Food</strong>, we aim to redefine how you experience food delivery by offering:
      </p>
      <ul className="about-list list-disc list-inside text-lg mb-6 space-y-2">
        <li>
          <strong className="font-semibold">Convenience:</strong> Easy-to-use app with a simple ordering process.
        </li>
        <li>
          <strong className="font-semibold">Variety:</strong> A diverse menu from top-rated restaurants and home kitchens near you.
        </li>
        <li>
          <strong className="font-semibold">Reliability:</strong> On-time delivery with live tracking for your peace of mind.
        </li>
      </ul>

      <h2 className="about-subtitle text-2xl font-semibold text-gray-700 mb-4">
        Why Choose Us?
      </h2>
      <ul className="about-list list-disc list-inside text-lg mb-6 space-y-2">
        <li>
          <strong className="font-semibold">Fast and Reliable:</strong> We ensure your food arrives hot and fresh.
        </li>
        <li>
          <strong className="font-semibold">Personalized Experience:</strong> Curated recommendations based on your tastes and preferences.
        </li>
        <li>
          <strong className="font-semibold">Secure Payments:</strong> Multiple payment options with top-notch security for hassle-free transactions.
        </li>
      </ul>

      <h2 className="about-subtitle text-2xl font-semibold text-gray-700 mb-4">
        How It Works
      </h2>
      <ol className="about-steps list-decimal list-inside text-lg mb-6 space-y-2">
        <li>
          <strong className="font-semibold">Explore:</strong> Browse menus from a variety of restaurants and cuisines.
        </li>
        <li>
          <strong className="font-semibold">Order:</strong> Customize your order and add your favorites to the cart.
        </li>
        <li>
          <strong className="font-semibold">Relax:</strong> Track your delivery in real-time as we bring your meal to you.
        </li>
      </ol>

      <h2 className="about-subtitle text-2xl font-semibold text-gray-700 mb-4">
        Our Commitment
      </h2>
      <p className="about-text text-lg leading-relaxed mb-6">
        We’re more than just a food delivery app. We’re a community of food lovers who strive to support local businesses and promote sustainable practices. With{" "}
        <strong className="font-semibold">Namaste Food</strong>, every meal ordered is a step towards connecting people, cultures, and flavors.
      </p>

      <h2 className="about-subtitle text-2xl font-semibold text-gray-700 mb-4">
        Join the Journey
      </h2>
      <p className="about-text text-lg leading-relaxed">
        Hungry? Let’s get started! Download <strong className="font-semibold">Namaste Food</strong> now and indulge in a world of delicious possibilities.
      </p>
    </div>
  );
};

export default About;
