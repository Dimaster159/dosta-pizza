import { Filters, ProductsListGroup, TopBar } from "@/components/shared";
import { Title, Container } from "@/components/shared";


export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-9 pb-14 scroll-smooth">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsListGroup title="Пиццы" items={[{
                id: 7,
                name: "Охотничья",
                imageUrl: 'https://media.dodostatic.net/image/r:233x233/019635b27c727302835040e5d7c27caa.avif',
                price: 629,
                items: [{ price: 629 }],
              }, {
                id: 8,
                name: "Охотничья",
                imageUrl: 'https://media.dodostatic.net/image/r:233x233/019635b27c727302835040e5d7c27caa.avif',
                price: 629,
                items: [{ price: 629 }],
              }, {
                id: 9,
                name: "Охотничья",
                imageUrl: 'https://media.dodostatic.net/image/r:233x233/019635b27c727302835040e5d7c27caa.avif',
                price: 629,
                items: [{ price: 629 }],
              }, {
                id: 10,
                name: "Охотничья",
                imageUrl: 'https://media.dodostatic.net/image/r:233x233/019635b27c727302835040e5d7c27caa.avif',
                price: 629,
                items: [{ price: 629 }],
              }, {
                id: 11,
                name: "Охотничья",
                imageUrl: 'https://media.dodostatic.net/image/r:233x233/019635b27c727302835040e5d7c27caa.avif',
                price: 629,
                items: [{ price: 629 }],
              }, {
                id: 12,
                name: "Охотничья",
                imageUrl: 'https://media.dodostatic.net/image/r:233x233/019635b27c727302835040e5d7c27caa.avif',
                price: 629,
                items: [{ price: 629 }],
              },]} categoryId={1} />
              <ProductsListGroup title="Комбо" items={[{
                id: 1,
                name: "Охотничья",
                imageUrl: 'https://media.dodostatic.net/image/r:233x233/0196a9ad810f70ea93151a8281a68058.avif',
                price: 629,
                items: [{ price: 629 }],
              }, {
                id: 2,
                name: "Охотничья",
                imageUrl: 'https://media.dodostatic.net/image/r:233x233/0196a9ad810f70ea93151a8281a68058.avif',
                price: 629,
                items: [{ price: 629 }],
              }, {
                id: 3,
                name: "Охотничья",
                imageUrl: 'https://media.dodostatic.net/image/r:233x233/0196a9ad810f70ea93151a8281a68058.avif',
                price: 629,
                items: [{ price: 629 }],
              }, {
                id: 4,
                name: "Охотничья",
                imageUrl: 'https://media.dodostatic.net/image/r:233x233/0196a9ad810f70ea93151a8281a68058.avif',
                price: 629,
                items: [{ price: 629 }],
              }, {
                id: 5,
                name: "Охотничья",
                imageUrl: 'https://media.dodostatic.net/image/r:233x233/0196a9ad810f70ea93151a8281a68058.avif',
                price: 629,
                items: [{ price: 629 }],
              }, {
                id: 6,
                name: "Охотничья",
                imageUrl: 'https://media.dodostatic.net/image/r:233x233/0196a9ad810f70ea93151a8281a68058.avif',
                price: 629,
                items: [{ price: 629 }],
              },]} categoryId={2} />

            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
