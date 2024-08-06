import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Header } from "~/components/Header"
import { Footer } from "~/components/Footer"
import "~/styles/reset.css"
import "~/styles/globals.css"

const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] })

export const metadata: Metadata = {
	metadataBase: new URL("https://dreee.vercel.app"),
	title: "Dree",
	description: "Tool to generate text diagrams of folder and file structures 📁.",
	authors: [{ name: "Dresan", url: "dresan.dev" }],
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
