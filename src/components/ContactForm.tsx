import { useState, type FormEvent } from "react";
import { Button } from "./ui/Button";
import { CheckIcon } from "./Icons";

const fieldClass =
  "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const set = (k: keyof typeof values) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
    setValues({ name: "", email: "", phone: "", subject: "", message: "" });
  }

  return (
    <form onSubmit={onSubmit} className="card-soft p-6 sm:p-8">
      <h3 className="text-2xl font-semibold text-foreground">Send us a message</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        This is a demo form — submissions are handled in the browser only.
      </p>

      {sent ? (
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-secondary/40 bg-primary-soft px-4 py-4">
          <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <p className="text-sm font-medium text-primary">
            Thank you for contacting us. Our team will get back to you soon.
          </p>
        </div>
      ) : null}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
            Full Name
          </label>
          <input id="name" required value={values.name} onChange={set("name")} className={fieldClass} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
            Email
          </label>
          <input id="email" type="email" required value={values.email} onChange={set("email")} className={fieldClass} placeholder="you@example.com" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
            Phone
          </label>
          <input id="phone" value={values.phone} onChange={set("phone")} className={fieldClass} placeholder="Phone number" />
        </div>
        <div>
          <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-foreground">
            Subject
          </label>
          <input id="subject" required value={values.subject} onChange={set("subject")} className={fieldClass} placeholder="How can we help?" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
            Message
          </label>
          <textarea id="message" required rows={5} value={values.message} onChange={set("message")} className={fieldClass} placeholder="Write your message..." />
        </div>
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  );
}
