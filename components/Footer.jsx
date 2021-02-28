import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";
import TwitterIcon from "./TwitterIcon";

const Footer = () => (
    <footer className="bg-green-200 w-full">
        <div className="px-3 py-4 space-y-6 md:flex md:space-y-0 md:px-6 md:py-8 md:space-x-20">
            <div>
                <h2 className="text-gray-700 uppercase text-xl font-bold tracking-wider">Social</h2>
                <div className="mt-2 flex space-x-2">
                    <FacebookIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                </div>
            </div>
            <div>
                <h2 className="text-gray-700 uppercase text-xl font-bold tracking-wider">Contact Us</h2>
                <address className="text-gray-600">
                    123 Fitness Way <br />
                    Next.js City <br />
                    01111 222 333
                </address>
            </div>
        </div>
    </footer>
)

export default Footer