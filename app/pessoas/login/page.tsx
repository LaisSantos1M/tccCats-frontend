import LoginForm from "@/components/LoginForm";

import { loginAction } from "./actions";
import PawCursor from "@/components/PawCursor";
import Link from "next/link"


export default function LoginPage() {
    return (
        <div className="inicio">
            <h1>Login</h1>
            <PawCursor />
            <div className="container">
                <LoginForm onSend={loginAction} />

            </div>
            <Link href="/" className="voltar">
                Voltar
            </Link>
        </div>
    )
}