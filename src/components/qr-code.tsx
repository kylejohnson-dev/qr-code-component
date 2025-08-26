import Image from "next/image";

export function QRCode() {
  return (
    <section className="max-w-[320px] h-[499px] bg-white rounded-[20px] space-y-6 p-4 pb-10">
      <div className="rounded-[10px] object-cover overflow-hidden">
        <Image
          src="/image-qr-code.png"
          alt="QR Code"
          width={576}
          height={576}
          priority
        />
      </div>
      <div className="space-y-4 text-center px-4">
        <h1 className="text-slate-900 font-bold text-[22px] leading-[120%] -tracking-[0.2px]">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-slate-500 text-[15px] leading-[140%] -tracking-[0.2px]">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </section>
  );
}
