function ContactUs() {
    return (
        <div>
            <div className="bg-primary-dark-300">
                <div className="py-20 lg:py-32 px-2 mx-10">
                    <div className="text-center">
                        <h3>Accelerate Your Business Growth</h3>
                        <p className="text-primary-gray my-10 lg:text-lg ">
                            FramerBite supplies the key components for assembling
                            <br className="hidden lg:block" />a top-tier website tailored to your SaaS needs.
                        </p>
                    </div>

                    <form action="" method="post">
                        <div className="mx-auto w-full lg:w-1/2 lg:mx-auto py-1 px-4 flex lg:gap-2 justify-between items-center border-2 border-primary-dark-100 bg-primary-dark-200 rounded-full">
                            <input type="email" name="email" id="email" placeholder="Email" className="block w-2/3 lg:w-2/3 px-6 text-white py-2 rounded-full bg-primary-dark-200 focus:border-0" />
                            <button className="w-max lg:w-1/3 py-3 px-6 lg:py-4 lg:px-8 block rounded-full bg-primary-brand text-white my-2 text-sm">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
