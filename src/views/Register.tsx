import React from 'react';

interface PassportData {
    handleName: string;
    firstName: string;
    lastName: string;
    nationality: string;
    birthDate: string;
    sex: string;
    registeredDomicile: string;
    phoneNumber: string;
    issueDate: string;
    issuingCompany: string;
    idNumber: string;
}

const PassportCard: React.FC < {
    data: PassportData
} > = ({data}) => {
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
                <div className="w-[372px] h-[233px] rounded-t-[15px] rounded-b-[5px] relative overflow-hidden"
                    style={
                        {
                            background: 'linear-gradient(105.87deg, rgba(255, 255, 255, 0.4) 3.04%, rgba(255, 255, 255, 0) 96.05%)',
                            backdropFilter: 'blur(40px)',
                            transform: 'matrix(-1, 0, 0, 1, 0, 0)'
                        }
                }>
                    {/* Texture Pattern */}
                    <div className="absolute w-[361.45px] h-[227px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 rounded-[22px]"
                        style={
                            {
                                background: 'url(texture_pattern_00000.png)',
                                transform: 'matrix(-1, 0, 0, 1, 0, 0)'
                            }
                        }/> {/* Border Line */}
                    <div className="absolute w-[350px] h-[215px] left-[11px] top-[9px] border border-white rounded-[20px]"
                        style={
                            {transform: 'matrix(-1, 0, 0, 1, 0, 0)'}
                        }/> {/* PONPISH Text */}
                    <div className="absolute w-[80px] h-[24px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white text-[20px] font-normal leading-[24px]">
                        PONPISH
                    </div>
                </div>

                {/* Card1 - Bottom Card */}
                <div className="w-[372px] h-[233px] rounded-t-[5px] rounded-b-[15px] relative overflow-hidden"
                    style={
                        {
                            background: 'linear-gradient(105.87deg, rgba(255, 255, 255, 0.4) 3.04%, rgba(255, 255, 255, 0.1) 96.05%)',
                            backdropFilter: 'blur(40px)'
                        }
                }>
                    {/* Texture */}
                    <div className="absolute w-[361.45px] h-[227px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 rounded-[22px]"
                        style={
                            {background: 'url(texture_pattern_00000.png)'}
                        }/> {/* Title Section */}
                    <div className="absolute w-[316px] h-[21px] left-[28px] top-[13px] flex items-end justify-between">
                        {/* Logo/QR Code */}
                        <div className="w-[61px] h-[21px] bg-black/10 rounded-[4px] flex items-center justify-center">
                            <div className="text-[8px] text-white">QR</div>
                        </div>

                        {/* ID Number */}
                        <div className="text-white text-[11px] font-normal leading-[18px]">
                            ID No.{
                            data.idNumber
                        } </div>
                    </div>

                    {/* Profile Icon */}
                    <div className="absolute w-[115px] h-[115px] left-[28px] top-[44px]">
                        <div className="w-full h-full rounded-[10px] flex items-center justify-center"
                            style={
                                {
                                    background: 'linear-gradient(105.87deg, rgba(255, 255, 255, 0.4) 3.04%, rgba(255, 255, 255, 0.1) 96.05%)',
                                    backdropFilter: 'blur(40px)'
                                }
                        }>
                            {/* User Avatar */}
                            <div className="w-[77px] h-[77px] rounded-full bg-gradient-to-b from-[#1D0024] to-[#100014] flex items-center justify-center">
                                <div className="w-[50px] h-[50px] rounded-full bg-[#E6864E] relative overflow-hidden">
                                    <div className="absolute top-[20%] left-[20%] w-[60%] h-[40%] bg-[#FFDBC9] rounded-full"></div>
                                    <div className="absolute bottom-[10%] left-[10%] w-[80%] h-[30%] bg-white rounded-t-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className="absolute w-[194px] h-[189px] left-[150px] top-[44px] flex flex-col gap-1">
                        {/* Handle Name */}
                        <div className="w-[132px] h-[26px] flex flex-col">
                            <div className="text-white text-[6px] font-light leading-[8px]">HANDLE NAME</div>
                            <div className="text-white text-[12px] font-black leading-[18px] underline">
                                {
                                data.handleName
                            }</div>
                        </div>

                        {/* Name Row */}
                        <div className="w-[120px] h-[26px] flex gap-[10px]">
                            <div className="w-[50px] h-[26px] flex flex-col">
                                <div className="text-white text-[6px] font-light leading-[8px]">FIRST NAME</div>
                                <div className="text-white text-[12px] font-medium leading-[18px] underline">
                                    {
                                    data.firstName
                                }</div>
                            </div>
                            <div className="w-[60px] h-[26px] flex flex-col">
                                <div className="text-white text-[6px] font-light leading-[8px]">LAST NAME</div>
                                <div className="text-white text-[12px] font-medium leading-[18px] underline">
                                    {
                                    data.lastName
                                }</div>
                            </div>
                        </div>

                        {/* Nationality & Birth Date Row */}
                        <div className="w-[221px] h-[26px] flex gap-[10px]">
                            <div className="w-[75px] h-[26px] flex flex-col">
                                <div className="text-white text-[6px] font-light leading-[8px]">NATIONALITY</div>
                                <div className="text-white text-[12px] font-medium leading-[18px] underline">
                                    {
                                    data.nationality
                                }</div>
                            </div>
                            <div className="w-[76px] h-[26px] flex flex-col">
                                <div className="text-white text-[6px] font-light leading-[8px]">DATE OF BIRTH</div>
                                <div className="text-white text-[12px] font-medium leading-[18px] underline">
                                    {
                                    data.birthDate
                                }</div>
                            </div>
                            <div className="w-[50px] h-[26px] flex flex-col">
                                <div className="text-white text-[6px] font-light leading-[8px]">SEX</div>
                                <div className="text-white text-[12px] font-medium leading-[18px] underline">
                                    {
                                    data.sex
                                }</div>
                            </div>
                        </div>

                        {/* Registered Domicile */}
                        <div className="w-[183px] h-[44px] flex gap-[10px]">
                            <div className="w-[183px] h-[44px] flex flex-col">
                                <div className="text-white text-[6px] font-light leading-[8px]">REGISTERED DOMICILE</div>
                                <div className="text-white text-[12px] font-medium leading-[18px]">
                                    {
                                    data.registeredDomicile
                                }</div>
                            </div>
                        </div>

                        {/* Phone Number */}
                        <div className="w-[142px] h-[26px] flex gap-[10px]">
                            <div className="w-[142px] h-[26px] flex flex-col">
                                <div className="text-white text-[6px] font-light leading-[8px]">PHONE NUMBER</div>
                                <div className="text-white text-[12px] font-medium leading-[18px] underline">
                                    {
                                    data.phoneNumber
                                }</div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Info */}
                    <div className="absolute w-[80px] h-[44px] left-[30px] top-[168px] flex flex-col gap-0">
                        <div className="w-[88px] h-[22px] flex flex-col">
                            <div className="text-white text-[6px] font-light leading-[8px]">DATE OF ISSUE</div>
                            <div className="text-white text-[10px] font-normal leading-[14px]"
                                style={
                                    {fontFamily: 'Forgotten Futurist'}
                            }>
                                {
                                data.issueDate
                            } </div>
                        </div>
                        <div className="w-[90px] h-[22px] flex flex-col">
                            <div className="text-white text-[6px] font-light leading-[8px]">ISSUING COMPANY</div>
                            <div className="text-white text-[10px] font-normal leading-[14px]"
                                style={
                                    {fontFamily: 'Forgotten Futurist'}
                            }>
                                {
                                data.issuingCompany
                            } </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Register() {
    const sampleData: PassportData = {
        handleName: "@johndoe",
        firstName: "John",
        lastName: "Doe",
        nationality: "American",
        birthDate: "1990.01.15",
        sex: "M",
        registeredDomicile: "123 Main Street, New York, NY 10001, United States",
        phoneNumber: "+1 (555) 123-4567",
        issueDate: "2024.01.01",
        issuingCompany: "PONPISH",
        idNumber: "01234"
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 relative">
            <PassportCard data={sampleData}/>
        </div>
    );
}
