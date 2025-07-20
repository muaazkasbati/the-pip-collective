import Image from 'next/image';
import Button from './elements/Button';

export default function FirstSection() {
    return (
        <>
            <section className="pt-16">
                <div className="text-white relative container max-w-7xl mx-auto">
                    <div className="relative z-10 text-center">
                        <h1 className="text-4xl md:text-[32px] leading-10 font-medium mb-4 bg-gradient-to-r [background-image:linear-gradient(to_right,_white_30%,_#A200F5_80%)] bg-clip-text text-transparent">
                            Trade Like a Hedge Fund
                        </h1>


                        <h2 className="text-2xl md:text-[64px] leading-18 mb-6">
                            Powered by Proprietary Quant Logic
                            <br />
                            - The Same Logic Hedge Funds Use
                        </h2>
                        <p className="text-[22px] font-light mb-8 leading-8">
                            <span className="font-semibold text-[24px]">No martingale. No grid. No ridiculous drawdowns.</span> <span className="font-bold text-[28px]">No BS.</span> <br />Just simple, automated trading - built for live accounts & prop firm success.
                        </p>
                        <div className="flex flex-col mb-4 max-w-lg mx-auto">
                            <Button link href="#">Unlock Free Lifetime Access</Button>
                        </div>
                        <p className="text-[32px] font-extralight mb-8">& Earn $200 just for joining us!</p>
                    </div>
                </div>
                <div className="relative py-12 mt-24">
                    <div className="text-white relative container max-w-7xl mx-auto text-center z-10">
                        <h3 className="text-2xl md:text-[48px] font-semibold mb-4">
                            Trade Smarter. Not Harder.
                        </h3>
                        <p className="text-[24px] mb-8 text-[#898989]">
                            One intelligent trade at a time. <br />
                            Not 10 over-leveraged guesses.
                        </p>
                        <div className="flex flex-col mb-4 max-w-lg mx-auto">
                            <Button link href="#">Before You Blow Another Account... WATCH THIS!</Button>
                        </div>
                    </div>
                    <img src="/images/shadow-img.png" alt="" className="w-full h-[200%] object-cover absolute bottom-0" />
                </div>
            </section>
            <section className="pb-16">
                <div className="text-white relative container max-w-7xl mx-auto">
                    <div className="relative z-10 text-center">
                        <div className="w-full max-w-[1000px] h-[550px] rounded-[20px] overflow-hidden relative mx-auto mb-8">
                            <img src="/images/video-thumbnail.jpg" alt="" className="w-full h-full object-cover" />
                            <img src="/images/play-button.png" alt="" className="absolute z-10 left-0 right-0 mx-auto block top-1/3" />
                            <div className="w-full h-[180px] block absolute top-0 bg-gradient-to-b from-black to-transparent"></div>
                            <div className="w-full h-[180px] block absolute bottom-0 bg-gradient-to-b to-black from-transparent"></div>
                        </div>
                        <div className="flex flex-col mb-4 max-w-lg mx-auto">
                            <Button link href="#">Unlock Free Lifetime Access</Button>
                        </div>
                        <p className="text-[40px] mb-8">Join us for FREE and earn $200</p>
                    </div>
                </div>
            </section>

        </>
    );
}