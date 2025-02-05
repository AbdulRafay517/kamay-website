export default function Footer() {
  return (
    <footer className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Contact Us
          </h3>
          <p className="text-gray-300">
            Email: <a href="mailto:contact.kamaysolutions@gmail.com" className="underline">contact.kamaysolutions@gmail.com</a> | Phone: <a href="https://wa.me/message/5ANCCFINFNNDF1" className="underline">+92 316 5002345</a>
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/profile.php?id=61563332233106" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://x.com/KamaySolutions" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/company/kamay-solutions" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/kamaysolutions/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.tiktok.com/@kamay_solutions" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}