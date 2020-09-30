interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    }
}

export function signIn(): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'tokenaleatoriodeJWT',
                user: {
                    name: 'Joao',
                    email: 'joaogabrieldouradocervo@gmail.com'
                },
            });
        }, 1000)
    });
}