"use client"
import {type FC, useEffect} from "react";

import {useTheme} from 'next-themes';

const themeColors = {
    light: "#3294e2",
    dark: "#057267",
};


export const ColorTheme: FC = () => {
    const {resolvedTheme} = useTheme();
    useEffect(() => {
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        const color = resolvedTheme === "dark" ? themeColors.dark : themeColors.light;

        if (metaThemeColor) {
            metaThemeColor.setAttribute("content", color);
        }
    }, [resolvedTheme]);

    return null;
};
