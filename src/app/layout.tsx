import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { GitHubLink } from "~/components/GitHubLink"
import { Header } from "~/components/Header"
import { Footer } from "~/components/Footer"
import "~/styles/reset.css"
import "~/styles/globals.css"

const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] })

export const metadata: Metadata = {
	title: "Dree",
	description: "Generated by create next app",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<GitHubLink />
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}