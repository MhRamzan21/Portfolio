import { PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
function ContactMe() {
    // const {register, handleSubmit } = useForm<Inputs>();
    const SubmitHandler = (formData) => (
        window.location.href = `mailto:mhmd.ramzan220@gmail?subject=${formData.subject}&body=hi, my name is ${formData.name}, ${formData.message}, ${formData.email}`
    )


  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl text-center font-semibold">
          I have got just what you need.{" "}
          <span className="decoration-[#f7ab0a]/50 underline">Lets Talk.</span>{" "}
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse"/>
            <p className="text-2xl">+923478452902</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse"/>
            <p className="text-2xl">123 Model Town Lahore</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse"/>
            <p className="text-2xl">mhmd.ramzan220@gmail.com</p>
          </div>
        </div>

        <form onSubmit={SubmitHandler} className="flex flex-col space-y-2 w-fit mx-auto">
            <div className="flex space-x-2">
                <input placeholder="Name" className="contactInput" type="text" />
                <input placeholder="Email" className="contactInput" type="email" />
            </div>

            <input placeholder="Subject" className="contactInput" type="text" />
            <textarea placeholder="Message" className="contactInput" />
            <button className="bg-[#f7ab0a] py-5 rounded-md text-black font-bold">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
