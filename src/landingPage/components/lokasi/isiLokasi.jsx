import React from 'react';

const IsiLokasi = () => {
    return (
        <div className='bg-gray-300'>
            <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
                {/* Judul */}
                <div className="mt-20 md:w-1/2 mx-auto text-center">
                    <h2 className="text-4xl text-neutralDGrey font-extrabold mb-3">Lokasi <span className="text-brandPrimary leading-snug"> Padukuhan Pudak</span></h2>
                    <p className="text-gray mt-6">Temukan keindahan dan kehidupan masyarakat di Padukuhan Pudak, Djepitoe, Girisubo, Kabupaten Gunung Kidul. Padukuhan Pudak dikenal dengan suasana pedesaan yang asri dan keramahan penduduknya.</p>
                </div>

                {/* Google Map */}
                <div className="mt-5">
                    <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.157060717939!2d110.728412215332!3d-8.140968194182762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bca1c0aebc4f7%3A0xa3a3a3a3a3a3a3a3!2sLapangan%20Voly%20Bunglon%20Muda!5e0!3m2!1sen!2sid!4v1623021352147!5m2!1sen!2sid"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Lapangan Voly Bunglon Muda Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IsiLokasi;
