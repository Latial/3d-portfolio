import {useState, useRef} from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'
import {styles} from '../styles'
import {EarthCanvas} from './canvas'
import {SectionWrapper} from '../hoc'
import {slideIn} from "../utils/motion";
import {Link} from 'react-router-dom'
import {githubIcon, linkedIn} from '../assets'
const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name : '',
    email : '',
    message : ''
  })
  const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;
    
        setForm({
            ...form,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs
            .send(
                'service_2iur0jb',
                'template_wn0sqyq',
                {
                    from_name: form.name,
                    to_name: "Aleksandar Simic",
                    from_email: form.email,
                    to_email: "asimicporfoliocontact@gmail.com",
                    message: form.message,
                },
                'lizsQo-EY0OBqdrrp'
            )
            .then(
                () => {
                    setLoading(false);
                    alert("Thank you. I will get back to you as soon as possible.");

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };
  return (
    <div className= "xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
            variants={slideIn('left', 'tween', 0.2, 1)}
            className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
            <p className={styles.sectionSubText}>Get in touch</p>
            <h3 className={styles.sectionHeadText}>Contact.</h3>
            <div className="socials flex flex-row gap-2">
                <Link to="https://github.com/Latial">
                    <img src={githubIcon} alt="Github Icon"/>
                </Link>
                <Link
                    to="https://www.linkedin.com/in/aleksandar-simic-sd?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                    <img src={linkedIn} alt="LinkedIn Icon"/>
                </Link>
            </div>
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col mt-12 gap-8"
            >
                <label className="flex flex-col">
                    <span className="text-white font-medium mb-4">Your name</span>
                    <input type="text" name="name" value={form.name} onChange={handleChange}
                           placeholder="Whats your name"
                           className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"/>
                </label>
                <label className="flex flex-col">
                    <span className="text-white font-medium mb-4">Your email</span>
                    <input type="email" name="email" value={form.email} onChange={handleChange}
                           placeholder="Whats your email"
                           className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"/>
                </label>
                <label className="flex flex-col">
                    <span className="text-white font-medium mb-4">Your message</span>
                    <textarea rows="7" name="message" value={form.message} onChange={handleChange}
                              placeholder="What do you want to say"
                              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"/>
                </label>
                <motion.button
                    whileHover={{
                        scale: 1.2,
                        transition: {duration: 1},
                    }}
                    whileTap={{scale: 0.9}}
                    type="submit"
                    className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
                    {loading ? 'Sending...' : "Send"}
                </motion.button>
            </form>
        </motion.div>
        <motion.div
            variants={slideIn('right', 'tween', 0.2, 1)}
            className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
            <EarthCanvas/>
        </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")