const createOneTimeUrlFromUrl = async (url) => {
    try {
        const response = await fetch(url); 
        if (!response.ok) {
            throw new Error('La solicitud no fue exitosa');
        }

        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob); 

        // setTimeout(() => {
        //     URL.revokeObjectURL(blobUrl);
        // }, 60000);
        return blobUrl;
    } catch (error) {
        console.error('Error by get SRC:', error);
        return null;
    }
}

export default createOneTimeUrlFromUrl