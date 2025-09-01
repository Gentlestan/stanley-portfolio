import salesSkillHubLogo from "../../assets/images/portrait.jpg";  
//import springmillezLogo from "../assets/images/portrait.jpg";  

const Testimonials = () => {
  const testimonials = [
    {
      name: "SalesSkillHub",
      role: "Tech Sales",
      text: "Working with Stanley was seamless. The portfolio he delivered showcased both creativity and technical depth.",
      image: salesSkillHubLogo,
    },
    {
      name: "Springmillez Engineering",
      role: "Energy Solutions",
      text: "He built a clean and professional web presence for us. The project delivery was timely and exceeded expectations.",
      image: salesSkillHubLogo,
    },
  ];

  return (
    <section className="bg-slate-800 py-12 px-6 text-gray-50 mt-10 rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-8">💬 Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-slate-900 p-6 rounded-lg shadow-md text-center"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-14 h-14 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="italic text-slate-300 mb-4">“{t.text}”</p>
            <h4 className="font-semibold text-indigo-400">{t.name}</h4>
            <span className="text-slate-500 text-sm">{t.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
