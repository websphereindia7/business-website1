import { useState } from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.target);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyteBbb2BnIkJO9SOy9PTy5rM5SKuW4rYHFFO0zWjh2prAApF_aTKZt_de5IXuMSsTDQg/exec",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        },
      );

      setStatus("success");
      e.target.reset();

      // Automatically hide success message after 5 seconds
      setTimeout(() => setStatus(""), 5000);
    } catch {
      setStatus("error");

      // Automatically hide error message after 5 seconds
      setTimeout(() => setStatus(""), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="pt-20 pb-0">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <span className="text-sm uppercase tracking-widest text-secondary">
              Contact
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">
              Let’s Connect
            </h2>

            <p className="mt-4 text-lg text-secondary leading-relaxed">
              Have an idea or need a professional website? Let’s talk about how
              it can be brought to life.
            </p>

            {/* Contact details + Social icons */}
            <div className="mt-6 flex flex-col gap-4">
              <div className="flex justify-between items-center gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-accent" />
                    <span className="text-secondary">
                      websphereindia7@gmail.com
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-accent" />
                    <span className="text-secondary">+91 12345 67890</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-accent text-white hover:bg-accent-dark transition"
                  >
                    <Linkedin size={18} />
                  </a>

                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-accent text-white hover:bg-accent-dark transition"
                  >
                    <Github size={18} />
                  </a>

                  <a
                    href="mailto:jaisan@email.com"
                    className="p-3 rounded-full bg-accent text-white hover:bg-accent-dark transition"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>

              {/* Google Map */}
              <div className="mt-4">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.579740586009!2d72.9278786752871!3d19.158774743050606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b693ae81f3c1%3A0x0!2sMulund%20(West)%2C%20Mumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1706130000000!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: "0.5rem" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm text-secondary mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-lg border border-border px-4 py-3 focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm text-secondary mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-border px-4 py-3 focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-secondary mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full rounded-lg border border-border px-4 py-3 focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="block text-sm text-secondary mb-1">
                  Message *
                </label>
                <textarea
                  rows="3"
                  name="message"
                  required
                  className="w-full rounded-lg border border-border px-4 py-3 focus:ring-2 focus:ring-accent"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center rounded-full bg-accent px-8 py-3 text-sm font-medium text-white hover:bg-accent-dark transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-600 text-sm">
                  Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-sm">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
