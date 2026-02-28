import nodemailer from "nodemailer";
import { NextResponse } from "next/server";


const transporter = nodemailer.createTransport({

host:"smtp.gmail.com",

port:465,

secure:true,

auth:{

user:process.env.EMAIL_USER,

pass:process.env.EMAIL_PASS,

},

pool:true,
maxConnections:5,
maxMessages:100,

});


export async function POST(req:Request){

try{

const {name,email,subject,message}=await req.json();


if(!name||!email||!message){

return NextResponse.json(
{error:"Missing fields"},
{status:400}
);

}


const finalSubject=
subject?.trim()||
"New inquiry from portfolio website";



const mailToYou=transporter.sendMail({

from:`"Portfolio – Varun UD" <${process.env.EMAIL_USER}>`,

to:process.env.EMAIL_TO,

replyTo:email,

subject:finalSubject,

html:`

<b>Name:</b> ${name}<br/>
<b>Email:</b> ${email}<br/>
<b>Subject:</b> ${finalSubject}<br/><br/>

${message.replace(/\n/g,"<br/>")}

`

});


const autoReply=transporter.sendMail({

from:`"Varun UD" <${process.env.EMAIL_USER}>`,

to:email,

subject:"Message received",

html:`

Hi ${name},<br/><br/>

Thanks for reaching out.<br/><br/>

Your message has been received and I will review it shortly.<br/><br/>

<div style="
background:#f3f3f3;
padding:12px;
border-radius:6px;
">

${message.replace(/\n/g,"<br/>")}

</div>

<br/>

Typical response time: within 24 hours<br/><br/>

—<br/>
Varun UD<br/>
Full-Stack Engineer

`

});


await Promise.all([
mailToYou,
autoReply
]);


return NextResponse.json({
success:true
});

}
catch(err){

console.error(err);

return NextResponse.json(
{error:"Send failed"},
{status:500}
);

}
}