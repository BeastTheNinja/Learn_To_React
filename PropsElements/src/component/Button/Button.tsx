// Interface til props
interface ButtonProps {
    action: () => void;
    size: "small" | "medium" | "large";
    theme: "light" | "dark";
    text: string;
}

export const Button = ({ action, size, theme, text }: ButtonProps) => {
    // Tailwind-klasser baseret på size
    let sizeClass = "";
    if (size === "small") sizeClass = "px-3 py-1 text-sm";
    if (size === "medium") sizeClass = "px-4 py-2 text-base";
    if (size === "large") sizeClass = "px-6 py-3 text-lg";

    // Tailwind-klasser baseret på theme
    const themeClass =
        theme === "light"
            ? "bg-white text-blue-700 border border-blue-700 hover:bg-blue-100"
            : "bg-blue-700 text-white border border-blue-700 hover:bg-blue-800";

    return (
        <button
            onClick={action}
            className={`rounded transition-colors duration-200 ${sizeClass} ${themeClass}`}
        >
            {text}
        </button>
    );
};