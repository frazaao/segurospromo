export interface ButtonProps {
    Link: string,
    Label: string,
    Variant: 'thin' | 'bold'
}

export interface StepsProps {
    id: string
    Title: string
}

export interface CoverageCardProps {
    Icon: {
        data: {
            attributes: {
                url: string,
                alternativeText: string
            }
        }
    },
    Title: string,
    Description: string,
    Link: string,
    ButtonLabel: string,
}

export interface HeroProps {
    Title: string,
    Description: string,
    Button: ButtonProps
}

export interface ListProps {
    Title: string,
    Steps: StepsProps[],
    Description: string,
    Button: ButtonProps
}

export interface CoverageProps {
    Title: string,
    Subtitle: string
    CoverageCard: CoverageCardProps[],
    Button: ButtonProps
}

export interface ReasonsProps {
    Title: string,
    Button: ButtonProps
}

export interface ContactProps {
    Title: string,
    CallToAction: string,
    PhoneNumber: string,
    ButtonWhatsApp: ButtonProps,
    OpeningHours: string
}

export interface LandingPageProps {
    Hero: HeroProps,
    List: ListProps,
    Coverage: CoverageProps,
    Reasons: ReasonsProps,
    Contact: ContactProps,
}