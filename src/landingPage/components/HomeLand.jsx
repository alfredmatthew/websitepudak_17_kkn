import React from 'react';
import { Carousel } from "flowbite-react";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";
import * as cc from "../../cloudinaryConfig";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const ImageVillagePeople = new CloudinaryImage(cc.directory.public + "Home3", {
        cloudName: cc.nameMatthew,
    }).resize(fill().width(600).height(400));

    const ImageCulture = new CloudinaryImage(cc.directory.public + "Home2", {
        cloudName: cc.nameMatthew,
    }).resize(fill().width(600).height(400));

    const ImageScenery = new CloudinaryImage(cc.directory.public + "Home1", {
        cloudName: cc.nameMatthew,
    }).resize(fill().width(600).height(400));

    const ImageExercise = new CloudinaryImage(cc.directory.public + "SenamPudak", {
        cloudName: cc.nameMatthew,
    }).resize(fill().width(600).height(400));

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/galeri');
    };

    return (
        <div className='bg-gray-300 mt-16 md:mt-0'>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'> 
                <Carousel className='w-full mx-auto' leftControl="⠀" rightControl="⠀" indicators={false}>
                    {/* Village People */}
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        {/* Text */}
                        <div className="md:w-1/2">
                            <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">Selamat Datang di 
                            <span className="text-brandPrimary leading-snug"> Padukuhan Pudak</span></h1>
                            <p className="text-neutralGrey text-base mb-8"> Terletak di Jepitu, Girisubo, Gunungkidul, Padukuhan Pudak dikenal akan keramahan warganya dan suasana yang nyaman serta asri. Jelajahi desa kami yang penuh pesona, di mana setiap sudut menyimpan kehangatan dan keindahan.</p>
                            <button className="btn-primary" onClick={handleClick}>
                                Galeri
                            </button>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <AdvancedImage cldImg={ImageVillagePeople} className="rounded-lg shadow-lg" />
                        </div>
                    </div>

                    {/* Culture */}
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        {/* Text */}
                        <div className="md:w-1/2">
                            <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">Budaya di 
                            <span className="text-brandPrimary leading-snug"> Padukuhan Pudak</span></h1>
                            <p className="text-neutralGrey text-base mb-8"> Temukan kekayaan budaya Padukuhan Pudak dengan beragam tradisi dan kegiatan seperti Karawitan yang menggambarkan jiwa seni dan kebersamaan warga kami. Rasakan suasana budaya yang kental dan meriah di setiap perayaan dan acara desa.</p>
                            <button className="btn-primary" onClick={handleClick}>
                                Galeri
                            </button>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <AdvancedImage cldImg={ImageCulture} className="rounded-lg shadow-lg" />
                        </div>
                    </div>

                    {/* Scenery */}
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        {/* Text */}
                        <div className="md:w-1/2">
                            <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">Keindahan Alam di 
                            <span className="text-brandPrimary leading-snug"> Padukuhan Pudak</span></h1>
                            <p className="text-neutralGrey text-base mb-8"> Nikmati panorama alam yang menakjubkan di Padukuhan Pudak. Dari bukit-bukit hijau hingga arsitektur rumah yang memukau, setiap tempat di desa kami menawarkan pemandangan yang tak terlupakan dan suasana yang damai.</p>
                            <button className="btn-primary" onClick={handleClick}>
                                Galeri
                            </button>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <AdvancedImage cldImg={ImageScenery} className="rounded-lg shadow-lg" />
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default Home;
