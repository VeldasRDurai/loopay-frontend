const fetchAPIPost = async ( url, data ) =>
    await fetch( url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data),
        credentials: 'include'
    })

export {
    fetchAPIPost
}