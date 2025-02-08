import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useMode } from "@/components/mode-provider";
import { Theme } from "@/dataclasses/Theme";

export default function ThemeToggle() {
    const { toggleTheme, theme } = useMode()

    return (
        <Button variant="outline" size="icon" onClick={toggleTheme}>
            {
                theme === Theme.LIGHT ? (
                    <Moon />
                ) : (
                    <Sun />
                )
            }
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
