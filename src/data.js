import HeroImage from "/assets/gwej.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/tailwind.png";
import Tools4 from "/assets/tools/bootstrap.png";
import Tools5 from "/assets/tools/js.png";
import Tools6 from "/assets/tools/github.png";
import Tools7 from "/assets/tools/laravel.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 4,
    gambar: Tools3,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools4,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools5,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 8,
    gambar: Tools6,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 8,
    gambar: Tools7,
    nama: "Laravel",
    ket: "Framework",
    dad: "800",
  },
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.jpg";
import Proyek3 from "/assets/proyek/proyek3.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Aplikasi Kasir Berbasis VBA",
    desk: "Aplikasi kasir sederhana yang dibuat menggunakan VBA dan terintegrasi dengan database MySQL ini memiliki fitur login, memungkinkan pengguna untuk melakukan transaksi penjualan, mengelola stok barang, mencetak struk, serta menghasilkan laporan penjualan.",
    tools: ["Ms.Excel", "VBA", "OBCD", "MySQL"],
    dad: "200",
    link: "https://github.com/Tamaaa1/Aplikasi-Kasir-VBA",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Web Kasir Sederhana Menggunakan Laravel",
    desk: "Web kasir sederhana yang, yang memiliki 2 aktor admnin dan kasir yang dimana tiap aktor memiliki fungsi masing memungkinkan pengguna untuk melakukan transaksi penjualan, mengelola stok barang, mencetak struk dan menghasilkan laporan penjualan.",
    tools: ["Laravel", "Bootstrap", "Livewire", "ImportExcel"],
    dad: "300",
    link: "https://github.com/Tamaaa1/laravel_kasir",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "E-Commerce dengan Multi-Role (Admin dan Pelanggan) Berbasis Web ",
    desk: "E-Commerce dengan multi-role (admin dan pelanggan) berbasis web yang memungkinkan pengguna untuk melakukan transaksi pembelian, mengelola produk, kategori, dan keranjang belanja.",
    tools: ["PHP Native", "CSS", "JavaScript", "Bootstrap"],
    dad: "400",
    link:"https://github.com/Tamaaa1/PHPOOP",
  },
];
