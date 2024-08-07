import Button from "components/HTML/Button"

const Contact = () => {
  return (
    <section id="contact" className="max-w-2xl text-center mx-auto mb-28 fade-in">
        <h2 className="block font-monts regular-16 text-green mb-5">
            <span className="num-headings">04.</span>
            Want to collaborate?
        </h2>
        <h3 className="contact-heading text-lightest-slate font-semibold mb-2.5">
            Get In Touch
        </h3>
        <p className="text-pretty mb-12">
            I’m currently looking for any new opportunities in Full-Stack Development and Data Analytics &
            my inbox is always open. Whether you have a question or just want to say hi,
            I’ll try my best to get back to you!
        </p>
        <a href="mailto:sohamghosh3210@gmail.com" target="_blank" className="size-full">
            <Button className="contact-btn">
                Say Hello &#128513;
            </Button>
        </a>
    </section>
  )
}

export default Contact