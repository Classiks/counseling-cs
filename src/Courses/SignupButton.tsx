import { Button } from "@/components/ui/button";

interface ISignupButton {
    link: string;
}
export default function SignupButton({ link }: ISignupButton) {
    return <Button asChild>
        <a href={link} target="_blank" rel="noopener noreferrer">Anmelden</a>
    </Button>
}
