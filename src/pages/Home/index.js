import Cabecalho from '../../components/cabeca/cabecalho';
import BarraFerramentas from '../../components/miolo/barraFerramentas';
import Rodape from '../../components/pe/rodape';
import Card from '../../components/card/card';

//import { Link } from "react-router-dom";

export default function Home(){
    document.title = "Home"; //muda o nome do separador

    return (
        <div>
            <Cabecalho image='https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fti%2Fvetor-gratis%2Fp1%2F301321-fundo-de-paisagem-verde-linda-gr%25C3%25A1tis-vetor.jpg&imgrefurl=https%3A%2F%2Fpt.vecteezy.com%2Farte-vetorial%2F301321-fundo-de-paisagem-verde-linda&tbnid=QspwWbBhHeueGM&vet=12ahUKEwi4lvWK8YvwAhV5s5UCHV3aBqwQMygLegUIARDwAQ..i&docid=xDoPlFePlFgJeM&w=808&h=490&q=imagens%20de%20paisagens%20verdes&ved=2ahUKEwi4lvWK8YvwAhV5s5UCHV3aBqwQMygLegUIARDwAQ' />
            <BarraFerramentas 
                ferramenta1={'Somente para desktop'}
                ferramenta2={'Criado com componentes'}
                ferramenta3={'Facil aproveitamento'}
            />

            <br />

            <Card 
                image='https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg'
                titulo={'Loren Ipsun'}
                text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
            />
            <Card 
                image='https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg'
                titulo={'Loren Ipsun'}
                text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
            />
            <Card 
                image='https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg'
                titulo={'Loren Ipsun'}
                text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
            />

            <Rodape rodape={'growdev@email.com'} />
        </div>
    );
}