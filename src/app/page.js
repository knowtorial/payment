// "client side";
"use client";

import Script from "next/script";
import React, { useEffect, useState } from "react";

const Stepper = () => {

  const steps = [
    {
      number: 1,
      title: "User info",
      details: "Step details here",
      color: "blue",
    },
    {
      number: 2,
      title: "Company info",
      details: "Step details here",
      color: "gray",
    },
    {
      number: 3,
      title: "Payment info",
      details: "Step details here",
      color: "gray",
    },
  ];

  return (
    <div className="w-[614px] h-[55px] justify-start items-center gap-[76px] inline-flex">
      <div className="justify-start items-start gap-[78px] flex">
        <div className="w-[94px] h-[45px] relative">
          <div className="w-7 h-7 left-[35px] top-0 absolute">
            <div className="w-7 h-7 left-0 top-0 absolute bg-white rounded-full border border-black" />
            <div className="w-[18.67px] h-[18.67px] left-[4.67px] top-[4.67px] absolute" />
          </div>
          <div className="left-[36px] top-[28px] absolute text-black text-sm font-medium  ">
            Cart
          </div>
          <div className="w-[139px] h-0.5 left-[63px] top-[13px] absolute bg-black" />
        </div>
        <div className="w-[85px] h-[45px] relative">
          <div className="w-7 h-7 left-[30px] top-0 absolute">
            <div className="w-7 h-7 left-0 top-0 absolute bg-white rounded-full border border-black" />
            <div className="w-[18.67px] h-[18.67px] left-[4.67px] top-[4.67px] absolute" />
          </div>
          <div className="left-[14px] top-[28px] absolute text-black text-sm font-medium  ">
            Adresses
          </div>
          <div className="w-[145px] h-0.5 left-[58px] top-[13px] absolute bg-black" />
        </div>
      </div>
      <div className="w-[114px] h-[55px] relative">
        <div className="w-8 h-8 left-[41px] top-[2px] absolute">
          <div className="w-8 h-8 left-0 top-0 absolute bg-white rounded-full border border-black" />
          <div className="w-[21.33px] h-[21.33px] left-[5.33px] top-[5.33px] absolute" />
        </div>
        <div className="left-[23px] top-[36px] absolute text-black text-base  font-semibold  ">
          Payment
        </div>
        <div className="w-[151px] h-0.5 left-[73px] top-[18px] absolute bg-stone-300" />
      </div>
      <div className="w-[91px] h-[45px] relative">
        <div className="w-7 h-7 left-[33.50px] top-0 absolute">
          <div className="w-7 h-7 left-0 top-0 absolute bg-white rounded-full border border-stone-300" />
          <div className="w-[18.67px] h-[18.67px] left-[4.67px] top-[4.67px] absolute" />
        </div>
        <div className="left-[23px] top-[28px] absolute text-zinc-600 text-sm font-light  ">
          Confirm
        </div>
      </div>
    </div>
  );
};



const Payment = () => {

  const [gateway, setGateway] = useState('');
  const [gatewayFetched, setGatewayFetched] = useState(false);

  useEffect(() => {

    const storedGateway = localStorage.getItem('gateway');
    if (storedGateway) {
      setGateway(storedGateway);
      if (storedGateway == 'razor') {
        setGatewayFetched(true);
      }
    }
  }, []);


  useEffect(() => {
    if (gatewayFetched) {
      const Script = document.createElement("script");
      //id should be same as given to form element
      const Form = document.getElementById('donateForm');
      Script.setAttribute('src', 'https://cdn.razorpay.com/static/widget/payment-button.js')
      Script.setAttribute('data-payment_button_id', 'pl_LatgEd6cmU5N1L')
      Script.setAttribute('data-button_text', 'Buy Now')
      Script.setAttribute('data-button_theme', 'brand-color')
      Form.appendChild(Script);
    }
  }, [gatewayFetched])


  return (
    <div className="w-[1132px] h-[425px] justify-start items-start gap-8 inline-flex">
      <div className="flex-col justify-start items-start gap-6 inline-flex">
        <div className="flex-col justify-start items-start flex">
          <div className="h-[258px] bg-white rounded-2xl border border-stone-300 flex-col justify-start items-start flex">
            <div className="self-stretch h-[73px] pt-6 flex-col justify-start items-start gap-6 flex">
              <div className="pl-8 justify-start items-center gap-4 inline-flex">
                <div className="w-6 h-6 relative" />
                <div className="text-black text-base font-medium">
                  Registered cards
                </div>
              </div>
              <div className="self-stretch h-px bg-stone-300" />
            </div>
            <div className="self-stretch h-[185px] flex-col justify-start items-start flex">
              <div className="h-[93px] flex-col justify-start items-start flex">
                <div className="self-stretch h-[93px] px-8 pt-4 flex-col justify-start items-start gap-4 flex">
                  <div className="self-stretch justify-between items-start inline-flex">
                    <div className="flex-col justify-start items-center gap-3 inline-flex">
                      <div className="w-6 h-6 relative">
                        <div className="w-6 h-6 left-0 top-0 absolute bg-emerald-500 rounded-full flex justify-center items-center">
                          <img
                            width="17"
                            height="17"
                            src="https://img.icons8.com/metro/26/ffffff/checkmark.png"
                            alt="checkmark"
                          />
                        </div>
                      </div>
                      <div className="w-6 h-6 relative" />
                    </div>
                    <div className="py-1 flex-col justify-start items-center gap-5 inline-flex">
                      <div className="w-[41px] h-4 text-zinc-600 text-sm font-normal">
                        Bank
                      </div>
                      <div className="w-[111px] h-4 text-center text-black text-base font-medium">
                        HDFC
                      </div>
                    </div>
                    <div className="py-1 flex-col justify-start items-center gap-5 inline-flex">
                      <div className="w-[92px] h-4 text-zinc-600 text-sm font-normal">
                        Last digits
                      </div>
                      <div className="w-[38px] h-4 text-center text-black text-base font-medium">
                        1234
                      </div>
                    </div>
                    <div className="w-[140px] py-1 flex-col justify-start items-center gap-5 inline-flex">
                      <div className="w-[130px] h-4 text-zinc-600 text-sm font-normal">
                        Name on card
                      </div>
                      <div className="w-[140px] h-4 text-center text-black text-base font-medium">
                        Knowtorial
                      </div>
                    </div>
                    <div className="py-1 flex-col justify-start items-center gap-5 inline-flex">
                      <div className="w-[125px] h-4 text-zinc-600 text-sm font-normal">
                        Expiry date
                      </div>
                      <div className="w-[46px] h-4 text-center text-black text-base font-medium">
                        12/34
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-px bg-stone-300" />
                </div>
              </div>
              <div className="h-[92px] flex-col justify-start items-start flex">
                <div className="self-stretch h-[92px] px-8 py-4 flex-col justify-start items-start gap-4 flex">
                  <div className="self-stretch justify-between items-start inline-flex">
                    <div className="flex-col justify-start items-center gap-3 inline-flex">
                      <div className="w-6 h-6 relative">
                        <div className="w-6 h-6 left-0 top-0 absolute bg-white rounded-full border border-stone-300" />
                        <div className="w-4 h-4 left-[4px] top-[4px] absolute" />
                      </div>
                      <div className="w-6 h-6 relative" />
                    </div>
                    <div className="py-1 flex-col justify-start items-center gap-5 inline-flex">
                      <div className="w-[41px] h-4 text-zinc-600 text-sm font-normal">
                        Bank
                      </div>
                      <div className="w-[111px] h-4 text-center text-zinc-600 text-base font-light">
                        PNB
                      </div>
                    </div>
                    <div className="py-1 flex-col justify-start items-center gap-5 inline-flex">
                      <div className="w-[92px] h-4 text-zinc-600 text-sm font-normal">
                        Last digits
                      </div>
                      <div className="w-[38px] h-4 text-center text-zinc-600 text-base font-light">
                        1234
                      </div>
                    </div>
                    <div className="w-[140px] py-1 flex-col justify-start items-center gap-5 inline-flex">
                      <div className="w-[130px] h-4 text-zinc-600 text-sm font-normal">
                        Name on card
                      </div>
                      <div className="w-[140px] h-4 text-center text-zinc-600 text-base font-light">
                        Jane Cooper
                      </div>
                    </div>
                    <div className="py-1 flex-col justify-start items-center gap-5 inline-flex">
                      <div className="w-[125px] h-4 text-zinc-600 text-sm font-normal">
                        Expiry date
                      </div>
                      <div className="w-[46px] h-4 text-center text-zinc-600 text-base font-light">
                        12/34
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start flex">
          <div className="h-[76px] flex-col justify-start items-start gap-8 flex">
            <div className="self-stretch h-[76px] px-8 py-6 rounded-2xl border border-stone-300 flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch justify-start items-center gap-4 inline-flex">
                <div className="w-[145px] justify-start items-center gap-4 flex">
                  <div className="w-6 h-6 relative">
                    <div className="w-6 h-6 left-0 top-0 absolute bg-white rounded-full border border-stone-300" />
                    <div className="w-4 h-4 left-[4px] top-[4px] absolute" />
                  </div>
                  <div className="text-black text-base font-medium whitespace-nowrap">
                    Add new card
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch pb-14 flex-col justify-between items-start inline-flex space-y-5">
        <div className="rounded-lg border border-stone-300 flex-col justify-start items-start flex">
          <div className="px-4 pt-4 flex-col justify-start items-start gap-4 flex">
            <div className="justify-start items-center gap-4 inline-flex">
              <div className="w-6 h-6 relative" />
              <div className="text-black text-base font-medium">
                Shopping Summary
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
              <div className="w-[220px] text-black text-base font-normal">
                Product name
              </div>
              <div className="grow shrink basis-0 h-[19px] pr-2 justify-between items-start flex">
                <div className="text-black text-base font-normal">Portion</div>
                <div className="text-black text-base font-normal">Price</div>
              </div>
            </div>
            <div className="w-[368px] h-px bg-stone-300" />
          </div>
          <div className="flex-col justify-start items-start flex">
            <div className="px-4 py-5 flex-col justify-start items-start gap-4 flex">
              <div className="w-[368px] justify-start items-center gap-4 inline-flex">
                <div className="grow shrink basis-0 h-10 justify-start items-center gap-4 flex">
                  <img
                    className="w-10 h-10 relative rounded-lg border border-stone-300"
                    src="https://via.placeholder.com/40x40"
                  />
                  <div className="grow shrink basis-0 text-black text-base font-normal">
                    Salad
                  </div>
                </div>
                <div className="w-[126px] justify-start items-center gap-10 flex">
                  <div className="text-black text-base font-normal">(x1)</div>
                  <div className="justify-start items-start gap-1 flex">
                    <div className="w-[60px] text-center text-black text-base font-medium">
                      $15,00
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-5 flex-col justify-start items-start gap-4 flex">
              <div className="w-[368px] justify-start items-center gap-4 inline-flex">
                <div className="grow shrink basis-0 h-10 justify-start items-center gap-4 flex">
                  <img
                    className="w-10 h-10 relative rounded-lg border border-stone-300"
                    src="https://via.placeholder.com/40x40"
                  />
                  <div className="grow shrink basis-0 text-black text-base font-normal">
                    Waffle
                  </div>
                </div>
                <div className="w-[126px] justify-start items-center gap-10 flex">
                  <div className="text-black text-base font-normal">(x1)</div>
                  <div className="justify-start items-start gap-1 flex">
                    <div className="w-[60px] text-center text-black text-base font-medium">
                      $20,00
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-4 flex-col justify-start items-end gap-4 flex">
            <div className="w-[400px] h-px bg-stone-300" />
            <div className="pr-4 justify-start items-center gap-1 inline-flex">
              <div className="text-black text-xl font-normal">Total:</div>
              <div className="text-black text-2xl font-medium">$35,00</div>
            </div>
          </div>
        </div>
        <div className="w-[400px] p-4 bg-opacity-80 rounded-lg justify-center items-center gap-2.5 inline-flex">
          {
            gateway === 'razor' ? (<form id="donateForm"></form>)
              : gateway === 'paypal' ? (<form
                action="https://www.sandbox.paypal.com/cgi-bin/webscr"
                method="post"
              >
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input
                  type="hidden"
                  name="hosted_button_id"
                  value="6RNT8A4HBBJRE"
                />
                <input
                  type="image"
                  src="https://www.paypalobjects.com/webstatic/en_US/i/btn/png/btn_buynow_107x26.png"
                  alt="Buy Now"
                />
                <img
                  alt=""
                  src="https://paypalobjects.com/en_US/i/scr/pixel.gif"
                  width="1"
                  height="1"
                />
              </form>) : "Loading..."
          }
        </div>
      </div>
    </div>
  );
};

const page = () => {

  return (
    <div className="flex flex-col space-y-5 justify-center items-center w-full p-10 h-screen">
      <div id="topBar">
        <Stepper />
      </div>
      <div id="payment" className="grid place-items-start gap-5">
        <div id="backButton" className="flex items-center">
          <img
            width="30"
            height="50"
            src="https://img.icons8.com/ios/50/left--v1.png"
            alt="left--v1"
          />
          <span className="font-medium">Address</span>
        </div>
        <div id="paymentDetails" className="flex">
          <Payment />
        </div>
      </div>
    </div>
  );
};

export default page;
