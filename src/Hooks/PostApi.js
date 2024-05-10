const post_api = async ({ url, data }) => {

    const baseurl = `http://localhost:5001/api/v1/${url}`
    console.log(baseurl, data);
    try {
        const response = await fetch(baseurl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'author': 'mohotasim_hadi_rafi'
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};
export default post_api