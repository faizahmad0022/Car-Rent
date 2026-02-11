"use client";

import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import CarBlueLinesImg from "@/assets/LookBlueCar.svg";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const PaymentCarRcent = () => {
  return (
    <div className="w-full bg-[#F6F7F9] p-6  font-sans ">
      <div className=" mx-auto flex flex-col lg:flex-row items-start gap-8">
        <div className="w-full lg:flex-1 space-y-8">
          <Card className="border-none shadow-none rounded-md bg-white">
            <CardContent className="p-8 space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-bold text-[#1A202C]">
                    Billing Info
                  </h2>
                  <p className="text-sm text-[#90A3BF] mt-1">
                    Please enter your billing info
                  </p>
                </div>
                <span className="text-sm text-[#90A3BF] font-medium">
                  Step 1 of 4
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-sm font-bold text-[#1A202C]">
                    Name
                  </Label>
                  <Input
                    placeholder="Your name"
                    className="h-12 bg-[#F6F7F9]  rounded-md border-0! ring-0! focus:border-0! focus:ring-0!"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-bold text-[#1A202C]">
                    Phone Number
                  </Label>
                  <Input
                    placeholder="Phone number"
                    className="h-12 border-0! ring-0! focus:border-0! focus:ring-0! bg-[#F6F7F9] rounded-md"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-bold text-[#1A202C]">
                    Address
                  </Label>
                  <Input
                    placeholder="Address"
                    className="h-12 bg-[#F6F7F9] border-0! ring-0! focus:border-0! focus:ring-0! rounded-md"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-bold text-[#1A202C]">
                    Town / City
                  </Label>
                  <Input
                    placeholder="Town or city"
                    className="h-12 bg-[#F6F7F9] border-0! ring-0! focus:border-0! focus:ring-0! rounded-md"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-none rounded-md bg-white">
            <CardContent className="p-8 space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-bold text-[#1A202C]">
                    Rental Info
                  </h2>
                  <p className="text-sm text-[#90A3BF] mt-1">
                    Please select your rental date
                  </p>
                </div>
                <span className="text-sm text-[#90A3BF] font-medium">
                  Step 2 of 4
                </span>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#3563E9] rounded-full shadow-[0_0_0_4px_rgba(53,99,233,0.1)]"></div>
                    <span className="text-sm font-bold text-[#1A202C]">
                      Pick – Up
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-sm font-bold text-[#1A202C]">
                        Locations
                      </Label>
                      <Select>
                        <SelectTrigger className="h-12 bg-[#F6F7F9 border-0! ring-0! focus:border-0! focus:ring-0! bg-[#F6F7F9]  rounded-md text-[#90A3BF]">
                          <SelectValue placeholder="Select your city" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lahore">Lahore</SelectItem>
                          <SelectItem value="karachi">Karachi</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-bold text-[#1A202C]">
                        Date
                      </Label>
                      <Select>
                        <SelectTrigger className="h-12 bg-[#F6F7F9] border-0! ring-0! focus:border-0! focus:ring-0! rounded-md text-[#90A3BF]">
                          <SelectValue placeholder="Select your date" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="20">20 July 2026</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-bold text-[#1A202C]">
                        Time
                      </Label>
                      <Select>
                        <SelectTrigger className="h-12 bg-[#F6F7F9] border-0! ring-0! focus:border-0! focus:ring-0! rounded-md text-[#90A3BF]">
                          <SelectValue placeholder="Select your time    " />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="20">20 July 2026</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#5CAFFC] rounded-full shadow-[0_0_0_4px_rgba(92,175,252,0.1)]"></div>
                    <span className="text-sm font-bold text-[#1A202C]">
                      Drop – Off
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-sm font-bold text-[#1A202C]">
                        Locations
                      </Label>
                      <Select>
                        <SelectTrigger className="h-12 bg-[#F6F7F9] border-0! ring-0! focus:border-0! focus:ring-0! rounded-md text-[#90A3BF]">
                          <SelectValue placeholder="Select your city" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lahore">Lahore</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-bold text-[#1A202C]">
                        Date
                      </Label>
                      <Select>
                        <SelectTrigger className="h-12 bg-[#F6F7F9] border-0! ring-0! focus:border-0! focus:ring-0! rounded-md text-[#90A3BF]">
                          <SelectValue placeholder="Select your date" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="22">22 July 2026</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-bold text-[#1A202C]">
                        Time
                      </Label>
                      <Select>
                        <SelectTrigger className="h-12 bg-[#F6F7F9] border-0! ring-0! focus:border-0! focus:ring-0! rounded-md text-[#90A3BF]">
                          <SelectValue placeholder="Select your time    " />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="20">20 July 2026</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Method */}

          <Card className="border-none shadow-none rounded-md bg-white">
            <CardContent className="p-8 space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-bold text-[#1A202C]">
                    Payment Method
                  </h2>
                  <p className="text-sm text-[#90A3BF] mt-1">
                    Please enter your payment method
                  </p>
                </div>
                <span className="text-sm text-[#90A3BF] font-medium">
                  Step 3 of 4
                </span>
              </div>

              <RadioGroup defaultValue="credit-card" className="space-y-4">
                <div className="bg-[#F6F7F9] rounded-md p-6">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem
                        value="credit-card"
                        id="credit-card"
                        className="border-[#3563E9] text-[#3563E9] w-5 h-5"
                      />
                      <Label
                        htmlFor="credit-card"
                        className="text-base font-bold text-[#1A202C] cursor-pointer"
                      >
                        Credit Card
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-800 font-black italic text-xl">
                        VISA
                      </span>
                      <div className="flex -space-x-1">
                        <div className="w-5 h-5 rounded-full bg-[#EB001B]" />
                        <div className="w-5 h-5 rounded-full bg-[#F79E1B] opacity-80" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="space-y-3">
                      <Label className="text-sm font-bold text-[#1A202C]">
                        Card Number
                      </Label>
                      <Input
                        placeholder="Card number"
                        className="h-12 bg-white border-0! ring-0! focus:border-0! focus:ring-0! placeholder:text-[#90A3BF] rounded-md shadow-sm"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label className="text-sm font-bold text-[#1A202C]">
                        Expiration Date
                      </Label>
                      <Input
                        placeholder="DD / MM / YY"
                        className="h-12 bg-white border-0! ring-0! focus:border-0! focus:ring-0! placeholder:text-[#90A3BF] shadow-sm"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label className="text-sm font-bold text-[#1A202C]">
                        Card Holder
                      </Label>
                      <Input
                        placeholder="Card holder"
                        className="h-12 bg-white border-0! ring-0! focus:border-0! focus:ring-0! placeholder:text-[#90A3BF] shadow-sm"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label className="text-sm font-bold text-[#1A202C]">
                        CVC
                      </Label>
                      <Input
                        placeholder="CVC"
                        className="h-12 bg-white border-0! ring-0! focus:border-0! focus:ring-0! placeholder:text-[#90A3BF] shadow-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-5 bg-[#F6F7F9] rounded-md cursor-pointer">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem
                      value="paypal"
                      id="paypal"
                      className="w-5 h-5"
                    />
                    <Label
                      htmlFor="paypal"
                      className="text-sm font-bold text-[#1A202C] cursor-pointer"
                    >
                      PayPal
                    </Label>
                  </div>
                  <span className="text-blue-900 font-bold italic text-xl">
                    PayPal
                  </span>
                </div>

                <div className="flex items-center justify-between p-5 bg-[#F6F7F9] rounded-xl cursor-pointer">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem
                      value="bitcoin"
                      id="bitcoin"
                      className="w-5 h-5"
                    />
                    <Label
                      htmlFor="bitcoin"
                      className="text-sm font-bold text-[#1A202C] cursor-pointer"
                    >
                      Bitcoin
                    </Label>
                  </div>
                  <span className="text-orange-500 font-bold italic text-xl">
                    bitcoin
                  </span>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card className="border-none shadow-none rounded-md bg-white">
            <CardContent className="p-8 space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-bold text-[#1A202C]">
                    Confirmation
                  </h2>
                  <p className="text-sm text-[#90A3BF] mt-1">
                    We are getting to the end. Just a few clicks and your rental
                    is ready!
                  </p>
                </div>
                <span className="text-sm text-[#90A3BF] font-medium">
                  Step 4 of 4
                </span>
              </div>

              <div className="space-y-4">
                <div className="bg-[#F6F7F9] rounded-xl p-4 flex items-center gap-3">
                  <Checkbox
                    id="marketing"
                    className="border-[#90A3BF] data-[state=checked]:bg-[#3563E9] w-5 h-5"
                  />
                  <Label
                    htmlFor="marketing"
                    className="text-sm font-medium text-[#1A202C] cursor-pointer"
                  >
                    I agree with sending marketing and newsletter emails. No
                    spam, promised!
                  </Label>
                </div>
                <div className="bg-[#F6F7F9] rounded-xl p-4 flex items-center gap-3">
                  <Checkbox
                    id="terms"
                    className="border-[#90A3BF] data-[state=checked]:bg-[#3563E9] w-5 h-5"
                  />
                  <Label
                    htmlFor="terms"
                    className="text-sm font-medium text-[#1A202C] cursor-pointer"
                  >
                    I agree with our terms and conditions and privacy policy.
                  </Label>
                </div>
              </div>

              <Button className="bg-[#3563E9] hover:bg-[#3563E9] text-white px-6 py-6 rounded-md text-base font-semibold mt-4 shadow-lg shadow-blue-100">
                Rent Now
              </Button>

              <div className="pt-6 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🛡️</span>
                  <p className="text-sm font-bold text-[#1A202C]">
                    All your data are safe
                  </p>
                </div>
                <p className="text-xs text-[#90A3BF] leading-relaxed max-w-sm">
                  We are using the most advanced security to provide you the
                  best experience ever.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="w-full lg:w-112.5">
          <Card className="border-none shadow-none rounded-md bg-white p-6 sticky top-10">
            <h2 className="text-lg font-bold text-[#1A202C]">Rental Summary</h2>
            <p className="text-xs text-[#90A3BF] mt-1 mb-6 leading-relaxed">
              Prices may change depending on the length of the rental and the
              price of your rental car.
            </p>

            <div className="flex items-center gap-4 border-b border-[#F3F5F7] pb-6 mb-6">
              <img src={CarBlueLinesImg} className="w-30 h-30" alt="" />
              <div>
                <h3 className="text-2xl font-bold text-[#1A202C]">
                  Nissan GT – R
                </h3>
                <div className="flex items-center gap-1 mt-1 text-orange-400">
                  <span>★★★★</span>
                  <span className="text-gray-300 text-sm">★</span>
                  <span className="text-xs text-[#90A3BF] ml-1 font-medium">
                    440+ Reviewer
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-[#90A3BF] font-medium">Subtotal</span>
                <span className="font-bold text-[#1A202C]">$80.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#90A3BF] font-medium">Tax</span>
                <span className="font-bold text-[#1A202C]">$0</span>
              </div>
            </div>

            <div className="relative mb-8">
              <Input
                placeholder="Apply promo code"
                className="bg-[#F6F7F9] border-0! ring-0! focus:border-0! focus:ring-0! h-12 rounded-md pr-28"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-sm text-[#1A202C] hover:underline">
                Apply now
              </button>
            </div>

            <div className="flex justify-between items-end">
              <div>
                <h4 className="text-lg font-bold text-[#1A202C]">
                  Total Rental Price
                </h4>
                <p className="text-xs text-[#90A3BF]">
                  Overall price and includes rental discount
                </p>
              </div>
              <span className="text-3xl font-bold text-[#1A202C]">$80.00</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PaymentCarRcent;
