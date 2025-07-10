import DataImage from "./data";
import {listTools, listProyek} from './data';
function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 x:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" />
            <q>Build with purpose, code with heart.🔥</q>
          </div>
          <h1 className="text-4xl/tight font-bold mb-6">Hi, Saya Eka Wiratama</h1>
          <p className="text-base/loose mb-6 opacity-50">Saya mempunyai ketertarikan dalam bidang programming dan infrastruktur jaringan, terutama pada pembuatan website
            dan saya juga memiliki pengalaman dalam instalasi jaringan, seperti instalasi Mikrotik, Router dan Access Point.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="https://shorturl.at/EXXUH" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">
              Download CV <i className="ri-download-line ri-lg"></i></a>
            <a href="#proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i></a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] mt-3 md:ml-auto animate__animated animate__fadeInUp animate__delay-4s" loading="lazy" />
      </div>

      {/* tentang */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-diration="1000" >
        <img src={DataImage.HeroImage} alt="Image"  className="w-12 rounded-md mb-10 sm:hidden" loading="lazy" />
          <p className="text-base/loose mb-10">
            Hi, saya Eka Wiratama, seorang Full Stack Web Developer dengan pengalaman dalam membangun aplikasi web yang fungsional, responsif, dan efisien.
            Selain pengembangan web, saya juga memiliki keahlian di bidang infrastruktur jaringan, termasuk konfigurasi Mikrotik, instalasi jaringan lokal (LAN), 
            dan manajemen jaringan nirkabel (Wi-Fi). Saya berkomitmen untuk memberikan solusi teknologi yang inovatif dan berkualitas tinggi, serta terus belajar dan berkembang dalam bidang ini.
          </p>
      </div>
      <div className="tools mt-32">
        <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-diration="1000">Tools yang dipakai</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-diration="1000" data-aos-delay="300">berikut ini beberapa tools yang biasa saya pakai untuk pembuatan web
        </p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {listTools.map(tool => (
          <div className="group flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800" key={tool.id } data-aos="fade-up" data-aos-diration="1000" data-aos-delay={tool.dad}>
            <img src={tool.gambar} alt="tools" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy" />
            <div>
              <h4 className="font-bold">{tool.nama}</h4>
              <p className="opacity-50">{tool.ket}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
      </div>
      {/* tentang */}

      {/* Proyek */}
        <div className="proyek mt-32 py-10" id="proyek">
          <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-diration="1000" >Proyek</h1>
          <p className="text-base/loose text-center opacity-50"data-aos="fade-up" data-aos-diration="1000" data-aos-delay="300">Berikut ini beberapa proyek yang telah saya buat</p>
          <div className="proyekbox mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listProyek.map(proyek =>(
              <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-diration="1000" data-aos-delay={proyek.dad} >
                <img src={proyek.gambar} alt="proyek image" loading="lazy" />
                <div>
                  <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                  <p className=" text-base/loose mb-4">{proyek.desk}</p>
                  <div className="flex flex-wrap gap-2 ">
                    {proyek.tools.map((tool, index) => (
                      <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <a href={proyek.link} className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600">
                      Lihat
                    </a>
                  </div>
                </div>
                <h1></h1>
              </div>
            ))}
          </div>
        </div>
      {/* Proyek */}

      {/* Kontak */}
        <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
            <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-diration="1000" >
              Kontak
            </h1>
            <p className="text-base/loose text-center opacity-50 mb-10" data-aos="fade-up" data-aos-diration="1000" data-aos-delay="300" >
              Mari terhubung dengan saya
            </p>
            <form action="https://formsubmit.co/ekawiratama164@gmail.com" method="POST" className="bg-zinc-800 sm:p-10 sm:w-fit w-full mx-auto rounded-md"autoComplete="off"data-aos="fade-up" data-aos-diration="1000" data-aos-delay="500">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold">Nama Lengkap</label>
                  <input type="text" name="nama" placeholder="Masukkan Nama..." className="border border-zinc-500 p-2 rounded-md" required/>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold">Email</label>
                  <input type="email" name="email" placeholder="Masukkan Email..." className="border border-zinc-500 p-2 rounded-md" required/>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="pesan" className="font-semibold">Pesan</label>
                  <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan" className="border border-zinc-500 p-2 rounded-md" required></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600">Kirim Pesan</button>
                </div>
              </div>
            </form>
        </div>
      {/* Kontak */}
    </>
  );
}

export default App
