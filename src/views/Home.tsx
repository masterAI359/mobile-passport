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

interface Props {
    onTheme: (theme : "ios" | "material") => void;
    theme: "ios" | "material";
}

export function Home(props : Props) {
    const [darkMode, setDarkMode] = useState(false);
    const navigate = useNavigate();
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark");
    };

    useLayoutEffect(() => {
        setDarkMode(document.documentElement.classList.contains("dark"));
    });

    return (
        <Page>
            <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat backdrop-blur-sm"
                style={
                    {backgroundImage: "url('/img/foreground.png')"}
            }>
                <Land className="w-full h-full cursor-pointer"
                    onClick={
                        () => navigate("/register")
                    }/>
            </div>
        </Page>
    );
}
