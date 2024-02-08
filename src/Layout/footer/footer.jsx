import youtube from "../../img/youtube.png";
import twiter from "../../img/twitter.png";
import instagrem from "../../img/instagram.png";
import facebook from "../../img/facebook.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <>
      <div className="  mx-auto p-5 mb-20">
        <div className="flex gap-5 cursor-pointer ">
          <Image width={24} height={20} src={facebook} alt="facebook" />
          <Image width={24} height={20} src={instagrem} alt="instagrem" />
          <Image width={24} height={20} src={twiter} alt="twiter" />
          <Image width={24} height={20} src={youtube} alt="youtube" />
        </div>
        <div className="flex justify-between">
          <div>
            <h4 className="font-normal text-sm leading-4 text-gray-400 mt-5 cursor-pointer">
              Seslendirme ve Alt Yazı
            </h4>
            <h4 className="font-normal text-sm leading-4 text-gray-400 mt-5 cursor-pointer">
              Medya Merkezi
            </h4>
            <h4 className="font-normal text-sm leading-4 text-gray-400 mt-5 cursor-pointer">
              Gizlilik
            </h4>
            <h4 className="font-normal text-sm leading-4 text-gray-400 mt-5 cursor-pointer">
              Bize Ulaşın
            </h4>
          </div>
          <div>
            <h4 className="font-normal text-sm leading-4 text-gray-400 mt-5 cursor-pointer">
              Sesli Betimleme
            </h4>
            <h4 className="font-normal text-sm leading-4 text-gray-400 mt-5 cursor-pointer">
              Yatırımcı İlişkileri
            </h4>
            <h4 className="font-normal text-sm leading-4 text-gray-400 mt-5 cursor-pointer">
              Yasal Hükümler
            </h4>
          </div>
          <div>
            <h4 className="font-normal text-sm leading-4 text-gray-400 mt-5 cursor-pointer">
              Yardım Merkezi
            </h4>
            <h4 className="font-normal text-sm leading-4 text-gray-400 mt-5 cursor-pointer">
              İş İmkanları
            </h4>
            <h4 className="font-normal text-sm leading-4 text-gray-400 mt-5 cursor-pointer">
              Çerez Tercihleri
            </h4>
          </div>
          <div>
            <h4 className="font-normal text-sm leading-4 text-gray-400 mt-5 cursor-pointer">
              Hediye Kartları
            </h4>
            <h4 className="font-normal text-sm leading-4 text-gray-400 mt-5 cursor-pointer">
              Kullanım Koşulları
            </h4>
            <h4 className="font-normal text-sm leading-4 text-gray-400 mt-5 cursor-pointer">
              Kurumsal Bilgiler
            </h4>
          </div>
        </div>
        <button className="border border-gray-400 p-2 font-normal text-sm leading-4 text-gray-400 mt-5 mb-5">
          Hizmet Kodu
        </button>
        <p className="font-normal text-sm leading-4 text-gray-400 mt-5 cursor-pointer pb-7">
          © 1997-2021 Netflix, Inc. i-062d573a0ee099242
        </p>
      </div>
    </>
  );
};
