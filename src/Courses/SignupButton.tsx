interface ISignupButton {
    link: string;
}
export default function SignupButton({ link }: ISignupButton) {
    return <button
        className=" bg-gradient-to-r from-slate-300 to-slate-200 rounded-md px-3 py-2  font-medium shadow-lg hover:from-slate-300 hover:to-slate-400 hover:scale-105"
        onClick={() => { window.open(link, "_blank") }}
    >
        Anmelden
    </button>
}