interface Curso {
    nome: string,
    horas: number,
    tags: string[]
}

const isCurso = (data: any): data is Curso => {
    return (
        typeof data.nome == 'string' &&
        typeof data.horas == 'number' &&
        Array.isArray(data.tags)
    )
}

const fetchCursos = async () => {
    try {
        const response = await fetch('https://api.origamid.dev/json/cursos.json');
        const data: any = await response.json();
        
        const cursos: Curso[] = data.filter(isCurso);
        
        const container = document.getElementById('cursos');
        if (container) {
            cursos.forEach(curso => {
                const div = document.createElement('div');
                div.innerHTML = `
                    <h2>${curso.nome}</h2>
                    <p>Horas: ${curso.horas}</p>
                    <p>Tags: ${curso.tags.join(', ')}</p>
                `;
                container.appendChild(div);
            });
        }
    } catch (error) {
        console.error('Erro ao buscar cursos:', error);
    }
}

fetchCursos();