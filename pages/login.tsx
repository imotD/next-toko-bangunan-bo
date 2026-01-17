import { Button, Card } from "antd";
import { useRouter } from "next/router";
import { loginDummy } from "@/auth/auth";

export default function LoginPage() {
	const router = useRouter();

	function handleLogin() {
		loginDummy();
		router.replace("/dashboard");
	}

	return (
		<div
			style={{
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Card title="Login" style={{ width: 300 }}>
				<Button type="primary" block onClick={handleLogin}>
					Login
				</Button>
			</Card>
		</div>
	);
}
