import { Separator } from "@/components/ui/separator";
import CarTextImg from "@/assets/cartextimg.svg";

const Footer = () => {
  return (
    <footer className="w-full z-50  bg-white px-10 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={CarTextImg} alt="Crent" height={28} />
          </div>
          <p className="text-sm text-gray-500 leading-6 max-w-xs">
            Our vision is to provide convenience
            <br />
            and help increase your sales business.
          </p>
        </div>

        {/* About */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-4">
            About
          </h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li>How it works</li>
            <li>Featured</li>
            <li>Partnership</li>
            <li>Business Relation</li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-4">
            Community
          </h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li>Events</li>
            <li>Blog</li>
            <li>Podcast</li>
            <li>Invite a friend</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-4">
            Socials
          </h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li>Discord</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
          </ul>
        </div>

      </div>

      {/* Divider (shadcn) */}
      <div className="max-w-7xl mx-auto my-10">
        <Separator />
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>©2025 CRENT. All rights reserved</p>

        <div className="flex gap-6">
          <span>Privacy & Policy</span>
          <span>Terms & Condition</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
