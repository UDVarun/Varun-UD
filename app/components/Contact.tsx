"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Mail,
  User,
  MessageSquare,
  Send,
  Briefcase,
} from "lucide-react";

/* =====================
   MOTION VARIANTS
===================== */
const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const fieldVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
};

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  /* Auto-hide success message */
  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => setStatus("idle"), 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      setStatus(res.ok ? "success" : "error");
      if (res.ok) form.reset();
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-28">
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-4xl px-6"
      >
        {/* HEADER */}
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            <Briefcase size={14} />
            Available for client engagements
          </span>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight">
            Contact
          </h2>

          <p className="mt-4 mx-auto max-w-xl text-muted-foreground">
            We design and deliver full-stack digital solutions aligned with business and technical needs.
For project discussions or collaboration,<br/>
 feel free to reach out.
          </p>
        </div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.08 }}
          className="space-y-6 rounded-3xl border bg-background/70 p-9 backdrop-blur-xl"
        >
          {/* NAME & EMAIL */}
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div variants={fieldVariant} className="relative">
              <User
                size={18}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                name="name"
                required
                placeholder="Full name"
                className="h-14 w-full rounded-xl border bg-transparent pl-12 pr-5 transition
                  hover:border-primary/40
                  focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </motion.div>

            <motion.div variants={fieldVariant} className="relative">
              <Mail
                size={18}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Business email"
                className="h-14 w-full rounded-xl border bg-transparent pl-12 pr-5 transition
                  hover:border-primary/40
                  focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </motion.div>
          </div>

          {/* SUBJECT */}
          <motion.div variants={fieldVariant} className="relative">
            <MessageSquare
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              name="subject"
              required
              placeholder="Subject (e.g. Web platform development)"
              className="h-14 w-full rounded-xl border bg-transparent pl-12 pr-5 transition
                hover:border-primary/40
                focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </motion.div>

          {/* MESSAGE */}
          <motion.div variants={fieldVariant}>
            <textarea
              name="message"
              required
              rows={6}
              placeholder="Briefly describe your requirements, timeline, and scope…"
              className="w-full resize-none rounded-2xl border bg-transparent px-5 py-4 transition
                hover:border-primary/40
                focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </motion.div>

          {/* BUTTON */}
          <motion.div variants={fieldVariant} className="pt-1 text-center">
            <button
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-full
                border border-primary
                px-10 py-4 text-sm font-medium
                text-primary
                transition
                hover:bg-primary hover:text-primary-foreground
                disabled:opacity-60"
            >
              <Send size={16} />
              {loading ? "Sending…" : "Send message"}
            </button>
          </motion.div>

          {/* SUCCESS */}
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto flex w-fit items-center gap-3 rounded-full
                border border-green-500/30
                bg-green-500/10
                px-6 py-3 text-sm text-green-600 dark:text-green-400"
            >
              <CheckCircle2 size={18} />
              Message sent successfully. We’ll respond shortly.
            </motion.div>
          )}

          {status === "error" && (
            <p className="text-center text-sm text-red-500">
              Something went wrong. Please try again.
            </p>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
}
