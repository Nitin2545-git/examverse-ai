import "./globals.css";

export const metadata = {
  title: "ExamVerse AI",
  description: "AI Powered Government Exam Learning Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
