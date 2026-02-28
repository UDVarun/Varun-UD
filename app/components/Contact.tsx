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
  const [status,setStatus] =
    useState<"idle"|"success"|"error">("idle");


  useEffect(()=>{

    if(status==="success"){

      const t=setTimeout(()=>setStatus("idle"),4000);

      return()=>clearTimeout(t);

    }

  },[status]);



  async function handleSubmit(
    e:React.FormEvent<HTMLFormElement>
  ){

    e.preventDefault();

    setLoading(true);

    const form=e.currentTarget;


    const data={

      name:(form.elements.namedItem("name") as HTMLInputElement).value,

      email:(form.elements.namedItem("email") as HTMLInputElement).value,

      subject:(form.elements.namedItem("subject") as HTMLInputElement).value,

      message:(form.elements.namedItem("message") as HTMLTextAreaElement).value,

    };


    /* INSTANT RESPONSE */

    setStatus("success");

    form.reset();

    setLoading(false);



    /* BACKGROUND SEND */

    fetch("/api/contact",{

      method:"POST",

      headers:{
        "Content-Type":"application/json"
      },

      body:JSON.stringify(data)

    }).catch(()=>{

      setStatus("error")

    });

  }



  return (

<section id="contact" className="py-28">

<motion.div

variants={sectionVariant}

initial="hidden"

whileInView="visible"

viewport={{once:true}}

className="mx-auto max-w-4xl px-6"

>


<div className="mb-12 text-center">

<span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">

<Briefcase size={14}/>

Available for client engagements

</span>


<h2 className="mt-6 text-4xl font-semibold tracking-tight">

Contact

</h2>


<p className="mt-4 mx-auto max-w-xl text-muted-foreground">

For project discussions or collaboration,
feel free to reach out.

</p>

</div>



<motion.form

onSubmit={handleSubmit}

initial="hidden"

whileInView="visible"

viewport={{once:true}}

transition={{staggerChildren:.08}}

className="space-y-6 rounded-3xl border bg-background/70 p-9 backdrop-blur-xl"

>


<div className="grid gap-6 md:grid-cols-2">


<motion.div variants={fieldVariant} className="relative">

<User size={18}
className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground"/>

<input
name="name"
required
placeholder="Full name"
className="h-14 w-full rounded-xl border bg-transparent pl-12 pr-5 transition hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/30"
/>

</motion.div>



<motion.div variants={fieldVariant} className="relative">

<Mail size={18}
className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground"/>

<input
name="email"
type="email"
required
placeholder="Business email"
className="h-14 w-full rounded-xl border bg-transparent pl-12 pr-5 transition hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/30"
/>

</motion.div>


</div>



<motion.div variants={fieldVariant} className="relative">

<MessageSquare size={18}
className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground"/>

<input
name="subject"
required
placeholder="Subject"
className="h-14 w-full rounded-xl border bg-transparent pl-12 pr-5 transition hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/30"
/>

</motion.div>



<motion.div variants={fieldVariant}>

<textarea
name="message"
required
rows={6}
placeholder="Your message"
className="w-full resize-none rounded-2xl border bg-transparent px-5 py-4 transition hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/30"
/>

</motion.div>



<div className="text-center">

<button
disabled={loading}
className="relative inline-flex items-center gap-2 rounded-full border border-primary px-10 py-4 text-sm font-medium text-primary overflow-hidden transition-all duration-300 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.35)] disabled:opacity-60"
>

<span className="relative z-10 flex items-center gap-2">

<Send size={16}/>

{loading?"Sending…":"Send message"}

</span>

<span className="absolute inset-0 bg-primary translate-y-full hover:translate-y-0 transition-transform duration-300"/>

</button>

</div>



{status==="success" && (

<motion.div

initial={{opacity:0,y:10}}

animate={{opacity:1,y:0}}

className="mx-auto flex w-fit items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-6 py-3 text-sm text-primary shadow-lg backdrop-blur-md"

>

<CheckCircle2 size={18}/>

Message sent ✓ We&apos;ll get back to you soon.

</motion.div>

)}



{status==="error" && (

<p className="text-center text-sm text-red-500">

Failed to send message.

</p>

)}


</motion.form>

</motion.div>

</section>

  );

}