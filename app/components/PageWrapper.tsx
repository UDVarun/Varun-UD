"use client";

import { useState } from "react";
import Loader from "@/components/loader/Loader";
import { motion } from "framer-motion";

export default function PageWrapper({
children
}:{
children:React.ReactNode
}){

const [loading,setLoading] = useState(true);

return(

<>

{loading && (

<Loader onFinish={()=>setLoading(false)}/>

)}

{!loading && (

<motion.div

initial={{opacity:0,scale:0.98}}
animate={{opacity:1,scale:1}}

transition={{
duration:1,
ease:[0.16,1,0.3,1]
}}

>

{children}

</motion.div>

)}

</>

)

}
