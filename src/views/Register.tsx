import PassportCard from '@/components/ui/passport-card';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 relative" onClick={() => navigate("/language")}>
            <PassportCard />
        </div>
    );
}
