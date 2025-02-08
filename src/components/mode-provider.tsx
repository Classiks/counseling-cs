import { createContext, useContext, useEffect, useState } from "react"
import { Mode } from "../dataclasses/Mode";
import { Theme } from "../dataclasses/Theme";

type ModeProviderProps = {
    children: React.ReactNode
    defaultMode?: Mode
    defaultTheme?: Theme
    storageKey?: string
}

type ModeProviderState = {
    mode: Mode
    setMode: (mode: Mode) => void
    theme: Theme
    setTheme: (theme: Theme) => void
    toggleTheme: () => void
    systemTheme: boolean
    setSystemTheme: (useSystem: boolean) => void
}

const initialState: ModeProviderState = {
    mode: Mode.STEP,
    setMode: () => null,
    theme: Theme.LIGHT,
    setTheme: () => null,
    toggleTheme: () => null,
    systemTheme: true,
    setSystemTheme: () => null,
}

const ModeProviderContext = createContext<ModeProviderState>(initialState)

// written out for tailwind compiler to include the styles
/*
    `${Mode.STEP}-${Theme.LIGHT}`,
    `${Mode.STEP}-${Theme.DARK}`,
    `${Mode.TCM}-${Theme.LIGHT}`,
    `${Mode.TCM}-${Theme.DARK}`,
*/
const COMBINATIONS = [
    "step-light",
    "step-dark",
    "tcm-light",
    "tcm-dark",
]

export function ModeProvider({
    children,
    defaultMode = Mode.STEP,
    defaultTheme = Theme.LIGHT,
    storageKey = "vite-ui-mode",
    ...props
}: ModeProviderProps) {
    const [mode, setMode] = useState<Mode>(defaultMode);
    const [theme, setTheme] = useState<Theme>(defaultTheme);
    const [systemTheme, setSystemTheme] = useState(true);

    useEffect(() => {
        const root = window.document.documentElement
        root.classList.remove(...COMBINATIONS);

        if (systemTheme) {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            const systemThemeValue = prefersDark ? Theme.DARK : Theme.LIGHT;
            root.classList.add(`${mode}-${systemThemeValue}`);
            setTheme(systemThemeValue);
        } else {
            root.classList.add(`${mode}-${theme}`);
        }
    }, [mode, theme, systemTheme])

    useEffect(() => {
        if (systemTheme) {
            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
            const handleChange = (e: MediaQueryListEvent) => {
                setTheme(e.matches ? Theme.DARK : Theme.LIGHT);
            };
            
            mediaQuery.addEventListener("change", handleChange);
            return () => mediaQuery.removeEventListener("change", handleChange);
        }
    }, [systemTheme]);

    const value = {
        mode,
        theme,
        systemTheme,
        setMode: (mode: Mode) => {
            setMode(mode)
        },
        setTheme: (theme: Theme) => {
            setSystemTheme(false);
            setTheme(theme)
        },
        toggleTheme: () => {
            setSystemTheme(false);
            setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
        },
        setSystemTheme: (useSystem: boolean) => {
            setSystemTheme(useSystem);
            if (useSystem) {
                const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                setTheme(prefersDark ? Theme.DARK : Theme.LIGHT);
            }
        }
    }

    return (
        <ModeProviderContext.Provider {...props} value={value}>
            {children}
        </ModeProviderContext.Provider>
    )
}

export const useMode = () => {
    const context = useContext(ModeProviderContext)

    if (context === undefined)
        throw new Error("useMode must be used within a ModeProvider")

    return context
}
