



export const llamadaApi = async (num: number) => {
    const respuesta = await fetch(`https://catfact.ninja/facts?limit=${num}&max_length=100`)
    const body = await respuesta.json();



    return body.data;
}