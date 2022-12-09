const BASE_URL = "https://jsonplaceholder.typicode.com"
const TODOS_URL = "/todos/"

const getTodos = async () => {
    const response = await fetch(`${BASE_URL}${TODOS_URL}`)
    return await response.json()
}

const deleteTodo = async (id) => {
    const response = await fetch(`${BASE_URL}${TODOS_URL}${id}`, {
        method: 'DELETE',
    });
    return await response.json()
}

export { getTodos, deleteTodo }
