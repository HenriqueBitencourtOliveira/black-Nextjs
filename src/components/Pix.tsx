import { NextPage } from "next";
import { Button, Container } from "reactstrap";
import Image from "next/image";

const Pix: NextPage = () => {
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText("https://www.linkedin.com/in/henrique-bitencourt-oliveira-065b94207/");
      console.log("Link copiado com sucesso!");
    } catch (error) {
      console.error("Erro ao copiar o link:", error);
    }
  };

  return (
    <>
      <main>
        <Container className="mb-5">
          <div className="d-flex flex-column">
            <Image src="/QRCODE.svg" alt="QR" width={220} height={220} />
            <Button color="dark" className="mt-2" onClick={copyLink}>
              Copiar QR Code
            </Button>
          </div>
        </Container>
      </main>
    </>
  );
};

export default Pix;
