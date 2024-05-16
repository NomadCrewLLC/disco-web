import { Button } from "@nextui-org/react";

export function ThemeButton({ children, color }) {
    

    return (        
        <Button color={color} className={`h-12 w-16 rounded-full font-semibold text-medium sm:w-auto sm:px-6`}>
            {children}
        </Button>
    )
}