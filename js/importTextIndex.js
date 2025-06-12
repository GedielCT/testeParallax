        // Carregar o conteúdo do arquivo .txt
        fetch('midia/textoIndex.txt')
            .then(response => response.text())
            .then(data => {
                // Exibir o texto carregado no elemento com id="corpo"
                document.getElementById('corpo').innerHTML = data.replace(/\n/g, '<br>');
            })
            .catch(error => {
                console.error('Erro ao carregar o texto:', error);
                document.getElementById('corpo').innerHTML = 'Erro ao carregar a história.';
            });