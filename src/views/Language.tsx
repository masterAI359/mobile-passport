import {useLayoutEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {
    Page,
    List,
    Navbar,
    BlockTitle,
    ListItem,
    Radio,
    Toggle
} from "konsta/react";
import {Land} from "../components/ui/landing";
import Title from "@/components/ui/title";
import { RoundButton } from "@/components/ui/round-button";
import { LanguageSelector } from "@/components/ui/language-selector";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
    onTheme: (theme : "ios" | "material") => void;
    theme: "ios" | "material";
}

export function Language(props : Props) {
    const [darkMode, setDarkMode] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('ja');
    const navigate = useNavigate();
    
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark");
    };

    const handleLanguageSelect = (language: any) => {
        setSelectedLanguage(language.code);
        // You can add additional logic here like storing the selection
        console.log('Selected language:', language);
    };

    useLayoutEffect(() => {
        setDarkMode(document.documentElement.classList.contains("dark"));
    });

    return (
        <Page>
            <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat backdrop-blur-sm"
                style={{
                    backgroundImage: "url('/img/foreground.png')"
                }}>
                <div className="flex flex-col items-center justify-center gap-8 px-4 w-full h-[100vh] backdrop-blur-sm">
                    <Title />
                    <div className="text-white text-center text-lg font-medium">
                        language selector
                    </div>
                    <RoundButton onClick={() => navigate("/")}>
                        <ArrowRight className="w-4 h-4 text-white"/>
                    </RoundButton>
                </div>
            </div>
        </Page>
    );
}
