// Definindo uma interface
interface ButtonProps {
    color:string;
}

export function Button(props: ButtonProps){ //A função deve receber as propriedades da interface como parâmetro
    return (
        <button type="button" style={{ backgroundColor: props.color }}>
            Botão
            <strong>Teste</strong>
        </button>
    );
}

//Usamos a chave dupla, uma é para dizer que queremos mostrar uma variável ou código JS, e a outra para indicar que é um objeto JS