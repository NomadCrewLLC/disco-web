import { ThemeButton } from "./ThemeButton";
import Image from 'next/image';

export function HeroSection({ theme, headlineNode, subheadlineText, image, primaryCTAText, secondaryCTAText }) {

    return (
        <section className={`${theme} light text-foreground bg-background py-32 sm:pt-40 md:pt-48`}>
            <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
            <div className="relative items-center gap-12 lg:flex">
                <div className="text-center sm:mx-auto sm:w-11/12 md:mt-12 md:w-4/5 lg:mt-0 lg:mr-auto lg:w-6/12 lg:text-left">
                    {headlineNode}
                        <p className="mt-12 text-lg 
                    text-gray-600
                    dark:text-gray-300
                    darkPrimary:text-gray-300
                    sm:text-xl">{subheadlineText}</p>
                
                        <div className="mt-8 lg:flex gap-4">
                            {primaryCTAText &&
                                <ThemeButton color="primary">{primaryCTAText}</ThemeButton>
                            }
                            {secondaryCTAText &&
                                <ThemeButton color="secondary">{secondaryCTAText}</ThemeButton>
                            }
                        </div>
                </div>
                <div>
                    <Image className="w-full" src={image} alt="project illustration" height="600" width="800" />
                </div>
            </div>
            </div>
        </section>
    )
}