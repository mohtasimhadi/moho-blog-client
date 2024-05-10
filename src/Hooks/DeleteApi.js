const DeleteApi = async ({ url }) => {
    const baseurl = `http://localhost:5001/api/v1/${url}`
    try {
        const response = await fetch(baseurl, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'author': 'mohotasim_hadi_rafi'
            },
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};
export default DeleteApi