const currentDate = new Date();
const year = currentDate.getFullYear();

const Footer = () => {
  return (
    <div className="container mx-auto bg-[#e6e6e6] flex justify-between p-5 mt-5 top-0">
      <p className="text-sm">© PSR {year}. Hak Cipta Dilindungi</p>
      <p className="text-sm">Negara: Indonesia</p>
    </div>
  );
};

export default Footer;
