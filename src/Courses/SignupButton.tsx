import { Button } from "@/components/ui/button";

interface ISignupButton {
    link: string;
}
export default function SignupButton({ link }: ISignupButton) {
    return <Button
        onClick={() => { window.open(link, "_blank") }}
    >
        Anmelden
    </Button>
}