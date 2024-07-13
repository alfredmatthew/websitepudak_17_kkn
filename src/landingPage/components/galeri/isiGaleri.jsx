import React from 'react';
import { AdvancedImage } from "@cloudinary/react";
import { CloudinaryImage } from "@cloudinary/url-gen";
import * as cc from "../../../cloudinaryConfig";

const IsiGaleris = () => {
    const Image1 = new CloudinaryImage(cc.directory.public + "Galeri1", {
        cloudName: cc.nameMatthew,
    });

    const Image2 = new CloudinaryImage(cc.directory.public + "Galeri2", {
        cloudName: cc.nameMatthew,
    });

    const Image3 = new CloudinaryImage(cc.directory.public + "Galeri3", {
        cloudName: cc.nameMatthew,
    });

    const Image4 = new CloudinaryImage(cc.directory.public + "Galeri4", {
        cloudName: cc.nameMatthew,
    });

    const Image5 = new CloudinaryImage(cc.directory.public + "Galeri5", {
        cloudName: cc.nameMatthew,
    });

    const Image6 = new CloudinaryImage(cc.directory.public + "Galeri6", {
        cloudName: cc.nameMatthew,
    });

    const Image7 = new CloudinaryImage(cc.directory.public + "Galeri7", {
        cloudName: cc.nameMatthew,
    });

    const Image8 = new CloudinaryImage(cc.directory.public + "Galeri8", {
        cloudName: cc.nameMatthew,
    });

    const Image9 = new CloudinaryImage(cc.directory.public + "Galeri9", {
        cloudName: cc.nameMatthew,
    });

    const Image10 = new CloudinaryImage(cc.directory.public + "Galeri10", {
        cloudName: cc.nameMatthew,
    });

    const Image11 = new CloudinaryImage(cc.directory.public + "Galeri11", {
        cloudName: cc.nameMatthew,
    });

    const Image12 = new CloudinaryImage(cc.directory.public + "Galeri12", {
        cloudName: cc.nameMatthew,
    });

    const Image13 = new CloudinaryImage(cc.directory.public + "Galeri13", {
        cloudName: cc.nameMatthew,
    });

    const Image14 = new CloudinaryImage(cc.directory.public + "Galeri14", {
        cloudName: cc.nameMatthew,
    });

    const Image15 = new CloudinaryImage(cc.directory.public + "Galeri15", {
        cloudName: cc.nameMatthew,
    });

    const Image16 = new CloudinaryImage(cc.directory.public + "Galeri16", {
        cloudName: cc.nameMatthew,
    });

    const Image17 = new CloudinaryImage(cc.directory.public + "Galeri17", {
        cloudName: cc.nameMatthew,
    });

    const Image18 = new CloudinaryImage(cc.directory.public + "Galeri20", {
        cloudName: cc.nameMatthew,
    });

    const Image19 = new CloudinaryImage(cc.directory.public + "Galeri21", {
        cloudName: cc.nameMatthew,
    });

    const jenisProduk = [
        {
            id: 1,
            title: "Padukuhan Pudak",
            description: "Pemandangan Padukuhan Pudak yang mempesona dengan alam yang asri dan suasana yang tenang. Tempat ini menawarkan keindahan yang alami dan memikat.",
            image: Image1
        },
        {
            id: 2,
            title: "Rumah Bapak Dukuh",
            description: "Rumah Bapak Dukuh yang sederhana namun penuh dengan kehangatan dan kebersamaan, menjadi pusat komunitas di Padukuhan Pudak.",
            image: Image2
        },
        {
            id: 3,
            title: "Aktivitas #1",
            description: "Dinamika keseharian warga pudak dalam mengawali hari",
            image: Image3
        },
        {
            id: 4,
            title: "Lapangan Voli",
            description: "Lapangan voli yang sering digunakan oleh warga untuk berolahraga dan berkumpul, menjadi pusat aktivitas fisik dan rekreasi.",
            image: Image4
        },
        {
            id: 5,
            title: "Padukuhan Pudak",
            description: "Sudut lain dari Padukuhan Pudak yang menunjukkan keindahan dan ketenangan alam serta keseharian warga yang harmonis.",
            image: Image5
        },
        {
            id: 6,
            title: "Balai Padukuhan",
            description: "Balai Padukuhan yang menjadi tempat berkumpulnya warga untuk berbagai kegiatan sosial dan acara adat, penuh dengan sejarah dan budaya.",
            image: Image6
        },
        {
            id: 7,
            title: "PAUD",
            description: "Gedung PAUD yang ceria dan penuh warna, tempat anak-anak Padukuhan Pudak mendapatkan pendidikan awal yang baik.",
            image: Image7
        },
        {
            id: 8,
            title: "Aktivitas #2",
            description: "Rumah di Padukuhan Pudak yang menjadi bagian penting dari komunitas lokal.",
            image: Image8
        },
        {
            id: 9,
            title: "Aktivitas #3",
            description: "Sebuah Aktivitas umum di Padukuhan Pudak",
            image: Image9
        },
        {
            id: 10,
            title: "Pos Ronda RT 2",
            description: "Pos ronda di RT 2, tempat warga berjaga dan menjaga keamanan lingkungan, simbol dari kepedulian dan tanggung jawab sosial.",
            image: Image10
        },
        {
            id: 11,
            title: "Karawitan",
            description: "Peralatan musik karawitan seperti gamelan, gong, dan saron yang digunakan oleh grup musik tradisional Padukuhan Pudak untuk melestarikan budaya lokal.",
            image: Image11
        },
        {
            id: 12,
            title: "Pudak #1",
            description: "Bagian dari Padukuhan Pudak yang menunjukkan keindahan alam dan kehidupan warga yang harmonis dan damai.",
            image: Image12
        },
        {
            id: 13,
            title: "Masjid AN-NUR",
            description: "Masjid AN-NUR, pusat spiritual dan tempat ibadah warga Padukuhan Pudak, berdiri megah dengan arsitektur yang indah.",
            image: Image13
        },
        {
            id: 14,
            title: "Aktivitas #4",
            description: "Sebuah rumah di Padukuhan Pudak yang menjadi tempat tinggal keluarga lokal, mencerminkan kehidupan sehari-hari yang tenang dan nyaman.",
            image: Image14
        },
        {
            id: 15,
            title: "Pos Ronda RT 1",
            description: "Pos ronda di RT 1, tempat strategis untuk warga berjaga dan berkumpul, simbol keamanan dan kerjasama masyarakat.",
            image: Image15
        },
        {
            id: 16,
            title: "Post Ronda RT 3",
            description: "Pos ronda di RT 3, bagian dari sistem keamanan lokal yang dijaga dengan baik oleh warga, mencerminkan rasa tanggung jawab dan solidaritas.",
            image: Image16
        },
        {
            id: 17,
            title: "Senam #1",
            description: "Warga Padukuhan Pudak tengah melakukan senam bersama, memperlihatkan kebersamaan dan semangat untuk menjaga kesehatan.",
            image: Image17
        },
        {
            id: 18,
            title: "Kerja Bakti",
            description: "Warga Padukuhan Pudak tengah melakukan kerja bakti, menunjukkan semangat gotong royong dan kebersamaan dalam menjaga kebersihan lingkungan.",
            image: Image18
        },
        {
            id: 19,
            title: "Senam #2",
            description: "Sesi senam lainnya di Padukuhan Pudak, menunjukkan semangat warga dalam menjaga kesehatan dan kebersamaan.",
            image: Image19
        },
    ];

    return (
        <div className='bg-gray-300'>
            <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
                {/* Judul */}
                <div className="mt-20 md:w-1/2 mx-auto text-center">
                    <h2 className="text-4xl text-neutralDGrey font-extrabold mb-3">Temukan <span className="text-brandPrimary leading-snug">Keindahan</span> dan <span className="text-brandPrimary leading-snug">Kebudayaan</span> di Padukuhan Pudak</h2>
                    <p className="text-gray mt-6">Mari jelajahi keindahan alam, aktivitas sehari-hari, ekonomi, dan kebudayaan yang khas di Padukuhan Pudak, Desa Jepitu, Kecamatan Girisubo, Kabupaten Gunungkidul.</p>
                </div>

                {/* Kartu */}
                <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
                    {jenisProduk.map((produk) => (
                        <div 
                            key={produk.id} 
                            className='p-6 bg-green-100 text-center rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-solid border-brown-500 transform hover:-translate-y-1 hover:scale-105 flex flex-col justify-between'>
                            <AdvancedImage cldImg={produk.image} className="mb-4 rounded-lg mx-auto" />
                            <div className="flex-grow">
                                <h4 className="text-2xl font-bold text-neutralDGrey mb-2">{produk.title}</h4>
                                <p className="text-sm text-neutralGrey font-light">{produk.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default IsiGaleris;
