import React from 'react';
import { AdvancedImage } from "@cloudinary/react";
import { CloudinaryImage } from "@cloudinary/url-gen";
import * as cc from "../../cloudinaryConfig";

const ProfileCards = () => {
    const Image1 = new CloudinaryImage(cc.directory.public + "Org1", {
        cloudName: cc.nameMatthew,
    });

    const Image2 = new CloudinaryImage(cc.directory.public + "Org2", {
        cloudName: cc.nameMatthew,
    });

    const Image3 = new CloudinaryImage(cc.directory.public + "Org7", {
        cloudName: cc.nameMatthew,
    });

    const organizations = [
        {
            id: 1,
            title: "Karang Taruna",
            description: "Karang Taruna Padukuhan Pudak aktif dalam kegiatan sosial dan kepemudaan. Kami berkomitmen untuk membangun generasi muda yang berintegritas dan berdaya saing melalui berbagai kegiatan positif dan kreatif.",
            image: Image1
        },
        {
            id: 2,
            title: "Perkumpulan PKK",
            description: "Perkumpulan PKK Padukuhan Pudak berfokus pada pemberdayaan perempuan dan keluarga. Melalui program-program edukasi, kesehatan, dan ekonomi, kami berusaha menciptakan keluarga yang sejahtera dan mandiri.",
            image: Image2
        },
        {
            id: 3,
            title: "Karawitan",
            description: "Grup Karawitan Padukuhan Pudak melestarikan seni musik tradisional Jawa. Dengan iringan gamelan dan suara merdu sinden, kami mempersembahkan kesenian yang sarat akan nilai budaya dan sejarah.",
            image: Image3
        },
    ];

    return (
        <div className='bg-gray-300'>
            <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
                {/* Title */}
                <div className="mt-20 md:w-1/2 mx-auto text-center">
                    <h2 className="text-4xl text-neutralDGrey font-extrabold mb-3">Organisasi <span className="text-brandPrimary leading-snug">Padukuhan Pudak</span></h2>
                    <p className="text-gray mt-6">Temui berbagai organisasi yang berperan penting dalam memajukan dan melestarikan budaya serta kesejahteraan Padukuhan Pudak.</p>
                </div>

                {/* Cards */}
                <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
                    {organizations.map((organization) => (
                        <div 
                            key={organization.id} 
                            className='p-6 bg-green-100 text-center rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-solid border-brown-500 transform hover:-translate-y-1 hover:scale-105 flex flex-col justify-between'>
                            <AdvancedImage cldImg={organization.image} className="mb-4 rounded-lg mx-auto" />
                            <div className="flex-grow">
                                <h4 className="text-2xl font-bold text-neutralDGrey mb-2">{organization.title}</h4>
                                <p className="text-sm text-neutralGrey font-light">{organization.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProfileCards;
