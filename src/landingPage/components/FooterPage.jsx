import { Footer } from "flowbite-react";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";
import * as cc from "../../cloudinaryConfig";

export default function FooterLands (){
    const logoImage = new CloudinaryImage(cc.directory.public + "LogoKKN", {
        cloudName: cc.nameMatthew,
      }).resize(fill().width(96).height(96));
    
      const logoImage1 = new CloudinaryImage(cc.directory.public + "LogoKKN1", {
        cloudName: cc.nameMatthew,
      }).resize(fill().width(96).height(96));
    
      const logoImage2 = new CloudinaryImage(cc.directory.public + "LogoAtmaJaya", {
        cloudName: cc.nameMatthew,
      }).resize(fill().width(96).height(96));

    return(
        <footer className="bg-blue-200 dark:bg-blue-200">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <a href="" className="text-2xl font-semibold flex items-center space-x-3">
                            <AdvancedImage
                                cldImg={logoImage2}
                                className="inline-block w-10 items-center"
                            />
                            <AdvancedImage
                                cldImg={logoImage}
                                className="inline-block w-10 items-center"
                            />
                            <AdvancedImage
                                cldImg={logoImage1}
                                className="inline-block w-10 items-center"
                            />
                            <span className="text-[263238] text-black">
                                PADUKUHAN PUDAK    
                            </span>
                        </a>
                    </div>
                    <div className="flex justify-between w-full md:w-auto">
                        <div className="mr-auto md:mr-8">
                            <h2 className="mb-6 text-sm font-semibold text-black uppercase dark:text-black">Data</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="" className="hover:underline">Github</a>
                                </li>
                                <li>
                                    <a href="" className="hover:underline">Maps</a>
                                </li>
                            </ul>
                        </div>
                        <div className="ml-auto">
                            <h2 className="mb-6 text-sm font-semibold text-black uppercase dark:text-white">Informasi</h2>
                            <ul className="text-gray-500 dark:text-gray-300 font-medium">
                                <li className="mb-4">
                                    <a href="" className="hover:underline">Instagram</a>
                                </li>
                                <li>
                                    <a href="" className="hover:underline">Whatsapp</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-black sm:mx-auto dark:border-black lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Padukuhan Pudak™</a>. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    )
}
