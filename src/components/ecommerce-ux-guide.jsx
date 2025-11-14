import { useState } from "react";
import ebookcover from "../assets/images/ebookcover.png";

export default function EbookLandingPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(""); // <-- toast message state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/.netlify/functions/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      const data = await res.json();

      if (data.success) {
        // Show toast
        setToast("Thanks for subscribing! Your ebook is ready.");
        // Auto-download PDF after 1.5s
        setTimeout(() => {
          window.location.href = "/ebook.pdf"; // make sure your PDF is in /public
        }, 1500);
      } else {
        alert("Subscription failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen">
      {/* HERO */}
      <section className="max-w-5xl mx-auto py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          5 UX Mistakes Killing Your Online Store’s Sales
          <span className="text-emerald-400"> (and How to Fix Them)</span>
        </h1>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
          A practical guide for e-commerce founders who want more clicks,
          conversions, and happy customers.
        </p>

        <img
          src={ebookcover}
          alt="Ebook Cover"
          className="w-72 mx-auto shadow-xl rounded-lg mb-10 ring-4 ring-indigo-500/30"
        />

        {/* Scroll to form */}
        <button
          onClick={() =>
            document
              .getElementById("download")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md transition"
        >
          Download Free Guide
        </button>
      </section>

      {/* VALUE SECTION */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-center text-emerald-400">
          What You’ll Learn
        </h2>

        <ul className="grid md:grid-cols-2 gap-6 text-lg text-slate-400">
          <li>✔ Improve conversion rates with UX tweaks</li>
          <li>✔ Reduce bounce & abandoned carts</li>
          <li>✔ Optimize product discovery</li>
          <li>✔ Build trust with better UI patterns</li>
        </ul>
      </section>

      {/* FORM SECTION */}
      <section id="download" className="bg-slate-800 py-20 px-6 border-t border-slate-700">
        <div className="max-w-lg mx-auto shadow-xl p-10 rounded-2xl bg-slate-800 border border-slate-700">
          <h3 className="text-2xl font-bold mb-4 text-center text-emerald-400">
            Get the Free Guide
          </h3>

          <p className="text-slate-400 mb-6 text-center">
            Enter your details below to download the PDF.
          </p>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-slate-700 border border-slate-600 px-4 py-3 rounded-lg text-slate-100"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-slate-700 border border-slate-600 px-4 py-3 rounded-lg text-slate-100"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-lg font-semibold transition disabled:opacity-50"
            >
              {loading ? "Processing..." : "Download Now"}
            </button>
          </form>

          {/* Toast message */}
          {toast && (
            <div className="mt-4 bg-emerald-500 text-white py-2 px-4 rounded-lg text-center transition-all">
              {toast}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
