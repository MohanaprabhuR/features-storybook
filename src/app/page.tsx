import Button from "@/components/button/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button  label="hello world" size={"default"} variant={"rounded"} icon={"left"} customIcon={"https://cdn-icons-png.freepik.com/256/992/992651.png?ga=GA1.1.1578571091.1698145536&semt=ais"}/>
    </main>
  );
}
