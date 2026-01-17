import { Layout, Menu, Button } from "antd";
import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { logoutDummy } from "@/auth/auth";

const { Sider, Content } = Layout;

type Props = {
    children: ReactNode;
};

export default function MainLayout({ children }: Props) {
    const router = useRouter();

    function handleLogout() {
        logoutDummy();
        router.push("/login");
    }

    const menuItems = [
        { key: "/dashboard", label: "Dashboard" },
        { key: "/invoice", label: "Invoice" },
        { key: "/inventory", label: "Inventory" },
    ];

    function getSelectedKey(pathname: string) {
        if (pathname.startsWith("/invoice")) return "/invoice";
        if (pathname.startsWith("/inventory")) return "/inventory";
        return "/dashboard";
    }

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider>
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[getSelectedKey(router.pathname)]}
                    items={menuItems}
                    onClick={(item) => router.push(item.key)}
                />

                <div style={{ padding: 16 }}>
                    <Button danger block onClick={handleLogout}>
                        Logout
                    </Button>
                </div>
            </Sider>

            <Layout>
                <Content style={{ padding: 24 }}>
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
}
