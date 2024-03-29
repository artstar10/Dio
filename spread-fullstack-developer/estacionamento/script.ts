interface Veiculo {
    nome: string;
    placa: string;
    entrada: Date | string;
    clientId?: string;
}

interface Pessoa {
    nome: string;
    cpf: string;
};

interface Cliente extends Pessoa {
    veiculos: Veiculo[];
}

(function () {
    const $ = (query: string): HTMLInputElement | null =>  
    document.querySelector(query);

    function calculoTempo(milisegundos: number) {
        const minutos = Math.floor(milisegundos / 6000);
        const segundos = Math.floor(milisegundos % 6000) / 1000;

        return `${minutos}m e ${segundos}`;
    }

    function patio() {
        function ler(): Veiculo[] {
            return localStorage.patio ? JSON.parse(localStorage.patio) : [];
        }

        function salvar(veiculos: Veiculo[]) {
            localStorage.setItem("patio", JSON.stringify(veiculos));
        }

        function adicionar(veiculo: Veiculo & { cupom?: string }, salva?: boolean) {
            const row = document.createElement("tr");

            row.innerHTML = `
            <td>${veiculo.nome}</td>
            <td>${veiculo.placa}</td>
            <td>${veiculo.entrada}</td>
            <td>
                <Button class="delete" data-placa="${veiculo.placa}">X</Button>
            </td>
            `;

            row.querySelector(".delete")?.addEventListener("click", function(){
                remover(this.dataset.placa as string);
            });

            $("#patio")?.appendChild(row);

            if(salva) salvar([...ler(), veiculo]);
        }

        function remover(placa: string) {
            const {entrada, nome} = ler().find(
                veiculo => veiculo.placa === placa
            );

            const tempo = calculoTempo(new Date().getTime() - new Date(entrada).getTime());

            if(!confirm(`O veículo ${nome} permaneceu por ${tempo}. Deseja encerrar?`)) return;

            salvar(ler().filter(veiculo => veiculo.placa !== placa));
            render();
        }

        function render() {
            $("#patio")!.innerHTML = "";
            const patio = ler();

            if (patio.length) {
                patio.forEach((veiculo) => adicionar(veiculo));
            }
        }

        return { ler, adicionar, remover, salvar, render };
    }
    
    patio().render();
    $("#cadastrar")?.addEventListener("click" , () => {
        const nome = $("#nome")?.value;
        const placa = $("#placa")?.value;

        if(!nome || !placa) {
            alert("Os campos nome e placa são obrigatórios");
            return;
        }

        patio().adicionar({ nome, placa, entrada: new Date().toISOString()}, true);
    });
})();