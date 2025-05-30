import React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { IconButton, Tooltip } from "@radix-ui/themes";
import Head from "next/head";

export const ThemeToggle = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof IconButton>) => {
  const { theme, systemTheme, setTheme } = useTheme();

  return (
    <>
      <Head>
        <style>{`
        :root, .light, .light-theme {
          --theme-toggle-sun-icon-display: block;
          --theme-toggle-moon-icon-display: none;
        }
        .dark, .dark-theme {
          --theme-toggle-sun-icon-display: none;
          --theme-toggle-moon-icon-display: block;
        }
      `}</style>
      </Head>

      <div
        onClick={() => {
          // Set 'system' theme if the next theme matches the system theme
          const resolvedTheme = theme === "system" ? systemTheme : theme;
          const newTheme = resolvedTheme === "dark" ? "light" : "dark";
          const newThemeMatchesSystem = newTheme === systemTheme;
          setTheme(newThemeMatchesSystem ? "system" : newTheme);
        }}
        className="radix-themes-custom-fonts flex h-[30px] w-[37px] cursor-pointer items-center justify-center rounded-md border bg-black transition-all duration-200 ease-out hover:bg-muted dark:hover:bg-[#101010]"
        content="Toggle theme"
      >
        <IconButton
          size="3"
          variant="ghost"
          color="gray"
          aria-label="Toggle theme"
          {...props}
        >
          <svg
            style={{
              color: "currentcolor",
              display: "var(--theme-toggle-sun-icon-display)",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentcolor"
            viewBox="0 0 256 256"
          >
            <path d="M164,72a76.2,76.2,0,0,0-20.26,2.73,55.63,55.63,0,0,0-9.41-11.54l9.51-13.57a8,8,0,1,0-13.11-9.18L121.22,54A55.9,55.9,0,0,0,96,48c-.58,0-1.16,0-1.74,0L91.37,31.71a8,8,0,1,0-15.75,2.77L78.5,50.82A56.1,56.1,0,0,0,55.23,65.67L41.61,56.14a8,8,0,1,0-9.17,13.11L46,78.77A55.55,55.55,0,0,0,40,104c0,.57,0,1.15,0,1.72L23.71,108.6a8,8,0,0,0,1.38,15.88,8.24,8.24,0,0,0,1.39-.12l16.32-2.88a55.74,55.74,0,0,0,5.86,12.42A52,52,0,0,0,84,224h80a76,76,0,0,0,0-152ZM56,104a40,40,0,0,1,72.54-23.24,76.26,76.26,0,0,0-35.62,40,52.14,52.14,0,0,0-31,4.17A40,40,0,0,1,56,104ZM164,208H84a36,36,0,1,1,4.78-71.69c-.37,2.37-.63,4.79-.77,7.23a8,8,0,0,0,16,.92,58.91,58.91,0,0,1,1.88-11.81c0-.16.09-.32.12-.48A60.06,60.06,0,1,1,164,208Z"></path>
          </svg>

          <svg
            style={{
              color: "currentcolor",
              display: "var(--theme-toggle-moon-icon-display)",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentcolor"
            viewBox="0 0 256 256"
          >
            <path d="M172,72a76.45,76.45,0,0,0-12.36,1A71.93,71.93,0,0,0,104.17,9.83a8,8,0,0,0-9.59,9.58A56.05,56.05,0,0,1,40,88a56.45,56.45,0,0,1-12.59-1.42,8,8,0,0,0-9.59,9.59,72.22,72.22,0,0,0,32.29,45.06A52,52,0,0,0,92,224h80a76,76,0,0,0,0-152ZM37.37,104c.87,0,1.75,0,2.63,0a72.08,72.08,0,0,0,72-72c0-.89,0-1.78,0-2.67a55.63,55.63,0,0,1,32,48,76.28,76.28,0,0,0-43,43.4A52,52,0,0,0,62,129.59,56.22,56.22,0,0,1,37.37,104ZM172,208H92a36,36,0,1,1,4.78-71.69c-.37,2.37-.63,4.79-.77,7.23a8,8,0,0,0,16,.92,58.91,58.91,0,0,1,1.88-11.81c0-.16.09-.32.12-.48A60.06,60.06,0,1,1,172,208Z"></path>
          </svg>
        </IconButton>
      </div>
    </>
  );
};
