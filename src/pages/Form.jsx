import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const Form = () => {

    const options = ["Student", "Working Professional", "Beginner", "Film / Media Background"];
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fname: "",
        phone: "",
        email: "",
        background: "Student"
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const bgChange = (item) => {
        setFormData({ ...formData, background: item })
    }

    const validate = () => {
        if (!formData.fname.trim()) return " Name is Required";
        if (!/^[6-9]\d{9}$/.test(formData.phone))
            return "Enter valid mobile number";
        if (!/^\S+@\S+\.\S+$/.test(formData.email))
            return "Enter valid email";
        if (!formData.background) return "Please select your background";
        return null;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const error = validate();
        if (error) {
            toast.error(error)
            return;
        }
        setLoading(true);

        try {
            const res = await fetch("https://script.google.com/macros/s/AKfycbxoMf4JpEU9NHYQfqFpFDZIsvt-qPnDsnOVvJnsp8I-4wKz6XzFkmkfJd1hIcd5-aNC7w/exec", {
                method: "POST",
                headers: { "Content-Type": "text/plain;charset=utf-8" },
                body: JSON.stringify({ ...formData }),
            })

            const result = await res.json()
            if (result.success) {
                toast.success("Form Submitted Successfully !")
                setFormData({ fname: "", phone: "", email: "", background: "Student" })
            }

        }
        catch (err) {
            toast.error("Somethig went Wrong ");
            console.log(err)
        }
        finally {
            setLoading(false)
        }

    }



    return (
        <>
            <Navbar />

            <section className="relative bg-[#141414] py-24 overflow-hidden xl:px-20 lg:px-15 md:px-10 px-5">
                {/* Background Glow */}
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-lime-400/20 blur-[160px]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-lime-400/10 blur-[160px]" />
                <div className='text-center px-5 my-10'>
                    <p className='text-title font-semibold uppercase'>Kick start you vfx career</p>
                    <h1 className='text-white text-3xl lg:text-4xl xl:text-5xl'>Talk to a VFX Career Advisor</h1>
                    <p className='text-para'>Get personalized guidance on the right VFX path, skills, and next steps.</p>
                </div>

                <div className="relative px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT CARD */}
                    <div className="relative rounded-3xl overflow-hidden h-full">
                        <div className="absolute inset-0 bg-linear-to-br from-title/80 via-title to-black" />
                        <div className="absolute inset-0 bg-black/50" />

                        <div className="relative h-full flex items-end p-10">
                            <h2 className="md:text-4xl text-3xl lg:text-5xl font-bold text-white leading-tight">
                                Your Vision. <br />
                                Your Skills. <br />
                                <span className="text-white/80">Your VFX Career.</span>
                            </h2>
                        </div>
                    </div>

                    <div>
                        <form className="space-y-3" onSubmit={handleSubmit} >
                            {/* Input */}
                            <div>
                                <label className="text-sm text-white mb-2 block">Full Name</label>
                                <input
                                    type="text"
                                    name="fname"
                                    onChange={handleChange}
                                    value={formData.fname}
                                    placeholder="Enter your name"

                                    className="w-full rounded-xl bg-[#2a2a2a] px-5 py-3 text-white placeholder:text-gray-500 outline-none focus:ring focus:ring-title"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-white mb-2 block">Mobile Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    onChange={handleChange}
                                    value={formData.phone}
                                    placeholder="Enter your phone number"

                                    className="w-full rounded-xl bg-[#2a2a2a] px-5 py-3 text-white placeholder:text-gray-500 outline-none focus:ring focus:ring-title"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-white mb-2 block">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    value={formData.email}
                                    placeholder="Enter your email"

                                    className="w-full rounded-xl bg-[#2a2a2a] px-5 py-3 text-white placeholder:text-gray-500 outline-none focus:ring focus:ring-title"
                                />
                            </div>

                            {/* Background Selector */}
                            <div>
                                <label className="text-sm text-white mb-3 block">Your Background</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {options.map((item) => (
                                        <button
                                            type="button"
                                            key={item}
                                            onClick={() => bgChange(item)}
                                            className={`rounded-xl relative overflow-hidden px-4 py-3 text-sm bg-[#2a2a2a] transition-all duration-100 ${formData.background === item
                                                ? "border-title border text-title font-semibold"
                                                : " text-gray-400 border border-transparent"
                                                }`}
                                        >
                                            {item}
                                            {formData.background === item &&
                                                <div className="absolute -top-5 -right-3 bg-title w-10 h-10 rounded-full blur-lg"></div>}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full mt-4 rounded-xl bg-title py-4 text-black font-bold hover:bg-title/70 cursor-pointer transition-all duration-300"
                            >
                                {loading ? "Submitting..." : "Book Free Career Consultation"}

                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <ToastContainer hideProgressBar theme="colored" closeOnClick autoClose={4000}/>
            <Footer />
        </>
    );
};

export default Form;
