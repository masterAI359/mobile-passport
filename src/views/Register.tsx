import {Avatar} from '@/components/ui/avatar';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import React from 'react';

const PassportCard: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat backdrop-blur-sm"
            style={
                {
                    backgroundImage: "url('/img/foreground.png')",
                    backdropFilter: "blur(40px)"
                }
        }>
            {/* Card2 - Top Card */}
            <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center p-3 w-[372px] h-[233px] rounded-t-[15px] rounded-b-[5px] relative overflow-hidden backdrop-blur-[40px] border-white/30 border-2">
                    {/* Texture Pattern */}
                    <div className="absolute w-[350px] h-[215px] left-[11px] top-[9px] border border-white rounded-[20px]"/>
                    <h1 className="text-white text-[20px] font-bold leading-[24px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        ようこそ
                    </h1>
                </div>

                {/* Card1 - Bottom Card */}
                <div className="w-[372px] h-[233px] rounded-t-[5px] rounded-b-[15px] relative overflow-hidden bg-linear-gradient(105.87deg, rgba(255, 255, 255, 0.4) 3.04%, rgba(255, 255, 255, 0.1) 96.05%) backdrop-blur-[40px] border-white/30 border-2">
                    <div className="absolute w-[361.45px] h-[227px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 rounded-[22px]"/>
                    <div className="absolute w-[316px] h-[21px] left-[28px] top-[13px] flex items-end justify-between">
                        <div className="w-[61px] h-[21px] flex items-center justify-center flex-col">
                            <div className="text-[8px] text-white">PONPISH</div>
                            <div className="text-[8px] text-white">PASSPORT</div>
                        </div>
                        <div className="text-white text-[11px] font-normal leading-[18px]">
                            No.{
                            Math.floor(Math.random() * 1000000)
                        } </div>
                    </div>
                    <div className="absolute w-[115px] h-[115px] left-[28px] top-[44px] gap-2">
                        <div className="w-full h-full rounded-[10px] flex items-center justify-center bg-linear-gradient(105.87deg, rgba(255, 255, 255, 0.4) 3.04%, rgba(255, 255, 255, 0.1) 96.05%) backdrop-blur-[40px] border-white/30 border-2">
                            <Avatar width={115}
                                height={115}/>
                        </div>
                    </div>
                    <div className="absolute w-full h-auto left-[150px] top-[44px] flex flex-col gap-3">
                        <div className="w-full h-auto flex flex-col">
                            <Label className="text-white text-[8px] font-light leading-[8px]">HANDLE NAME</Label>
                            <Input className="text-white text-[8px] font-normal leading-[12px] bg-transparent" placeholder="Handle Name"/>
                        </div>
                        <div className="w-full h-auto flex gap-[10px]">
                            <div className="w-auto h-auto flex flex-col">
                                <Label className="text-white text-[8px] font-light leading-[8px]">姓 / Surname</Label>
                                <Input className="text-white text-[8px] font-normal leading-[12px] bg-transparent" placeholder="First Name"/>
                            </div>
                            <div className="w-auto h-auto flex flex-col">
                                <Label className="text-white text-[8px] font-light leading-[8px]">名 / Given Name</Label>
                                <Input className="text-white text-[8px] font-normal leading-[12px] bg-transparent" placeholder="Last Name"/>
                            </div>
                        </div>
                        <div className="w-auto h-auto flex gap-[10px]">
                            <div className="w-auto h-auto flex flex-col">
                                <Label className="text-white text-[8px] font-light leading-[8px]">国籍 / Nationality</Label>
                                <Input className="text-white text-[8px] font-normal leading-[12px] bg-transparent" placeholder="Nationality"/>
                            </div>
                            <div className="w-auto h-auto flex flex-col">
                                <Label className="text-white text-[8px] font-light leading-[8px]">出生日期 / Date of Birth</Label>
                                <Input className="text-white text-[8px] font-normal leading-[12px] bg-transparent" placeholder="YYYY.MM.DD"/>
                            </div>
                            <div className="w-auto h-auto flex flex-col">
                                <Label className="text-white text-[8px] font-light leading-[8px]">SEX</Label>
                                <Input className="text-white text-[8px] font-normal leading-[12px] bg-transparent" placeholder="M/F"/>
                            </div>
                        </div>
                        <div className="w-auto h-auto flex gap-[10px]">
                            <div className="w-auto h-auto flex flex-col">
                                <Label className="text-white text-[8px] font-light leading-[8px]">REGISTERED DOMICILE</Label>
                                <Input className="text-white text-[8px] font-normal leading-[12px] bg-transparent" placeholder="Address"/>
                            </div>
                        </div>
                        <div className="w-auto h-auto flex gap-[10px]">
                            <div className="w-auto h-auto flex flex-col">
                                <Label className="text-white text-[8px] font-light leading-[8px]">PHONE NUMBER</Label>
                                <Input className="text-white text-[8px] font-normal leading-[12px] bg-transparent" placeholder="Phone Number"/>
                            </div>
                        </div>
                    </div>
                    <div className="absolute w-[80px] h-auto left-[30px] top-[168px] flex flex-col gap-0">
                        <div className="w-[88px] h-auto flex flex-col">
                            <Label className="text-white text-[8px] font-light leading-[8px]">DATE OF ISSUE</Label>
                            <Input className="text-white text-[8px] font-normal leading-[12px] bg-transparent" placeholder="YYYY.MM.DD"
                                style={
                                    {fontFamily: 'Forgotten Futurist'}
                                }/>
                        </div>
                        <div className="w-[90px] h-auto flex flex-col">
                            <Label className="text-white text-[8px] font-light leading-[8px]">ISSUING COMPANY</Label>
                            <Input className="text-white text-[8px] font-normal leading-[12px] bg-transparent" placeholder="PONPISH"
                                style={
                                    {fontFamily: 'Forgotten Futurist'}
                                }/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Register() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 relative">
            <PassportCard/>
        </div>
    );
}
